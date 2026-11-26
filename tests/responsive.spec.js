const { test, expect } = require('@playwright/test');

test.describe('Navigation and responsive layout', () => {
  test('TC11 - no horizontal scrolling on the home page', async ({ page }) => {
    await page.goto('/');
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth
    );
    expect(overflow).toBe(false);
  });

  test('TC12 - navigation link opens the compare page', async ({ page }) => {
    await page.goto('/');
    const navToggle = page.locator('[data-nav-toggle]');
    if (await navToggle.isVisible()) {
      await navToggle.click();
    }
    await page.getByRole('link', { name: /^compare$/i }).first().click();
    await expect(page).toHaveURL(/compare/);
  });
});
