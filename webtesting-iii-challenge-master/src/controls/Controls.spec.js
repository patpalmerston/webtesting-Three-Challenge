import React from 'react';
import renderer from 'react-test-renderer';

import Controls from './Controls';

describe('Controls SnapShot', () => {
	it('should match Controls SnapShot', () => {
		const tree = renderer.create(<Controls />);

		expect(tree.toJSON()).toMatchSnapshot();
	});
});
