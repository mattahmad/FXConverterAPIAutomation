import { test, expect } from '@playwright/test';

  // Negative Scenarios

  test(`Test: Invalid Weeks Parameter`, async ({ request }) => {
    const response = await request.get(`/valet/observations/FXCADAUD/json?recent_weeks=SELECT * FROM observations WHERE label like 'AUD/CAD' AND description like 'Australian dollar to Canadian dollar daily exchange rate'`)

      // Validate response status, header and body
      expect.soft(response.status()).toBe(403)
      expect.soft(response).not.toBeOK()
      expect.soft(response.headers()["content-type"]).not.toContain("application/json; charset=utf-8");
      expect.soft(response.ok()).toBeFalsy();
    });