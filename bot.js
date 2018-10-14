const Discord = require("discord.js");
const config = require("./config.json");
require('http').createServer().listen(3000)

var bot = new Discord.Client()


bot.on('ready', () => {
 console.log('BOT criado por Guilherme');
 bot.user.setActivity(`Criado por: Guilhermeew#8853`);
});


bot.on('message', async message => {
      if(message.author.bot) return;
      if(message.channel.type === "dm") return;
      if(!message.content.startsWith(config.prefix)) return; 
  
      const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
  
      try{
          let commandFile = require(`./comandos/${command}.js`)
          commandFile.run(bot, message, args);
  
        } catch (err) {
          if(err.code != 'MODULE_NOT_FOUND'){
         console.log(err)
      } else if(err.code == 'MODULE_NOT_FOUND'){
        const embed = new Discord.RichEmbed()
        .setDescription('O comando não foi encontrado.')
        .setColor('RAMDOM')
          await message.channel.send(embed)
      }
  }
  });

bot.login(process.env.TOKEN);