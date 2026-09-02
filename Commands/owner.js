module.exports = {
name: "owner",
aliases: ["creator", "dev"],

description: "Montre enfòmasyon owner MISTER XR.",

async execute(sock, msg, args, config) {
const jid = msg.key.remoteJid;

const ownerNumber =
  String(config.OWNER_NUMBER || "")
    .replace(/\D/g, "");

const ownerJid =
  ownerNumber
    ? `${ownerNumber}@s.whatsapp.net`
    : null;

const message = `

╭━━━〔 👑 MISTER XR 〕━━━╮
┃
┃ 🤖 Bot: ${config.BOT_NAME}
┃ 📦 Version: ${config.VERSION}
┃ 👤 Owner: ${config.OWNER_50956215104}
┃
┃ ⚡ Professional WhatsApp Bot
┃ 🛡️ Secure & Organized
┃
╰━━━━━━━━━━━━━━━━━━━━╯
`;

await sock.sendMessage(jid, {
  text: message
});

}
};