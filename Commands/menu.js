const fs = require("fs");

module.exports = {
  name: "menu",
  aliases: ["help", "start"],

  description: "Montre menu prensipal MISTER XR.",

  async execute(sock, msg, args, config) {
    const jid = msg.key.remoteJid;

    const menu = `
╭━━━〔 🤖 MISTER XR 〕━━━╮
┃
┃ 👋 Welcome to MISTER XR!
┃
┃ 👑 OWNER
┃ ├ ${config.PREFIX}owner
┃ ├ ${config.PREFIX}restart
┃ └ ${config.PREFIX}broadcast
┃
┃ 🤖 GENERAL
┃ ├ ${config.PREFIX}menu
┃ ├ ${config.PREFIX}ping
┃ ├ ${config.PREFIX}alive
┃ ├ ${config.PREFIX}uptime
┃ ├ ${config.PREFIX}botinfo
┃ └ ${config.PREFIX}channel
┃ ├ ${config.PREFIX}rules
┃ 
┃ 👥 GROUP
┃ ├ ${config.PREFIX}kick
┃ ├ ${config.PREFIX}add
┃ ├ ${config.PREFIX}promote
┃ ├ ${config.PREFIX}demote
┃ ├ ${config.PREFIX}tagall
┃ ├ ${config.PREFIX}hidetag
┃ ├ ${config.PREFIX}groupinfo
┃ └ ${config.PREFIX}link
┃ ├ ${config.PREFIX}groupinfo
┃
┃ 🛡️ SECURITY
┃ ├ ${config.PREFIX}antilink
┃ ├ ${config.PREFIX}antispam
┃ └ ${config.PREFIX}antibadword
┃
┃ ⚙️ ADMIN
┃ ├ ${config.PREFIX}warn
┃ ├ ${config.PREFIX}warnings
┃ ├ ${config.PREFIX}mute
┃ └ ${config.PREFIX}unmute
┃
╰━━━━━━━━━━━━━━━━━━━━╯

📢 CHANNEL: ${config.CHANNEL_NAME}
🔗 ${config.CHANNEL_LINK}

🤖 Bot: ${config.BOT_NAME}
📦 Version: ${config.VERSION}
👑 Owner: ${config.OWNER_NAME}
`;

    const imagePath = config.MENU_IMAGE;

    if (imagePath && fs.existsSync(imagePath)) {
      await sock.sendMessage(jid, {
        image: fs.readFileSync(imagePath),
        caption: menu,
        contextInfo: {
          externalAdReply: {
            title: "📢 MISTER XR CHANNEL",
            body: "🔔 Follow our WhatsApp Channel",
            sourceUrl: config.CHANNEL_LINK,
            mediaType: 1,
            renderLargerThumbnail: true
          }
        }
      });
    } else {
      await sock.sendMessage(jid, {
        text: menu,
        contextInfo: {
          externalAdReply: {
            title: "📢 MISTER XR CHANNEL",
            body: "🔔 Follow our WhatsApp Channel",
            sourceUrl: config.CHANNEL_LINK,
            mediaType: 1
          }
        }
      });
    }
  }
};