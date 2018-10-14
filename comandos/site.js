const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    message.delete();
const embed = new Discord.RichEmbed()
.setDescription('Entre no nosso site acessando **http://motonetwork.com.br/**.')
.setColor('RANDOM') 
message.channel.send(embed)
}

module.exports.help  = {
    name: "site"
  }

