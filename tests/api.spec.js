const { test, expect } = require('@playwright/test');

// Backend API tests (no browser UI). Updated with real CollegeScope search route.
const SEARCH_URL = '/api/colleges/search';

test.describe('Backend API routes', () => {
  test.setTimeout(60000); // free hosting (Render/Vercel) can have slow cold starts

  test('TC09 - search route returns 200 and an array of colleges', async ({ request }) => {
    const res = await request.get(`${SEARCH_URL}?query=chandigarh`);
    expect(res.ok()).toBeTruthy();
    const body = await res.json();
    expect(Array.isArray(body.data || body.colleges || body)).toBeTruthy();
  });

  test('TC10 - empty query does not crash the server', async ({ request }) => {
    const res = await request.get(`${SEARCH_URL}?query=`);
    expect(res.status()).toBeLessThan(500);
  });
});
