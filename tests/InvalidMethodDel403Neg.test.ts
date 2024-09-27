import { test, expect } from '@playwright/test';

  // Negative Scenarios

  test(`Test: Invalid Method (Delete)`, async ({ request }) => {
    const response = await request.delete(`/valet/observations/FXCADAUD/json?recent_weeks=10}`)

      // Validate response status, header and body
      expect.soft(response.status()).toBe(403)
      expect.soft(response).not.toBeOK()
      expect.soft(response.headers()["content-type"]).not.toContain("application/json; charset=utf-8");
      expect.soft(response.ok()).toBeFalsy();
    });