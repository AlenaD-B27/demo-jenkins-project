import test from "@playwright/test";

test('Search Playwright on Google', async ({page}) => {

    await page.goto("https://www.google.com/?client=safari");
    
    await page.locator('');

    //<textarea class="gLFyf" aria-controls="Alh6id" aria-owns="Alh6id" autofocus="" title="Search" value="" jsaction="paste:puy29d;" aria-label="Search" aria-autocomplete="both" aria-expanded="false" aria-haspopup="false" autocapitalize="off" autocomplete="off" autocorrect="off" id="APjFqb" maxlength="2048" name="q" role="combobox" rows="1" spellcheck="false" data-ved="0ahUKEwjpvv69paqHAxXIKEQIHdpqAgwQ39UDCAY"></textarea>

    const searchBox = await page.locator("//textarea[@class='gLFyf']");
    // searchBox.type('Playwright Automation');
    await searchBox.fill('Playwright Automation');
    await searchBox.press('Enter');
    
});

test('Self practice', async ({page}) => {

    await page.goto("https://feruzurazaliev.com");
    // await page.waitForTimeout(3000);
    const homeButton = await page.locator("//a[.='Home']");
    await homeButton.click();
    
    
});