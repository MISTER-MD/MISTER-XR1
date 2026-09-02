const {
default: makeWASocket,
useMultiFileAuthState,
DisconnectReason
} = require("@whiskeysockets/baileys");

const P = require("pino");
const config = require("./config");
const { loadCommands } = require("./lib/commandLoader");

const commands = loadCommands();

async function startMisterXR() {
const { state, saveCreds } =
await useMultiFileAuthState("./session");

const sock = makeWASocket({
auth: state,
logger: P({ level: "silent" }),
browser: ["MISTER XR", "Chrome", "1.0.0"]
});

sock.ev.on("creds.update", saveCreds);

sock.ev.on("connection.update", (update) => {
const { connection, lastDisconnect } = update;

if (connection === "connecting") {
  console.log("🔄 MISTER XR ap konekte...");
}

if (connection === "open") {
  console.log(`

╔══════════════════════════════╗
║        🤖 MISTER XR          ║
║                              ║
║        ✅ BOT ONLINE         ║
║        ⚡ VERSION ${config.VERSION}       ║
╚══════════════════════════════╝
`);
}

if (connection === "close") {
  const statusCode =
    lastDisconnect?.error?.output?.statusCode;

  if (statusCode !== DisconnectReason.loggedOut) {
    console.log("🔄 MISTER XR ap rekonekte...");
    startMisterXR();
  } else {
    console.log("❌ Session WhatsApp la dekonekte.");
  }
}

});

sock.ev.on("messages.upsert", async ({ messages }) => {
try {
const msg = messages[0];

  if (!msg?.message) return;
  if (msg.key.fromMe) return;

  const jid = msg.key.remoteJid;

  const text =
    msg.message.conversation ||
    msg.message.extendedTextMessage?.text ||
    msg.message.imageMessage?.caption ||
    msg.message.videoMessage?.caption ||
    "";

  if (!text.trim()) return;

  const prefix = config.PREFIX;

  if (!text.startsWith(prefix)) return;

  const body = text.slice(prefix.length).trim();

  if (!body) return;

  const args = body.split(/\s+/);
  const commandName = args.shift().toLowerCase();

  const command = commands.get(commandName);

  if (!command) return;

  console.log(
    `⚡ Command: ${commandName} | From: ${jid}`
  );

  await command.execute(
    sock,
    msg,
    args,
    config
  );

} catch (error) {
  console.error("❌ Command Error:", error);
}

});
}

startMisterXR().catch((error) => {
console.error("❌ MISTER XR Error:", error);
});