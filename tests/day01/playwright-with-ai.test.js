import { test, expect } from '@playwright/test';

test('Search for cats on Google', async ({ page }) => {
  //go to Google search page
  await page.goto('https://www.google.com');

  

});