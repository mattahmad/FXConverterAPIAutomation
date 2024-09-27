import { test, expect } from '@playwright/test';

  // Negative Scenarios

  test(`Test: Invalid URL (Missing /valet in URL)`, async ({ request }) => {
    const response = await request.get(`/observations/FXCADAUD/json?recent_weeks=10`)

      // Validate response status, header and body
      expect.soft(response.status()).toBe(404)
      expect.soft(response).not.toBeOK()
      expect.soft(response.headers()["content-type"]).not.toContain("application/json; charset=utf-8");
      expect.soft(response.ok()).toBeFalsy();
    });