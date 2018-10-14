const Discord = require('discord.js')
const moment = require('moment');
moment.locale('pt-BR');

module.exports.run = async (bot, message, args) => {
    let usuario = message.guild.member(message.mentions.users.first() || bot.users.get(args[0]) || message.author);
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle('MotoCrack - Saida')
  .setDescription(`**${usuario}**, saiu do servidor.`)
  .addField('Horário:', moment(usuario.joined).format('LLL'))
  .setTimestamp()
  .addField('Data:', moment(usuario.joined).format('L'))
  .setThumbnail(message.author.avatarURL)
  .setFooter(`MotoCrack ${moment(usuario.joined).format('L')}`)
  message.channel.send(embed)
}
module.exports.help  = {
    name: "sair"
  }