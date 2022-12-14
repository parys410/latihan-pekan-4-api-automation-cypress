const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl : 'http://restapi.adequateshop.com/api/',
    specPattern : "cypress/support/e2e",
    supportFile : false,
  },
});
