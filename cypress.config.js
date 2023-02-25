const mocha = require('mocha');
const mochawesome = require('mochawesome');
function mochaReporter(runner) {
  mocha.reporters.Base.call(this, runner);

  runner.on('end', () => {
    const outputDir = './mochawesome-report';
    const options = {
      reportFilename: 'report',
      reportDir: outputDir,
      reportTitle: 'Cypress Tests Report',
      showPassed: true,
      overwrite: false
    };
    mochawesome.create(options).run(runner);
  });
}
module.exports = mochaReporter;
const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
