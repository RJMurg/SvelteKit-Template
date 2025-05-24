# Test info

- Name: home page has expected h1
- Location: /Users/I748363/personal/portfolio/sveltekit-template/tests/e2e/demo.test.ts:3:1

# Error details

```
Error: browserType.launch: Executable doesn't exist at /Users/I748363/Library/Caches/ms-playwright/chromium_headless_shell-1169/chrome-mac/headless_shell
╔═════════════════════════════════════════════════════════════════════════╗
║ Looks like Playwright Test or Playwright was just installed or updated. ║
║ Please run the following command to download new browsers:              ║
║                                                                         ║
║     npx playwright install                                              ║
║                                                                         ║
║ <3 Playwright Team                                                      ║
╚═════════════════════════════════════════════════════════════════════════╝
```

# Test source

```ts
  1 | import { expect, test } from '@playwright/test';
  2 |
> 3 | test('home page has expected h1', async ({ page }) => {
    | ^ Error: browserType.launch: Executable doesn't exist at /Users/I748363/Library/Caches/ms-playwright/chromium_headless_shell-1169/chrome-mac/headless_shell
  4 | 	await page.goto('/');
  5 | 	await expect(page.locator('h1')).toBeVisible();
  6 | });
  7 |
```
