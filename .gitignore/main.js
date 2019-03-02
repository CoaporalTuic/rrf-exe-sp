const Discord = require('discord.js')
const bot = new Discord.Client()
const express = require('express');
const app = express();


//Debut Parametres Heroku 
app.set('port',(process.env.PORT || 5000))


bot.on('ready', () => {
    bot.user.setPresence({ game: { name: '[Help.exe] Bot By Tuic242', type: 0}});
    console.log("Bot Ready !");
})


bot.on('message', function (message) {
    if (message.content === 'Help.exe') {
        message.channel.send('**En Cours de codage....**')
    }
})

bot.login(process.env.TOKEN)
