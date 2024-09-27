import { test, expect } from '@playwright/test';

  // Negative Scenarios

  test(`Test: Invalid FX Parameter (XYZ)`, async ({ request }) => {
    const response = await request.get(`/valet/observations/FXCADXYZ/json?recent_weeks=10}`)

      // Validate response status, header and body
      expect.soft(response.status()).toBe(400)
      expect.soft(response).not.toBeOK()
      expect.soft(response.headers()["content-type"]).toContain("application/json; charset=utf-8");
      expect.soft(response.ok()).toBeFalsy();
    });