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
        message.channel.send('**Mes commande : \n[PDG.exe] Prise de garde \n[FDG.exe] Fin de garde**')
    }
})


bot.on('message', function (message) {
    if (message.content === 'PDG.exe') {
        message.reply('**Vient de prendre sa garde**')
    }
})

bot.on('message', function (message) {
    if (message.content === 'FDG.exe') {
        message.reply('**Vient de finir sa garde**')
    }
})

bot.login(process.env.TOKEN)
