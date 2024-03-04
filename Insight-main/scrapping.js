const puppeteer = require('puppeteer')

async function scrapeProduct(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('/html/body/div[1]/div[1]/div[1]/section/section/div[2]/div[1]/div[1]/div[2]');
    const src = await el.getProperty('src');
    const srcTxt = await src.jsonValue();

    const [el2] = await page.$x('/html/body/div[1]/div[1]/div[1]/section/section/div[2]/div[1]/span/b');
    const txt = await el2.getProperty('textContent');
    const rawTxt = await src.jsonValue();

    console.log({srcTxt,rawTxt});

    browser.close();
}

scrapeProduct("https://www.reclameaqui.com.br/empresa/honda/");