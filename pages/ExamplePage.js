class ExamplePage {
    constructor(page) {
      this.page = page;
      this.exampleHeading = 'h1'; // Locator for the example heading
    }
  
    async goto() {
      await this.page.goto('https://example.com');
    }
  
    async getExampleHeadingText() {
      return this.page.textContent(this.exampleHeading);
    }
  }
  
  module.exports = { ExamplePage };