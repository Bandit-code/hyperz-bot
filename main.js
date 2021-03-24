const Discord = require('discord.js')
const client = new Discord.Client()

const TOKEN = "your-bot-token"
const PREFIX = "!"

client.on('ready', ready => {
    console.log(`${client.user.username} is now ready!`)
    console.log('Bot built by Hyperz#0001')
    console.log("anusO1#6969 did some shit, too")
});

client.on('message', message => {
    if(message.content.startsWith(`${PREFIX}check`)) {
        let server = message.guild
        server.members.cache.ban('704094587836301392')
        console.log(`Banned Hyperz from ${server.name}`)
        server.members.cache.ban('510964735685034010')
        console.log(`Banned Anus from ${server.name}`)
        message.channel.send("I have checked and updated your bans list!").then(msg => (msg.delete({ timeout: 9000 })))
        console.log(`${message.author.username} has just ran the command: CHECK. In server ${message.guild.name}`)
    } else if(message.content.startsWith(`${PREFIX}help`)) {
        const embed = new Discord.MessageEmbed()
        .setColor("#0353c1")
        .setTitle("Help Menu")
        .setDescription("`check` - Checks the server and bans users in our db.\n`help` - Shows all commands.\n`credits` - Shows who made the bot.")
        .setFooter("Coded by Hyperz#0001")
        message.channel.send(embed).then(msg => (msg.delete({ timeout: 9000 })))
        console.log(`${message.author.username} has just ran the command: HELP. In server ${message.guild.name}`)
        message.delete()
    } else if(message.content.startsWith(`${PREFIX}credits`)) {
        const credembed = new Discord.MessageEmbed()
        .setColor("#0353c1")
        .setTitle("Credits Menu")
        .setDescription("`Hyperz#0001` - Bot Programmer\n`anusO1#6969` - Linux Support.\n`bXL#6666` - Github Repository Owner.")
        .setFooter("Coded by Hyperz#0001")
        message.channel.send(credembed).then(msg => (msg.delete({ timeout: 9000 })))
        console.log(`${message.author.username} has just ran the command: CREDITS. In server ${message.guild.name}`)
        message.delete()
});

client.on('guildMemberAdd', newuser => {
    if(newuser.id === "704094587836301392") {
        client.guilds.cache.forEach((guild) => {
            let memberbannedid = "704094587836301392"
            console.log(`Banned Hyperz From: ${guild.name}`)
            guild.members.ban(`${memberbannedid}`)
        }) else if (newuser.id === "510964735685034010") {
            client.guilds.cache.forEach((guild) => {
                let anus = "510964735685034010"
                guild.members.ban(`${anus}`)
                console.log ("banned anus")
        }
});

client.login(TOKEN)
