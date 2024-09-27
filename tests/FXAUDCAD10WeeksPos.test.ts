import { test, expect } from '@playwright/test';

  // Positive Scenarios

  test(`Test: FXAUDCAD 10 Weeks`, async ({ request }) => {
    const response = await request.get(`/valet/observations/FXAUDCAD/json?recent_weeks=10`)
    const getResult = await response.json()
    console.log(JSON.stringify(getResult))

    // Validate response status, header and body
      expect.soft(response.status()).toBe(200)
      expect.soft(response).toBeOK()
      expect.soft(response.headers()["content-type"]).toContain("application/json; charset=utf-8");
      expect.soft(response.ok()).toBeTruthy();
      const body = await response.json();
      expect.soft(body).toHaveProperty("seriesDetail.FXAUDCAD.label", "AUD/CAD");
    });
