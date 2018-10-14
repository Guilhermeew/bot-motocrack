const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
message.delete()
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`:x: | ${message.author} Você não tem permissão para utilizar este comando!`);
      
  var da = message.guild.roles.find(c => c.name == '@everyone')
  message.channel.overwritePermissions(da, {
      SEND_MESSAGES: true
    })
    let embedon = new Discord.RichEmbed()
    .setDescription(`🔉 | Canal **REATIVADO** por: ${message.author}`)
    .setColor('RANDOM')
    message.channel.send(embedon)
}

module.exports.help  = {
    name: "chat-on"
  }

