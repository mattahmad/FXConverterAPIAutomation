import { test, expect } from '@playwright/test';
import fs from 'fs';
import { parse } from 'csv-parse/sync';
import { print } from "../utils/commonUtils.ts";

  const records = parse(fs.readFileSync("./APIData.csv", "utf8"), {
    columns: true,
    skip_empty_lines: true,
  });

  // Positive Scenarios

  for (const record of records) {
    test(`Test: ${record.TestCase}`, async ({ request }) => {
      const response = await request.get(`/valet/observations/${record.FXConversion}/json?recent_weeks=${record.NoOfRecentWeeks}`)
      const fxConversion = `${record.FXConversion}`
      const label = `${record.Label}`
      const getResult = await response.json()
      // print(JSON.stringify(getResult));

      // Validate response status, header and body
        expect.soft(response.status()).toBe(200)
        expect.soft(response).toBeOK()
        expect.soft(response.headers()["content-type"]).toContain("application/json; charset=utf-8");
        expect.soft(response.ok()).toBeTruthy();
        const body = await response.json();
        expect.soft(body).toHaveProperty("seriesDetail." + fxConversion + ".label", label);
      });
    }
