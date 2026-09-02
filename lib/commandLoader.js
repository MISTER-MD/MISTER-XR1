const fs = require("fs");
const path = require("path");

function loadCommands() {
const commands = new Map();
const commandsPath = path.join(__dirname, "..", "commands");

if (!fs.existsSync(commandsPath)) {
console.log("⚠️ Folder commands/ pa jwenn.");
return commands;
}

const files = fs
.readdirSync(commandsPath)
.filter(file => file.endsWith(".js"));

for (const file of files) {
try {
const filePath = path.join(commandsPath, file);
const command = require(filePath);

  if (!command.name || typeof command.execute !== "function") {
    console.log(`⚠️ Command invalide: ${file}`);
    continue;
  }

  commands.set(command.name.toLowerCase(), command);

  if (Array.isArray(command.aliases)) {
    for (const alias of command.aliases) {
      commands.set(alias.toLowerCase(), command);
    }
  }

  console.log(`✅ Command loaded: ${command.name}`);

} catch (error) {
  console.log(`❌ Error loading ${file}:`, error.message);
}

}

console.log("📦 Total commands loaded: ${commands.size}");

return commands;
}

module.exports = {
loadCommands
};