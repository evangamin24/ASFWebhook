const { EmbedBuilder, WebhookClient } = require('discord.js');
// const { webhookId, webhookToken } = require('./config.json');

const clientURL = "https://discord.com/api/webhooks/1228077276663648286/6qZk-Oerck7wTI-214Gclljyt1b_qd8pIO9eORFLAEC3oOVt8SXlCP5iD_cuz0nYot4r";
const clientName = "Army Special Forces";
const clientAvatarURL = "https://imgur.com/a/YCX8Hdk/png";

const webhookClient = new WebhookClient({ url: clientURL })

const embed = new EmbedBuilder()
	.setTitle('embed yap')
	.setColor(0x034D74);

webhookClient.send({
	username: clientName,
	avatarURL: clientAvatarURL,
	embeds: [embed]
});