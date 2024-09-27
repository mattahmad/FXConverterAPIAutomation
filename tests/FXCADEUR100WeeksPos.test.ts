import { test, expect } from '@playwright/test';

  // Positive Scenarios

  test(`Test: FXCADEUR 100 Weeks`, async ({ request }) => {
    const response = await request.get(`/valet/observations/FXCADEUR/json?recent_weeks=100`)
    const getResult = await response.json()
    console.log(JSON.stringify(getResult))

    // Validate response status, header and body
      expect.soft(response.status()).toBe(200)
      expect.soft(response).toBeOK()
      expect.soft(response.headers()["content-type"]).toContain("application/json; charset=utf-8");
      expect.soft(response.ok()).toBeTruthy();
      const body = await response.json();
      expect.soft(body).toHaveProperty("seriesDetail.FXCADEUR.label", "CAD/EUR");
    });
