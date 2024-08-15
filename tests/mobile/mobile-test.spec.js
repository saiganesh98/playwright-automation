const { test, expect, devices } = require('@playwright/test');

test('should perform mobile actions', async ({ page }) => {
  // Define a device to emulate
  const iPhone = devices['iPhone 12'];

  // Create a browser context with mobile emulation
  const context = await browser.newContext({
    ...iPhone,  // Use the device descriptor
  });

  // Create a new page in the context
  const mobilePage = await context.newPage();

  // Navigate to a website
  await mobilePage.goto('https://example.com');

  // Perform mobile-specific actions
  // For example, click a button
  await mobilePage.click('text="Example Domain"');

  // Verify results
  await expect(mobilePage).toHaveTitle(/Example Domain/);

  // Close the context and page
  await context.close();
});
