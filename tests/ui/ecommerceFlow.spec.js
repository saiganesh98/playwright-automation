const { test, expect } = require('@playwright/test');
const HomePage = require('../../pages/HomePage');
const ProductListPage = require('../../pages/ProductListPage');
// const ProductPage = require('../pages/ProductPage');
// const CartPage = require('../pages/CartPage');

test('Search for a product, select it, and perform checkout', async ({ page }) => {
  // Initialize page objects
  const homePage = new HomePage(page);
  const productListPage = new ProductListPage(page);

  // Open e-commerce website
  await page.goto('https://amazon.in'); // Replace with the actual URL

  // Search for a product
  await homePage.searchForProduct('poco x6'); // Replace with the desired product

  // Select a product from the search results
  const newPage = await productListPage.selectProduct();

});
