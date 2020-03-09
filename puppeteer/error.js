const error = async browser => {
  console.log('\nERROR TEST: ');
  const page = await browser.newPage();

  await page.goto('http://localhost:3000/');

  await page.type('#email', 'testError');
  await page.type('#password', 'testError');
  await page.keyboard.press('Enter');
  console.log('Page Url:', page.url());

  await new Promise(res =>
    page.on('dialog', async dialog => {
      console.log('Message:', dialog.message());
      await dialog.dismiss();
      res();
    }),
  );
};

module.exports = error;
