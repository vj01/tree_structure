import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Label from '../components/Label';

afterEach(cleanup);

test('Label component modified', () => {
  const { asFragment } = render(
    <Label />
  );
  expect(asFragment()).toMatchSnapshot();
});

it("Insert text at label", () => {
  const { getByTestId } = render(<Label title="Node text!" />);

  expect(getByTestId("titleTag")).toHaveTextContent("Node text!");
});
