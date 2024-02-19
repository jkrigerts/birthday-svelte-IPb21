import { describe, it, expect } from 'vitest';
import { load, actions } from './+page.server.js';
import { createFormDataRequest } from '../../factories/formDataRequest.js';

describe('/birthdays load function', () => {
	let listOfBirthdays = [
		{ name: 'Hercules', dob: '1994-03-15' },
		{ name: 'Athena', dob: '2001-08-27' }
	];
	it('returns list of birthdays', async () => {
		const result = await load();
		expect(result.birthdays).toEqual(listOfBirthdays);
	});
});

describe('/birthdays form action', () => {
	it('saves data to DB', async () => {
		const request = createFormDataRequest({ name: 'Bruno', dob: '2005-11-29' });
		await actions.default({ request });
		const result = await load();
		expect(result.birthdays).toContainEqual(
			expect.objectContaining({ name: 'Bruno', dob: '2005-11-29' })
		);
	});
});
