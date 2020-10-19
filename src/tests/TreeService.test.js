import React from 'react';
import { render } from '@testing-library/react';
import {treeService} from '../services/treeService';

test('Mock api is not working', () => {
  return treeService.getData().then(data => {
    expect(data).not.toEqual(null);
  });
});
