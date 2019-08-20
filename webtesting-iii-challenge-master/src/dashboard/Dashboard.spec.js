import React from 'react';
import renderer from 'react-test-renderer';

import Dashboard from './Dashboard';

describe('DashBoard SnapShot', () => {
	it('should match Dashboard SnapShot', () => {
		const tree = renderer.create(<Dashboard />);

		expect(tree.toJSON()).toMatchSnapshot();
	});
});
