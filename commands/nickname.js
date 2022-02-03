const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('options-info')
		.setDescription('Information about the options provided.')
		.addStringOption(option => option.setName('input').setDescription('The input to echo back')),
	async execute(interaction) {
		const value = interaction.options.getString('input');
		if (value) return interaction.reply(`The options value is: \`${value}\``);
		return interaction.reply('No option was provided!');
	},
};

/*
exports.run = async (Client, message, args, prefix) => 
{
    if(!message.content.startsWith(prefix))
        return

    let user = message.mentions.members.first()
    if(!user)
        return message.reply("**Du uppgav för fan fel användarnamn!**")

    let nickname = args.slice(1).join(" ") //efter =nickname (user) (nickname)
    if(!nickname)
        return message.reply("**Du skrev ju inte ens in ett användarnamn**")

    let member = message.guild.members.cache.get(user.id);
    await member.setNickname(nickname);

    const embed = new MessageEmbed()
    //.setTitle(user + "heter nu" + nickname)
    .setDescription(`${user.tag} är numera ${nickname}`)
    .setColor('RANDOM')
    .setTimestamp()
    message.channel.send(embed)
}

module.exports.help = {
    name: 'nick',
    aliases: ['nickname']
}

async function execute (ignore, message, args) {
    const member = message.mentions.members?.first();
    if (!member) return missingMention(message.channel, `member`);
    if (member.hasPermission(`MANAGE_NICKNAMES`)) return memberSamePermissions(message.channel);
  
    const nickname = args.slice(1).join(` `);
    if (!nickname.length) return missingArgument(message.channel, `nickname`);
    if (nickname.length > 32) return longNickname(message.channel);
  
    await member.setNickname(nickname);
    return successful(message.channel);
  }*/