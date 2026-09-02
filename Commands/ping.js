module.exports = {
name: "ping",
aliases: ["p"],

description: "Verifye si MISTER XR aktif.",

async execute(sock, msg, args, config) {
const jid = msg.key.remoteJid;

const start = Date.now();

await sock.sendMessage(jid, {
  text: "🏓 MISTER XR ap verifye..."
});

const speed = Date.now() - start;

await sock.sendMessage(jid, {
  text:

"╭━━━〔 🤖 MISTER XR 〕━━━╮ ┃ ┃ 🏓 PONG! ┃ ⚡ Speed: ${speed}ms ┃ 📦 Version: ${config.VERSION} ┃ 🟢 Status: ONLINE ┃ ╰━━━━━━━━━━━━━━━━━━━━╯"
});
}
};