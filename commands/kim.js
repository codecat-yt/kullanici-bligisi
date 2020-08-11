const Discord = require('discord.js');
const discord = require("discord.js")
const moment = require('moment');
module.exports = {
  name: "kullanicinfo",
  aliases: ["kullanici hakkinda bilgi verir"],
  description: "guzel bir komut",
  run: async (client, message, args) => {
   
    
    module.exports.run = async (bot, message, args) => {
        let userArray = message.content.split(" ");
        let userArgs = userArray.slice(1);
        let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;
    
        if (member.presence.status === 'dnd') member.presence.status = 'Rahatsiz Etme';
        if (member.presence.status === 'online') member.presence.status = 'Çevrimiçi';
        if (member.presence.status === 'idle') member.presence.status = 'Bosta';
        if (member.presence.status === 'offline') member.presence.status = 'Çevrimdisi';
    
        let x = Date.now() - member.createdAt;
        let y = Date.now() - message.guild.members.cache.get(member.id).joinedAt;
        const joined = Math.floor(y / 86400000);
    
        const joineddate = moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss");
        let status = member.presence.status;
    
        const userEmbed = new Discord.MessageEmbed()
        .setAuthor(member.user.tag, member.user.displayAvatarURL())
        .setTimestamp()
        .setColor('RANDOM')
        .setImage(member.user.displayAvatarURL())
        .addField("Uye ID:", member.id)
        .addField('Roller:', `<@&${member._roles.join('> <@&')}>`)
        .addField("Hesap bu tarihte olusturuldu:", ` ${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY")}`, true) 
        .addField('Sunucuya Bu zaman katildi:', `${joineddate} \n> ${joined} gun(ler) once`)
        .addField("Durum", status)
        .setFooter("Code Cat'e Tesekkurler :)")
    
        message.channel.send(userEmbed);
    }
}
}