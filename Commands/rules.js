module.exports = {
  name: "rules",
  aliases: ["regle", "règlements"],

  description: "Montre règ MISTER XR.",

  async execute(sock, msg, args, config) {
    const jid = msg.key.remoteJid;

    const text = `
╭━━━〔 📜 MISTER XR RULES 〕━━━╮
┃
┃ 1️⃣ Pa spam bot la.
┃ 2️⃣ Pa voye kontni ilegal.
┃ 3️⃣ Respekte lòt itilizatè yo.
┃ 4️⃣ Pa itilize bot la pou fè domaj.
┃ 5️⃣ Respekte règ gwoup yo.
┃
┃ 🤖 Bot: ${config.BOT_NAME}
┃ 📦 Version: ${config.VERSION}
┃
╰━━━━━━━━━━━━━━━━━━━━━━━━━━╯
`;

    await sock.sendMessage(jid, {
      text
    });
  }
};