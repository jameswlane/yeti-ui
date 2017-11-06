import * as globalStyles from '../../../src/styles/global';

describe('src/styles/global.ts', () => {

  test('globalStyles should match snapshot', () => {
    expect(globalStyles).toMatchSnapshot();
  });
});
