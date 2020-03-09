const puppeteer = require('puppeteer');
const success = require('./success');
const error = require('./error');

const main = async () => {
  const browser = await puppeteer.launch();

  await success(browser);
  await error(browser);

  await browser.close();
};

main();
