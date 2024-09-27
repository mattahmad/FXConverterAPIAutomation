import { test, expect } from '@playwright/test';

  // Negative Scenarios

  test(`Test: Missing FX and Weeks Parameters`, async ({ request }) => {
    const response = await request.get(`/valet/observations/" "/json?recent_weeks=`)

      // Validate response status, header and body
      expect.soft(response.status()).toBe(404)
      expect.soft(response).not.toBeOK()
      expect.soft(response.headers()["content-type"]).toContain("application/json; charset=utf-8");
      expect.soft(response.ok()).toBeFalsy();
    });
