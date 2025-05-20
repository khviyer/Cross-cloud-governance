// Simple audit logger (replace with persistent store, e.g. Azure Monitor)
const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, 'audit.log');

function log(event, user) {
  const entry = { timestamp: new Date().toISOString(), event, user };
  fs.appendFileSync(logFile, JSON.stringify(entry) + '\n');
}

module.exports = { log };