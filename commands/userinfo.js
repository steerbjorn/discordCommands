const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
	.setName('info')
	.setDescription('Vem vill du lära dig mer om?')
	.addStringOption(option =>
		option.setName('vem')
			.setDescription('dfg')
			.setRequired(true)
			.addChoice('axel', 'Axel')
			.addChoice('petrell', 'petrell')
			.addChoice('starlord', 'starlord')
			.addChoice('uno', 'Uno')
			
	),

	async execute(interaction) {
		await interaction.options.getString('vem');
			if (!interaction.isCommand()) return;
	}
	
};
