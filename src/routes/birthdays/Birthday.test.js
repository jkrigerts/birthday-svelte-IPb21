import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';

import Birthday from './Birthday.svelte';

describe('Birthday', () => {
	it('has the name of a person', () => {
		render(Birthday, { name: 'Hercules' });
		expect(screen.queryByText('Hercules')).toBeVisible();
	});
});
