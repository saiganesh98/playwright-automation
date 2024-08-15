const { test, expect } = require('@playwright/test');
const { ExamplePage } = require('../../pages/examplePage.js');
const config = require('../../utils/configReader.js');

test('verify example heading text', async ({ browser }) => {
  // Create a new browser context and page
  const context = await browser.newContext();
  const page = await context.newPage();

  // Instantiate the page object
  const examplePage = new ExamplePage(page);

  // Navigate to the page
  await examplePage.goto();

  // Get the heading text and verify it
  const headingText = await examplePage.getExampleHeadingText();
  expect(headingText).toBe('Example Domain');

  await page.waitForTimeout(config.wait);
  // Close the browser context
  await context.close();

});
