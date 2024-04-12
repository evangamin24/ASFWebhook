const { EmbedBuilder, WebhookClient } = require('discord.js');

// TODO make sure clienturl is the right url
const clientURL = "https://discord.com/api/webhooks/1228077276663648286/6qZk-Oerck7wTI-214Gclljyt1b_qd8pIO9eORFLAEC3oOVt8SXlCP5iD_cuz0nYot4r";

// TODO update messageID too for future use
// const webhookMessageID = '1228112845833764967' //https://discord.com/channels/1078769888920866836/1078769888920866839/1228112845833764967
const clientName = "Army Special Forces";
const embedColour = 0x034D74;
const embedImage = "https://media.discordapp.net/attachments/692044595793756284/1103742658502987797/ASF10point5.png?ex=662a99f4&is=661824f4&hm=17aeabcec5c4ad220dab99c858e6841abf52640df8c1ad65c6d5bd9a38d23f9f&format=webp&width=1154&height=671&"

// You should be able to adjust all the constants above to keep the info up to date,
// without fiddling with everything below

const webhookClient = new WebhookClient({ url: clientURL })

const embed = new EmbedBuilder()
	.setTitle('**__Information__**')
	.setColor(0x034D74)
	.setDescription(
		"**:SPECIALFORCESAIRBORNE:| Information**\n"+
		"The Army Special Forces - also known as the Green Berets - are an elite fighting force at the forefront of all wars with insurgents. Tasked with securing the bears and minds of the population and starting insurgencies, they are the first point of call for the Army Special Operations Command when they need a revolution stirred up somewhere or enemies neutralized in a civilian-inhabited area. This channel is the hub for all information required in the Army Special Forces. If you are serving in Army Special Forces, familiarize yourself with the information provided.\n"+
		"\n"+
		"**:SPECIALFORCESAIRBORNE:| Server Rules**\n"+
		"- You must respect all members, regardless of their rank.\n"+
		"- Profane language should be kept at a minimum at ALL TIMES.\n"+
		"- Spamming is prohibited and will result in removal from the Discord.\n"+
		"- Do not advertise in any way, including self-advertisements.\n"+
		"- Do not disclose or leak any information from the Army Special Forces Discord to non-members.\n"+
		"- Do not tag the server owner.\n"+
		"- Don't spam-ping personnel, officers, or Headquarters.\n"+
		"- Posting links to malicious/pornographic websites will result in an immediate removal.\n"+
		"- Always obey the server admins, as they are here to enforce rules.\n"+
		"- Please refrain from posting the following topics on this server:\n"+
		" - Politics,\n"+
		" - Religion,\n"+
		" - Generally controversial topics,\n"+
		" - Conspiracy theories that pertain to any of the above,\n"+
		" - Racial or offensive slurs,\n"+
		" - Anything sexual/pornographic,\n"+
		"- As per Discord's TOS, users under the age of 13 are not allowed on this server. Anyone under 13 will be banned and reported to Discord.\n"+
		"\n"+
		"**:SPECIALFORCESAIRBORNE: Resources**\n"+
		"• ASF | Introduction\n"+
		"https://docs.google.com/document/d/11kCXLfX1SS-_UZlQE6gXI9PmWA0hqY33lVtPZc_LCBA\n"+
		"\n"+
		"- ASF | Code of Conduct\n"+
		"<#1176960246921580645>\n"+
		"\n"+
		"- ORBAT & Activity Tracker (Check quota and position here)\n"+
		"https://docs.google.com/spreadsheets/d/1hR2C2xzESjk_29xTSFuD1TdlfUGef9SHJs4vyEFXD-0\n"+
		"\n"+
		"- ASF | Inspection Study Sheet\n"+
		"https://docs.google.com/document/d/14EaYGbZoJPK4b3AfhuYElCJSxIWyv-9ybGqP9XGoarI\n"
	)
	.setImage(embedImage);

webhookClient.send({
	username: clientName,
	embeds: [embed]
});

// webhookClient.editMessage(webhookMessageID, {
// 	embeds: [embed]
// });