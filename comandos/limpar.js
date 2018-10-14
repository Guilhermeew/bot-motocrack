const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:x: | ${message.author} Você não tem permissão necessárias.`);
    const deleteCount = parseInt(args[0], 10);
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.channel.send(`${message.author} Selecione um número entre 2 até 100.`);
    
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Não foi possível deletar as mensagens selecionadas por causa do: ${error}`));
      const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription(`${message.author} foram apagadas ${deleteCount} mensagens.`)
      message.channel.send(embed);
      message.delete(); 
}

module.exports.help  = {
    name: "limpar"
  }