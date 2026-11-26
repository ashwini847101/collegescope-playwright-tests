const { test, expect } = require('@playwright/test');

test.describe('Compare page', () => {

  test('TC06 - compare page loads with college selection options', async ({ page }) => {
    await page.goto('/compare');

    await expect(
      page.getByRole('heading', { name: 'Compare Colleges' })
    ).toBeVisible();

    await expect(page.locator('#compareCourseName')).toBeVisible();

    await expect(
      page.locator('[data-compare-select]')
    ).toHaveCount(3);
  });

  test('TC07 - compare page shows empty message', async ({ page }) => {
    await page.goto('/compare');

    await expect(
      page.getByText('Pick at least 2 colleges to compare.')
    ).toBeVisible();
  });

  test('TC08 - course selection is available', async ({ page }) => {
    await page.goto('/compare');

    await expect(
      page.locator('#compareCourseName')
    ).toBeVisible();

    await expect(
      page.locator('#compareCourseName option').first()
    ).toHaveText('General comparison (overall college data)');
  });

});