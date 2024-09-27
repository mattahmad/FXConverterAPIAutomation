import { test, expect } from '@playwright/test';

  // Negative Scenarios

  test(`Test: Invalid Weeks Parameter`, async ({ request }) => {
    const response = await request.get(`/valet/observations/FXCADAUD/json?recent_weeks=-1`)

      // Validate response status, header and body
      expect.soft(response.status()).toBe(400)
      expect.soft(response).not.toBeOK()
      expect.soft(response.headers()["content-type"]).toContain("application/json; charset=utf-8");
      expect.soft(response.ok()).toBeFalsy();
    });