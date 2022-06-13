module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
		console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);

        if (interaction.isCommand()) {
          const command = interaction.client.commands.get(interaction.commandName);
          command?.execute(interaction);
        }
	},
};