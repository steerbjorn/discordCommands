const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('vem är')
    .setDescription('vemär'),

  async execute(interaction) {

    if(setName === 'vem är axel?') {
      return interaction.reply('Axel är en riktig jävla klåpare född 1992. Hans far Göran är också en riktig klåpare. Hans bror sägs ha en 40cm balle.');
    }
  }
};
  /*
    if (message.content === 'vem är axel?') {
    message.channel.send('Axel är en riktig jävla klåpare född 1992. Hans far Göran är också en riktig klåpare. Hans bror sägs ha en 40cm balle.')
    }
    if (message.content === 'vem är petrell?') {
      message.channel.send('Martin Petrell är en lurig sate född 1990 i Sävsjö. Han kan inte dricka en öl utan att böja flärpen 90 grader åt vänster. Hans källare är radioaktiv.')
    }
    if (message.content === 'vem är nille?') {
      message.channel.send('Nille, även kallad Starlord, föddes 1990. Hans rygg gör ofta ont på grund av all carrying i skjutspel. Hans kompisar gav honom en foliehatt en gång, ingen vet riktigt varför.')
    }
    if (message.content === 'vem är rickard?') {
      message.channel.send('Rickard föddes 1990 bland de djupaste Sjötorps-skogarna. Numera är han bosatt i Stockholm där han predikar om sin hembys uteställen och Knox-snus.')
    }
    if (message.content === 'vem är nancy pelosi?') {
      message.channel.send('House Speaker Nancy Pelosi är satan själv utklädd till politiker. Hon älskar att sprida propaganda och är väldigt medveten om gamla taktiker som "fördela och härska".')
    }
    if (message.content === 'vem är donald trump?') {
      message.channel.send('Donald Trump vann både valet 2016 och 2020. Han har gjort många bra grejer som tycks ha förbigått många. I den här discorden vet vi om detta faktum.')
    }
    if (message.content === 'vem är adolf hitler?') {
      message.channel.send('Adolf Hitler var en tysk diktator...som det visade sig hade rätt i slutändan.')
    }


      if (message.content === 'hade hitler rätt?') {
        message.channel.send('Ja.')
      }
      if (message.content === 'var det valfusk i usa 2020?') {
        message.channel.send('Ja, men bara enligt oändliga högar bevismaterial.')
      }
      if (message.content === 'var det valfusk i usa 2016?') {
        message.channel.send('Nej, och börja för fan inte mala om ryssen.')
      }
};

//module.exports = async (client, message) =>*/