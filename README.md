# FXConverterAPIAutomation

[Playwright]-based API Automation Framework using TypeScript for ensuring the accuracy and reliability of Forex conversion rate data.

## Setup Project

- `$ cd FXConverterAPIAutomation`
- Install Playwright interactively `$ npm init playwright@latest`
- Select TypeScript and enter ‘tests’ for Where to put your end-to-end tests?
- Enter false for Add a GitHub Actions workflow?
- Enter true for Install Playwright browsers.
- Enter y for Install Playwright operating system dependencies.
- Enter false for playwright.config.ts already exists. Override it?

## Run Tests

- `$ npx playwright test`

## Run Tests, Generate and Open Allure HTML Report

- `$ npx playwright test --reporter=line,allure-playwright`
- `$ npx allure generate ./allure-results --clean`
- `$ npx allure open ./allure-report`

## Run Tests for Multiple Currencies

- The APIData.csv file has CAD/AUD, USD/AUD and JPY/AUD data pre-populated which gets passed in through to the FXCADAUD10WeeksPos_MultipleCurrencies.test.ts test file in the tests directory. This csv file can be used to test for additional combinations with multiple currencies and number of recent weeks specified.

## Layout

- Each test is contained within its own file for better isolation, which either contains Pos or Neg in the name. There are 3 positive test files and 11 negative test files.

## Additional Steps

Some additional steps I would add in the framework with more time include:
- Test rate limiting by exceeding the allowed number of requests in a timeframe.
- Simulate slow responses from the server.
- Trigger and test a server-side error.
- Add Cross-Site Scripting to test for vulnerabilities.
- Performance test the API endpoint to look for concurrency issues.
- Set up the framework to be continuously triggered from Github Actions.
- Extend the csv file data-driven tests to also be used by the negative tests.
- Mock the API endpoint to help speed up tests.

[Playwright]:https://playwright.dev
