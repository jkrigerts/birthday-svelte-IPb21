import { expect, test } from '@playwright/test';

test('list of birthdays on route /birthdays', async ({ page }) => {
	// Doties uz maršrutu
	await page.goto('/birthdays');

	//
	await expect(page.getByText('Hercules')).toBeVisible();
	await expect(page.getByText('Athena')).toBeVisible();
});

test('a new person can be added', async ({ page }) => {
	await page.goto('/birthdays');
	await page.getByLabel('Name').fill('Bruno');
	await page.getByLabel('Date of birth').fill('2005-11-29');
	await page.getByRole('button').click();
});
