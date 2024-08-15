const config = require('./utils/configReader');
const path = require('path');
const fs = require('fs');

const timestamp = getFormattedTimestamp();// Replace invalid characters
const reportFolder = path.join('playwright-reports', `html-report-${timestamp}`);

module.exports = {
    use: {
      headless: false,
      viewport: { width: config.viewportWidth, height: config.viewportHeight }, // MacBook M1 resolution
      screenshot: 'only-on-failure',
      video: 'retain-on-failure',
    },
    projects: [
      { name: config.browser, use: { browserName: config.browser } },
    ],
    reporter: [
        ['list'],
        ['html', { outputFolder: reportFolder }], // Separate folder for HTML report
        ['json', { outputFolder: 'playwright-reports/json' }] 
      ],
  };


  function getFormattedTimestamp() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    return `${day}-${month}-${year}-${hours}-${minutes}-${seconds}`;
  }
  