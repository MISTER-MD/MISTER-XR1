module.exports = {
  name: "channel",
  aliases: ["ch", "follow"],

  description: "Voye lyen Channel WhatsApp MISTER XR.",

  async execute(sock, msg, args, config) {
    const jid = msg.key.remoteJid;

    if (!config.CHANNEL_LINK) {
      return sock.sendMessage(jid, {
        text: "❌ Channel la poko konfigire."
      });
    }

    const text = `
╭━━━〔 📢 MISTER XR CHANNEL 〕━━━╮
┃
┃ 🤖 Bot: ${config.BOT_NAME}
┃ 📢 Channel: ${config.CHANNEL_NAME}
┃
┃ 🔔 Follow Channel la pou resevwa
┃ nouvo mizajou ak enfòmasyon.
┃
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯

🔗 ${config.CHANNEL_LINK}
`;

    await sock.sendMessage(jid, {
      text,
      contextInfo: {
        externalAdReply: {
          title: `📢 ${config.CHANNEL_NAME}`,
          body: "🔔 Follow WhatsApp Channel",
          sourceUrl: config.CHANNEL_LINK,
          mediaType: 1
        }
      }
    });
  }
};