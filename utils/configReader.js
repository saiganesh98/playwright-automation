const fs = require('fs');
const path = require('path');

// Read the config.json file
const configPath = path.resolve(__dirname, '../config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

// Export the configuration
module.exports = config;
