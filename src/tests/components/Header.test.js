import { render } from 'node-sass';
import React from 'react';
import ReatShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';

test('Should Render Header Correctly', () => {
    const renderer = new ReatShallowRenderer();
    renderer.render(<Header/>);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
})