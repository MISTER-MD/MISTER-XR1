const config = require("../config");

/**

* Jwenn nimewo yon moun depi nan JID WhatsApp
  */
  function getNumber(jid = "") {
  return jid
  .split("@")[0]
  .split(":")[0]
  .replace(/\D/g, "");
  }

/**

* Verifye si yon moun se owner MISTER XR
  */
  function isOwner(jid) {
  const userNumber = getNumber(jid);
  const ownerNumber = String(config.OWNER_NUMBER || "")
  .replace(/\D/g, "");

return (
userNumber.length > 0 &&
ownerNumber.length > 0 &&
userNumber === ownerNumber
);
}

/**

* Fòmate tan bot la
  */
  function formatUptime(seconds) {
  seconds = Number(seconds);

const days = Math.floor(seconds / 86400);
const hours = Math.floor((seconds % 86400) / 3600);
const minutes = Math.floor((seconds % 3600) / 60);
const secs = Math.floor(seconds % 60);

return "${days}d ${hours}h ${minutes}m ${secs}s";
}

/**

* Jwenn non itilizatè a
  */
  function getName(msg) {
  return (
  msg?.pushName ||
  "User"
  );
  }

module.exports = {
getNumber,
isOwner,
formatUptime,
getName
};