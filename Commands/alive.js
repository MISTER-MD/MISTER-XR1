module.exports = {
  name: "alive",
  aliases: ["status"],

  description: "Verifye si MISTER XR aktif.",

  async execute(sock, msg, args, config) {
    const jid = msg.key.remoteJid;

    const text = `
╭━━━〔 🤖 MISTER XR 〕━━━╮
┃
┃ 🟢 Status: ONLINE
┃ 🤖 Bot: ${config.BOT_NAME}
┃ 📦 Version: ${config.VERSION}
┃ ⚡ Prefix: ${config.PREFIX}
┃ 👑 Owner: ${config.OWNER_NAME}
┃
╰━━━━━━━━━━━━━━━━━━━━╯
`;

    await sock.sendMessage(jid, {
      text
    });
  }
};