module.exports = {
  name: "groupinfo",
  aliases: ["ginfo"],

  description: "Montre enfòmasyon sou gwoup la.",

  async execute(sock, msg, args, config) {
    const jid = msg.key.remoteJid;

    // Verifye si se yon gwoup
    if (!jid.endsWith("@g.us")) {
      return sock.sendMessage(jid, {
        text: "❌ Command sa a mache sèlman nan yon gwoup."
      });
    }

    try {
      const metadata = await sock.groupMetadata(jid);

      const admins = metadata.participants.filter(
        participant =>
          participant.admin === "admin" ||
          participant.admin === "superadmin"
      ).length;

      const text = `
╭━━━〔 👥 GROUP INFO 〕━━━╮
┃
┃ 📌 Name: ${metadata.subject}
┃ 🆔 ID: ${metadata.id}
┃ 👥 Members: ${metadata.participants.length}
┃ 👑 Admins: ${admins}
┃
┃ 🤖 Bot: ${config.BOT_NAME}
┃ 📦 Version: ${config.VERSION}
┃
╰━━━━━━━━━━━━━━━━━━━━╯
`;

      await sock.sendMessage(jid, {
        text
      });

    } catch (error) {
      console.error("❌ GroupInfo Error:", error);

      await sock.sendMessage(jid, {
        text: "❌ MISTER XR pa kapab jwenn enfòmasyon gwoup la."
      });
    }
  }
};