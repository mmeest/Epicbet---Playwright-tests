<div>
  <p align="center">
    <img src="https://github.com/mmeest/Epicbet---Playwright-tests/blob/main/Playwright.png" height="400px">
  </p>
</div>


# Epicbet---Playwright-tests
Playwright automation tests for Epicbet website.

## Testing task

**Objective**
The purpose of this assignment is to evaluate your ability to identify, design, and
implement automated tests for a web application using Playwright.
You will work with our sportsbook web application available at https://epicbet.com/.
Your task is to determine and automate critical tests to ensure the functionality and
reliability of the application.

**Assignment Description**
Your goal is to identify at least three important test cases and automate them using
Playwright. Feel free to think creatively and take an open-minded approach when selecting
and designing test cases.

**Requirements**
1. Write automated tests in TypeScript or JavaScript using Playwright.
2. Choose three or more test cases that you believe are essential for ensuring the
quality of the application.
3. Tests should be performed in an unauthenticated state, please avoid creating
personal accounts solely for this test assignment.
4. Write the tests as if you were developing them in a real working environment,
with a focus on scalability and a well-structured, maintainable test project architecture.
5. Consider incorporating additional aspects typically found in real-world environments,
such as CI/CD, test reporting, etc.

## Solution 

Tests for Epicbet page are as follows:

1. User can navigate between pages (links in the main header menu)
2. User can navigate links on the page footer
3. User can change language
   
Currently, the following browsers are selected for testing:
Chromium
Firefox
WebKit
Mobile Chrome
Mobile Safari

During the development of this testing task, the main focus was on the Chromium browser, as that's usually the default choice for many use cases.

Test Files:

Tests are stored in EPICBET/tests/tests.spec.ts.
Page Object Model (POM) files are located in the EPICBET/pom folder.
Additionally, I’ve included an Allure test report to give you a clear view of the results. To generate and view the report, simply run the following commands:

```
npx allure generate ./allure-results --clean
npx allure open
```

---

## Tools used

VS Code
Node.js
Typescript
Playwright
Allure

## Initializing project

To setting up a project:

```
npm init -y
```

Adding Playwright

```
npm install playwright
```

Initializing Playwright configuration:

```
npx playwright install
```

Configuration in playwright.config.ts:

```
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000, // Maximum time limit 30 sek.
  retries: 2, // If test fails 2 extra tryouts
  use: {
    baseURL: 'https://epicbet.com',
    headless: true, // Tests without open browsers
    screenshot: 'only-on-failure', // Screenshot on failure
    video: 'retain-on-failure', // Video in case of failure
  },
});
```

Adding Allure test report:

```
npm install @playwright/test allure-playwright
```

To start tests on command line with browsers:

```
npx playwright test --headed
```

To set up always using browsers by default setting on 'playwright.config.ts':

```
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false, // Brauseriaken on nähtav
    browserName: 'chromium', // Soovi korral saad valida ka 'firefox' või 'webkit'
  },
});
```

To start tests on specific browser:

```
npx playwright test --headed --project=chromium
```

To generate and display Allure raport:

```
npx allure generate ./allure-results --clean
npx allure open
```

To clear test results folders automatically before each test. Settings in 'package.json':

```
"scripts": {
  "test": "rm -rf allure-results && playwright test"
}
```

Git:

```
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/mmeest/Epicbet---Playwright-tests
git branch -M main
git push -u origin main
```

If remote is ahead:

```
git pull origin main --rebase
```
