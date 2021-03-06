<div align="center">
  <img src="https://cdn.discordapp.com/avatars/949449016389820438/efb1cf4347e186cdf79eb4ee65d8ea38.webp?size=256" align="center" alt="Red Queen">
</div>

# Red Queen
> A small bot for our gaming community.

# Contents
- [Commands](#commands)
  - [Chance](#chance)
  - [Events](#events)
  - [Remind](#remind)
  - [Music](#music)
  - [Board Game Geek](#board-game-geek)
  - [COVID 19](#covid-19)
  - [Feedback](#feedback)  
  - [Utilities](#utilities)

# Commands

| Key | Info |
| ------- | ------- |
| **Prefix** | Commands must be prefixed with `$`. |
| \<argument\> | This means the argument is required. Do not type the brackets. |
| \[argument\] | This means the argument is optional. Do not type the brackets. |

## Chance
Various chance related commands

| Command | Info |
| ------- | ------- |
| `$coin` | Flips a coin for you. |
| `$roll <d#> [+/-] [#]` | Rolls a dice (d4 - d100) of your choice, then adds or subtracts your modifier. You'll get a number from 1 to #.|
| `$gmroll <d#> [+/-] [#]` | Rolls a dice (d4 - d100) of your choice, then adds or subtracts your modifier. A number from 1 to # will be sent to you in a private message. |
| `$conch <question>` | Oh, magic conch shell... |

[⬆ Back to top](#contents)


## Events
Commands to setup events for the channel, which people can RSVP to, as well as a thread for the event. A reminder will also be sent the day of the event at 8:00 AM in the event's timezone.

| Command | Info |
| ------- | ------- |
| `$event ?` | Bot will send a link directly to this section of the help file. |
| `$event <#channel>` | Setup which channel events will be posted to, regardless of where they are created on the server. |
| `$event <YYYY-MM-DD> <HH:mm> <AM/PM> <timezone>` | Once entered, the bot will ask you to enter a Title for the event, followed by a Description, and a Location - each in its own subsequent message. At any time, you may type `quit` to cancel. |

### Valid Timezones
You must use a timezone that is accepted by moment.js. See the link [here](https://github.com/the-archbishop/red-queen/blob/main/timezones.txt) for all acceptable timezones. Commonly used timezones are below.

- EST
- EST5EDT
- CST6CDT
- PST8PDT
- US/Central
- US/Eastern
- US/Mountain
- US/Pacific
- UTC

### Example
![Screenshot from Discord showing an example event](https://i.imgur.com/Ec0YTut.png "Example response for $event, after all details are entered")

[⬆ Back to top](#contents)


## Remind

| Command | Info |
| ------- | ------- |
| `$remind <time> <reminder>` | Reminds you of something at the time interval given. |

#### Time Examples

| Interval | Format |
| ------- | ------- |
| Years | 1y |
| Days | 7d |
| Hours | 2.5h |
| Minutes | 45m |
| Seconds | 30s |

[⬆ Back to top](#contents)


## Music
Commands to control the music player<br />
***Note: Must be in a voice channel to utilize these commands***

| Command | Alias | Info |
| ------- | ------- | ------- |
| `$music play <YouTube URL or artist song name>` | `add` | Begins playing the first song, or adds a song to the queue. |
| `$music volume <#>` | `vol` | Sets volume to a number between 1 and 100. |
| `$music queue` | `q` | Gets a list of songs currently in the queue. |
| `$music skip` | `next` | Skips to the next song in the queue. |
| `$music pause` | `hold` | Pauses the current song. |
| `$music resume` | `unpause` | Resumes playing the paused song. |
| `$music stop` | `quit` | Stops playing music and exits the voice channel. |

[⬆ Back to top](#contents)


## Board Game Geek
Commands utilizing Board Game Geek's search engine or API

| Command | Info |
| ------- | ------- |
| `$bgc <name> [playerCount] [maxPlayTime]` | Returns a link to a list of the user's board games, matching the player count and max play times (if entered). |
| `$bgghot` | Returns a hyperlinked list of the top 15 games on Board Game Geek. |

[⬆ Back to top](#contents)


## COVID 19
Commands that grab state level information on COVID-19 from the Covid ActNow API

|    Command    | Info |
| ------- | ------- |
|    `$covid <state>`     | Displays current information (including overall CDC risk level, infection rate, positivity rate, etc.) on COVID-19 in a specified state. |
|    `$covidhist <state> [days]`     | Generates a graph of historical information on new cases and deaths per state for the past 14 days by default. A different number of days may be specified if desired. |

### Example

![Screenshot from Discord detailing COVID information for VA](https://i.imgur.com/a08U3Jf.jpg "Example response for $covid va")

[⬆ Back to top](#contents)


## Feedback
Various feedback related commands

|    Command    | Info |
| ------- | ------- |
|    `$poll <question>`     | Creates a simple poll with thumbs up or down reactions. |
|    `$dndday`     | Creates a poll with days of the week so that people can choose which day works best for them to play DnD. |

### Example
![Screenshot from Discord detailing the $dndday command](https://i.imgur.com/OwRkUCT.png "Example response for $dndday")

[⬆ Back to top](#contents)


## Utilities
Commands that grab information on Discord or the bot

|    Command    | Info |
| ------- | ------- |
|    `$help`     | Links to the help page. |
|    `$ping`     | Shows your latency to the server as well as the current API latency. |
|    `$stats`    | Shows server stats. |
|    `$userinfo` | Shows information about the user, such as date joined and roles. |

[⬆ Back to top](#contents)
