const puppeteer = require('puppeteer');

(async() => {
const browser = await puppeteer.launch({ 
    userDataDir: '/home/disnocen/.config/chromium/Default',

    // headless: false,
    // slowMo: 250, // slow down by 250ms 
});
const page = await browser.newPage();
const webpages = process.argv.slice(2);
// console.log('myArgs: ', myArgs);


await page.goto(webpages[0], {waitUntil: 'networkidle2'});
await page.pdf({path: '/tmp/page.pdf', format: 'A4'});
// page.on('console', (msg) => console.log('PAGE LOG:', msg.text()));

// await page.evaluate(() => console.log(`url is ${location.href}`));
// await page.evaluate(() => console.log(`data is: ${document.querySelector("#searchblock310_ebookmlol > div > div > div > div > div.product-desc.container.bottom-buffer-10 > p.product-title.text-center > a")}`));
// await page.evaluate(() => console.log(`data is: ${document.querySelector("#searchblock310_ebookmlol > div > div.item.active > div")}`));
await browser.close();
})();
