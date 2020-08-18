exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://automationpractice.com',
      windowSize: '1366x768',
	  // Set show: false for headless mode
      show: true,
      waitForTimeout: 5000,
      waitForNavigation: 'networkidle0'
    },
    Mochawesome: {
      "uniqueScreenshotName": true
    }
  },
  include: {
    I: './steps_file.js',
    BlockTopMenuFragment: './fragments/BlockTopMenu.js',
    ItemDisplayFragment: './fragments/ItemDisplay.js',
    LayerProductCartFragment: './fragments/LayerProductCart.js',
  },
  bootstrap: null,
  mocha: {
    "reporterOptions": {
      "codeceptjs-cli-reporter": {
        "stdout":"-", 
        "options": {
          "verbose":false,
          "steps":false
        }
      },
      mochawesome: {
        "stdout": "./output/console.log",
        "options": {
          "reportFilename":"Test_Execution_Report",
          "reportDir":"./output",
          "reportTitle":"Application > http://automationpractice.com",
          "reportPageTitle": "Basic Tests",
          "inlineAssets" : true,
          "charts": true,
          "code" : false,
          "overwrite": true,
          "timestamp":"isoDateTime"
        }
      }
    }
  },
  name: 'codeceptjs_proj',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}