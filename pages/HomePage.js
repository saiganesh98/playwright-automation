const { expect } = require('@playwright/test');

class HomePage {
  constructor(page) {
    this.page = page;
    this.searchBox = page.locator('input[name="field-keywords"]'); // Update selector based on actual website
    this.searchButton = page.locator('input[id="nav-search-submit-button"]'); // Update selector based on actual website
  }

  async searchForProduct(productName) {
    await this.searchBox.fill(productName);
    await this.searchButton.click();
  }
}

module.exports = HomePage;
