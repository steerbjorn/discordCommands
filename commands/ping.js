const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!')
        .addStringOption((option) =>
        option
        .setName("message")
        .setDescription("ping?")
        ),
	async execute(interaction) {
		return interaction.reply('Pong!');
	},
};