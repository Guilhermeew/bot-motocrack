const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    message.delete()
const embed = new Discord.RichEmbed()
.setDescription('Entre em nossos servidores pelo endereço: **jogar.motonetwork.com.br**.')
.setColor('RANDOM') 
message.channel.send(embed)
}

module.exports.help  = {
    name: "ip"
  }