const { expect } = require('@playwright/test');

class ProductListPage {
  constructor(page) {
    this.page = page;
    this.productLink = page.locator('text="POCO X6 5G (Skyline Blue, 12 GB RAM 256 GB Storage)"');

    // Update selector based on actual website
  }

  async selectProduct() {

    const [newPage] = await Promise.all([
        this.page.waitForEvent('popup'), // Wait for the new page
        this.productLink.click() // Trigger the new page
      ]);
  
      // Return the new page/tab for further actions
      return newPage;
    }

  }


module.exports = ProductListPage;
