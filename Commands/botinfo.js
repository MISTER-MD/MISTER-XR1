module.exports = {
  name: "botinfo",
  aliases: ["info"],

  description: "Montre enfòmasyon sou MISTER XR.",

  async execute(sock, msg, args, config) {
    const jid = msg.key.remoteJid;

    const text = `
╭━━━〔 🤖 MISTER XR 〕━━━╮
┃
┃ 📌 BOT INFORMATION
┃
┃ 🤖 Name: ${config.BOT_NAME}
┃ 📦 Version: ${config.VERSION}
┃ 👤 Author: ${config.AUTHOR}
┃ 👑 Owner: ${config.OWNER_NAME}
┃ ⚡ Prefix: ${config.PREFIX}
┃ 🌐 Website: ${config.WEBSITE}
┃
┃ 🟢 Status: ONLINE
┃ ⚙️ Platform: WhatsApp
┃ 🚀 Engine: Baileys
┃
╰━━━━━━━━━━━━━━━━━━━━╯
`;

    await sock.sendMessage(jid, {
      text
    });
  }
};