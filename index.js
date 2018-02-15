const Discord = require('discord.js'); 
const bot = new Discord.Client(); 
const config = require("./config.json");
const fs = require("fs");


//When Bot Comes Online
bot.on("ready", ()=> {
    console.log('DnD Bot Online!');
    bot.user.setActivity('Dungeons and Dragons'); 
   ;
});

 bot.login(process.env.BOT_TOKEN);

//Host Assistant Commands
bot.on('message', (message) => { 
    if (!message.content.startsWith(config.prefix)) return; 
    if (message.author.bot) return;
    if(message.content.startsWith(config.prefix + 'ping')) {
        message.reply(`Pong! \`${Date.now() - message.createdTimestamp}ms\``); 
        console.log('Pong Command Used');
        //message.reply means it @'s author
        //to send message to channel do message.channel.sendMessage('message content'); 
        //add more commands by adding else to } ex. }else etc. 
    }  

    if(message.content.startsWith(config.prefix+ 'd20' )) {
        var role = Math.floor((Math.random() * 20) +1); 
        message.channel.send(`${message.author.username} rolled a ${role}!`)
    }  

    if(message.content.startsWith(config.prefix+ 'd10' )) {
        if(message.content.includes('d100')){
            var roll = Math.floor((Math.random() *100) + 1); 
            message.channel.send(`${message.author.username} rolled a ${roll}!`)
        } else 
        if(message.content.endsWith('d10')) { 
            var role = Math.floor((Math.random()* 10) + 1); 
        message.channel.send(`${message.author.username} rolled a ${role}!`)
        }
    }  

    if(message.content.startsWith(config.prefix+ 'd8' )) {
        var role = Math.floor((Math.random() * 8) + 1); 
        message.channel.send(`${message.author.username} rolled a ${role}!`)  
    }  

    if(message.content.startsWith(config.prefix+ 'd6' )) {
        var role = Math.floor((Math.random() * 6) + 1); 
        message.channel.send(`${message.author.username} rolled a ${role}!`)
    }  

    if(message.content.startsWith(config.prefix+ 'd4' )) {
        var role = Math.floor((Math.random() * 4) + 1); 
        message.channel.send(`${message.author.username} rolled a ${role}!`)
    } 
    

});
