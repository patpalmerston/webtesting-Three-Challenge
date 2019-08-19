import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
// import { toHaveClass } from '@testing-library/jest-dom'

import Display from './Display';

describe('Display SnapShot', () => {
	it('should match Display SnapShot', () => {
		const tree = renderer.create(<Display />);

		expect(tree.toJSON()).toMatchSnapshot();
	});
});

describe('closed prop', () => {
	it('displays closed if closed prop is === true', () => {
		const { getByText } = render(<Display closed={true} />);
		getByText('Closed');
	});

	it('displays open if closed prop is === false', () => {
		const { getByText } = render(<Display closed={false} />);
		getByText('Open');
	});
});

describe('locked prop', () => {
	it('displays Locked if the locked prop is true', () => {
		const { getByText } = render(<Display locked={true} />);
		getByText('Locked');
	});

	it('displays UnLocked if the locked props is false', () => {
		const { getByText } = render(<Display locked={false} />);
		getByText('Unlocked');
	});
});

describe('red-led class tests on true', () => {
	it('red-led on locked true', () => {
		const { container } = render(<Display locked={true} />);
		expect(container.querySelector('led red-led'));
	});

	it('red-led on closed true', () => {
		const { container } = render(<Display closed={true} />);
		expect(container.querySelector('led red-led'));
	});
});


