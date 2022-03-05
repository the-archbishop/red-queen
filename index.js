// REQUIREMENTS
const Discord = require('discord.js');
const client = new Discord.Client({ intents: 
  ["GUILDS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "GUILD_MESSAGE_TYPING", "GUILD_PRESENCES"]
});
const fetch = require('node-fetch');
const fs = require('fs').promises;
const path = require('path');
const keepAlive = require("./server.js");
const botToken = process.env['TOKEN'];
const cmdPrfx = process.env['PREFIX'];
client.commands = new Map();

// Register commands
(async function registerCommands(dir = '/commands'){
  // Read the directory
  let files = await fs.readdir(path.join(__dirname, dir));
  // Loop through each file
  for(let file of files) {
    let stat = await fs.lstat(path.join(__dirname, dir, file));
    if(stat.isDirectory()) // if the file is a directory, recursive call recurDir
      registerCommands(path.join(dir, file));
    else {
      // Check if file is a .js file
      if(file.endsWith(".js")){
        let cmdName = file.substring(0, file.indexOf(".js"));
        let cmdModule = require(path.join(__dirname, dir, file));
        client.commands.set(cmdName, cmdModule);
      }
    }
  }
  console.log("Commands loaded:")
  console.log(client.commands);
})()

// Bot
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`)
});

client.on("message", msg => {
  // Exit if message author is a bot or message does not start with prefix
  if (msg.author.bot) return
  if (!msg.content.startsWith(cmdPrfx)) return
  
  // Get command
  let msgContent = msg.content.toLowerCase();
  let cmdName = msgContent.substring(msgContent.indexOf(cmdPrfx)+1).split(new RegExp(/\s+/)).shift();
  let cmdArgs = msgContent.substring(msgContent.indexOf(' ')+1);
  if (client.commands.get(cmdName))
        client.commands.get(cmdName).run(client, msg, cmdArgs);
    else
        console.log("Command does not exist.");
});

// Login to the server
keepAlive();
client.login(botToken);
