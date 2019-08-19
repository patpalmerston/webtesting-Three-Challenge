import React from 'react';
import renderer from 'react-test-renderer';

import Display from './Display';

describe('Display SnapShot', () => {
	it('should match Display SnapShot', () => {
		const tree = renderer.create(<Display />);

		expect(tree.toJSON()).toMatchSnapshot();
	});
});