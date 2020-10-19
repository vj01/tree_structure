import React from 'react';
import { render } from '@testing-library/react';
import Tree from '../components/Tree';

test('Tree component modified', () => {
  const { asFragment } = render(
    <Tree />
  );
  expect(asFragment()).toMatchSnapshot();
});
