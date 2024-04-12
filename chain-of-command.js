const { EmbedBuilder, WebhookClient } = require('discord.js');

// TODO make sure clienturl is the right url
const clientURL = "https://discord.com/api/webhooks/1228077276663648286/6qZk-Oerck7wTI-214Gclljyt1b_qd8pIO9eORFLAEC3oOVt8SXlCP5iD_cuz0nYot4r";

// TODO update messageID too for future use
// const webhookMessageID = '1228112845833764967' //https://discord.com/channels/1078769888920866836/1078769888920866839/1228112845833764967
const clientName = "Army Special Forces";
const embedColour = 0x034D74;

const asocCgDiscID  = '725256691951599617'; //Up to date - Rangers
const asocDcgDiscID = '837231102107058176'; //Up to date - Frenchie
const asocCsmDiscID = '1071498123538608289'; //Up to date - Blues
const asocCosDiscID = '853788125599498240'; //Up to date - rainbow

const asfCoDiscID  = '1054506797693681724'; //Up to date - Clake
const asfXoDiscID  = '690333152975388692'; //Up to date - Michael
const asfCsmDiscID = '438271129711411200'; //Up to date - evan

const firstGcoDiscID = '692464070695059607'; //Up to date - Potato
const firstGxoDiscID = '606684087494639626'; //Up to date - Acur
const firstGsmDiscID = '296331246311702548'; //Up to date - Tvctical

const fifthGcoDiscID = '745963829565063201'; //Up to date - Teleported
const fifthGxoDiscID = '807997505584365568'; //Up to date - IGSC
const fifthGsmDiscID = '738960508904013866'; //Up to date - rainbowman (cono)

// You should be able to adjust all the constants above to keep the info up to date,
// without fiddling with everything below

const webhookClient = new WebhookClient({ url: clientURL })

const embed = new EmbedBuilder()
	.setTitle('**__Chain of Command__**')
	.setColor(embedColour)
	.setDescription(
		'**:ASOC~3:| Army Special Operations Command Staff**\n'+
		'**Commanding General**\n'+
		'General, <@' + asocCgDiscID + '>\n'+
		'**Deputy Commanding General**\n'+
		'Lieutenant General, <@' + asocDcgDiscID + '>\n'+
		'**Command Sergeant Major**\n'+
		'Command Sergeant Major, <@' + asocCsmDiscID + '>\n'+
		'**Chief of Staff**\n'+
		'Major General, <@' + asocCosDiscID + '>\n'+
		'\n'+
		'**:SPECIALFORCESAIRBORNE:| Army Special Forces Headquarters**\n'+
		'**Commanding Officer**\n'+
		'Major General, <@' + asfCoDiscID + '>\n'+
		'**Executive Officer**\n'+
		'Brigadier General, <@' + asfXoDiscID + '>\n'+
		'**Command Sergeant Major**\n'+
		'Command Sergeant Major, <@' + asfCsmDiscID + '>\n'+
		'\n'+
		'**:1stSFG: | 1st Special Forces Group Headquarters**\n'+
		'**Group Commanding Officer**\n'+
		'Colonel, <@' + firstGcoDiscID + '>\n'+
		'**Group Executive Officer**\n'+
		'Lieutenant Colonel, <@' + firstGxoDiscID + '>\n'+
		'**Group Sergeant Major**\n'+
		'Sergeant Major, <@' + firstGsmDiscID + '>\n'+
		'\n'+
		'**:5thSFG~1: | 5th Special Forces Group Headquarters**\n'+
		'**Group Commanding Officer**\n'+
		'Colonel, <@' + fifthGcoDiscID + '>\n'+
		'**Group Executive Officer**\n'+
		'Lieutenant Colonel, <@' + fifthGxoDiscID + '>\n'+
		'**Group Sergeant Major**\n'+
		'Sergeant Major, <@' + fifthGsmDiscID + '>\n'
	)
	.setImage("https://media.discordapp.net/attachments/692044595793756284/1115723777934884864/CQB_5.png")

webhookClient.send({
	username: clientName,
	embeds: [embed]
});

// webhookClient.editMessage(webhookMessageID, {
// 	embeds: [embed]
// });