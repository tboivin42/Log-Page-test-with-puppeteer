const success = async browser => {
  const page = await browser.newPage();

  await page.goto('http://localhost:3000/');

  console.log('SUCCESS TEST:');

  await page.type('#email', 'fakeUser@fake.com');
  await page.type('#password', 'fake');
  await page.keyboard.press('Enter');

  console.log('Old Page URL:', page.url());

  await page.waitForNavigation();

  const successElement = await page.$('#success');
  const textContent = await page.evaluate(
    elem => elem.textContent,
    successElement,
  );

  console.log('New Page URL:', page.url());
  console.log('Message new URL:', textContent);
};

module.exports = success;
