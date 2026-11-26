const { test, expect } = require('@playwright/test');

test.describe('Home page - search and compare', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('TC01 - home page loads with title and search box', async ({ page }) => {
    await expect(page).toHaveTitle(/CollegeScope/i);
    await expect(page.locator('#homeSearch')).toBeVisible();
  });

  test('TC02 - search form submits college search', async ({ page }) => {
    await page.fill('#homeSearch', 'chandigarh');
    await page.locator('#homeSearch').press('Enter');

    await expect(page).toHaveURL(/\/colleges\?query=chandigarh/);
  });

  test('TC03 - home page displays college cards', async ({ page }) => {
    await expect(page.locator('.card').first()).toBeVisible();
    await expect(page.locator('.card').count()).resolves.toBeGreaterThan(0);
  });

  test('TC04 - college cards have compare buttons', async ({ page }) => {
    await expect(
      page.locator('.card [data-compare-add]').first()
    ).toBeVisible();
  });

});