import { expect, test } from '@playwright/test';

test('list of birthdays on route /birthdays', async ({ page }) => {
	// Doties uz maršrutu
	await page.goto('/birthdays');

	//
	await expect(page.getByText('Hercules')).toBeVisible();
	await expect(page.getByText('Athena')).toBeVisible();
});
