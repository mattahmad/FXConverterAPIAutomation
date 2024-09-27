import { test, expect } from '@playwright/test';

  // Negative Scenarios

  test(`Test: Invalid Method (Post)`, async ({ request }) => {
    const response = await request.post(`/valet/observations/FXCADAUD/json?recent_weeks=10}`)

      // Validate response status, header and body
      expect.soft(response.status()).toBe(200)
      expect.soft(response).toBeOK()
      expect.soft(response.headers()["content-type"]).not.toContain("application/json; charset=utf-8");
      expect.soft(response.ok()).toBeTruthy();
    });