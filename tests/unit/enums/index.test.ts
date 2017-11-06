import * as enums from '../../../src/enums';

describe('src/enums/index.ts', () => {

  test('enums should match snapshot', () => {
    expect(enums).toMatchSnapshot();
  });
});
