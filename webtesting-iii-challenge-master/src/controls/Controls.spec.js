import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';

import Controls from './Controls';
import Dashboard from '../dashboard/Dashboard';

describe('Controls SnapShot', () => {
	it('should match Controls SnapShot', () => {
		const tree = renderer.create(<Controls />);

		expect(tree.toJSON()).toMatchSnapshot();
	});
});

describe('checking for buttons', () => {
	it('display two toggle buttons', () => {
		const { getByText } = render(<Controls />);

		getByText('Close Gate');
		getByText('Lock Gate');
	});
});

describe('button text change on toggle', () => {
	it('Display Open Gate on Closed gate click', () => {
		const { getByText } = render(<Dashboard />);
		const closeGateText = getByText('Close Gate');
		const expected = 'Open Gate';
		fireEvent.click(closeGateText);
		expect(closeGateText.textContent).toBe(expected);
	});

	it('Display Unlock Gate on Lock Gate Click', () => {
		const { getByText } = render(<Dashboard />);
		const closeGateText = getByText('Close Gate');
		const lockGateText = getByText('Lock Gate');
		const expected = 'Unlock Gate';
		fireEvent.click(closeGateText);
		fireEvent.click(lockGateText);

		expect(lockGateText.textContent).toBe(expected);
	});
});
