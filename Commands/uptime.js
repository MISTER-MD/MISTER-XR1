const { formatUptime } = require("../lib/functions");

module.exports = {
  name: "uptime",
  aliases: ["up"],

  description: "Montre depi konbyen tan MISTER XR ap mache.",

  async execute(sock, msg, args, config) {
    const jid = msg.key.remoteJid;

    const uptime = formatUptime(process.uptime());

    const text = `
╭━━━〔 🤖 MISTER XR 〕━━━╮
┃
┃ ⏱️ Uptime
┃
┃ 🟢 Status: ONLINE
┃ ⏳ Time: ${uptime}
┃ 📦 Version: ${config.VERSION}
┃
╰━━━━━━━━━━━━━━━━━━━━╯
`;

    await sock.sendMessage(jid, {
      text
    });
  }
};