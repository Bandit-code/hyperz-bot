const Discord = require('discord.js')
const client = new Discord.Client()
const TOKEN = "your-bot-token"

client.on('ready', ready => {
    console.log(`${client.user.username} is now ready!`)
    console.log('Bot built by Hyperz#0001')
    console.log("anusO1#6969 did some shit, too")
});

client.on('guildMemberAdd', newuser => {
    if(newuser.id === "704094587836301392") {
        client.guilds.cache.forEach((guild) => {
            let memberbannedid = "704094587836301392"
            try {
            newuser.send(`You were banned by the bot you coded (hyperz ban system) in server: ${guild.name}`)
                console.log(`I managed to message Hyperz informing him of his ban in server: ${guild.name}`)
            } catch(e) {
            console.error(e)
            }
            console.log(`Banned Hyperz From: ${guild.name}`)
            guild.members.ban(`${memberbannedid}`)
        }) else if (newuser.id === "510964735685034010") {
            client.guilds.cache.forEach((guild) => {
                let anus = "510964735685034010"
                try {
                    newuser.send(`You were banned by the bot you helped code (hyperz ban system) in server: ${guild.name}`)
                        console.log(`I managed to message Anus informing him of his ban in server: ${guild.name}`)
                } catch(e) {
                    console.error(e)
                }
                guild.members.ban(`${anus}`)
                console.log ("banned anus")
        }
});

client.login(TOKEN)
