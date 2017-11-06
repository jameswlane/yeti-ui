import * as colors from '../../../src/styles/colors';

describe('src/styles/colors.ts', () => {

  test('colors should match snapshot', () => {
    expect(colors).toMatchSnapshot();
  });
});
