import {
  WHITE,
} from '../../../src/styles/colors';
import {
  cssTriangle,
  directions,
  getSides,
  removeProps,
  sideDirections,
} from '../../../src/utilities';
import {
  getCssValueByProperty,
  resetHeadStyle,
} from '../../utilities';

describe('Utilities', () => {
  describe('cssTriangle', () => {
    beforeEach(() => {
      resetHeadStyle();
    });

    test('should cssTriangle down', () => {
      cssTriangle('0.4em', WHITE, directions.DOWN);

      const currentDisplayValue = getCssValueByProperty('display');
      const currentWidthValue = getCssValueByProperty('width');
      const currentHeightValue = getCssValueByProperty('height');
      const currentBorderValue = getCssValueByProperty('border');
      const currentContentValue = getCssValueByProperty('content');
      const currentBorderBottomWidthValue = getCssValueByProperty('border-bottom-width');
      const currentBorderTopStyleValue = getCssValueByProperty('border-top-style');
      const currentBorderColorValue = getCssValueByProperty('border-color');

      expect(currentDisplayValue).toBe('block');
      expect(currentWidthValue).toBe('0');
      expect(currentHeightValue).toBe('0');
      expect(currentBorderValue).toBe('inset 0.4em');
      expect(currentContentValue).toBe('\'\'');
      expect(currentBorderBottomWidthValue).toBe('0');
      expect(currentBorderTopStyleValue).toBe('solid');
      expect(currentBorderColorValue).toBe('#fefefe transparent transparent');
    });

    test('should cssTriangle up', () => {
      cssTriangle('0.4em', WHITE, directions.UP);

      const currentDisplayValue = getCssValueByProperty('display');
      const currentWidthValue = getCssValueByProperty('width');
      const currentHeightValue = getCssValueByProperty('height');
      const currentBorderValue = getCssValueByProperty('border');
      const currentContentValue = getCssValueByProperty('content');
      const currentBorderTopWidthValue = getCssValueByProperty('border-top-width');
      const currentBorderBottomStyleValue = getCssValueByProperty('border-bottom-style');
      const currentBorderColorValue = getCssValueByProperty('border-color');

      expect(currentDisplayValue).toBe('block');
      expect(currentWidthValue).toBe('0');
      expect(currentHeightValue).toBe('0');
      expect(currentBorderValue).toBe('inset 0.4em');
      expect(currentContentValue).toBe('\'\'');
      expect(currentBorderTopWidthValue).toBe('0');
      expect(currentBorderBottomStyleValue).toBe('solid');
      expect(currentBorderColorValue).toBe('transparent transparent #fefefe');
    });

    test('should cssTriangle right', () => {
      cssTriangle('0.4em', WHITE, directions.RIGHT);

      const currentDisplayValue = getCssValueByProperty('display');
      const currentWidthValue = getCssValueByProperty('width');
      const currentHeightValue = getCssValueByProperty('height');
      const currentBorderValue = getCssValueByProperty('border');
      const currentContentValue = getCssValueByProperty('content');
      const currentborderRightWidthValue = getCssValueByProperty('border-right-width');
      const currentborderLeftStyleValue = getCssValueByProperty('border-left-style');
      const currentBorderColorValue = getCssValueByProperty('border-color');

      expect(currentDisplayValue).toBe('block');
      expect(currentWidthValue).toBe('0');
      expect(currentHeightValue).toBe('0');
      expect(currentBorderValue).toBe('inset 0.4em');
      expect(currentContentValue).toBe('\'\'');
      expect(currentborderRightWidthValue).toBe('0');
      expect(currentborderLeftStyleValue).toBe('solid');
      expect(currentBorderColorValue).toBe('transparent transparent transparent #fefefe');
    });

    test('should cssTriangle left', () => {
      cssTriangle('0.4em', WHITE, directions.LEFT);

      const currentDisplayValue = getCssValueByProperty('display');
      const currentWidthValue = getCssValueByProperty('width');
      const currentHeightValue = getCssValueByProperty('height');
      const currentBorderValue = getCssValueByProperty('border');
      const currentContentValue = getCssValueByProperty('content');
      const currentBorderLeftWidthValue = getCssValueByProperty('border-left-width');
      const currentBorderRightStyleValue = getCssValueByProperty('border-right-style');
      const currentBorderColorValue = getCssValueByProperty('border-color');

      expect(currentDisplayValue).toBe('block');
      expect(currentWidthValue).toBe('0');
      expect(currentHeightValue).toBe('0');
      expect(currentBorderValue).toBe('inset 0.4em');
      expect(currentContentValue).toBe('\'\'');
      expect(currentBorderLeftWidthValue).toBe('0');
      expect(currentBorderRightStyleValue).toBe('solid');
      expect(currentBorderColorValue).toBe('transparent #fefefe transparent transparent');
    });
  });
  describe('getSides', () => {
    test('should getSides 1 top', () => {
      const expectedValue = getSides('1', sideDirections.TOP);

      expect(expectedValue).toBe('1');
    });

    test('should getSides 2 top', () => {
      const expectedValue = getSides('1 2', sideDirections.TOP);

      expect(expectedValue).toBe('1');
    });

    test('should getSides 3 top', () => {
      const expectedValue = getSides('1 2 3', sideDirections.TOP);

      expect(expectedValue).toBe('1');
    });

    test('should getSides 4 top', () => {
      const expectedValue = getSides('1 2 3 4', sideDirections.TOP);

      expect(expectedValue).toBe('1');
    });

    test('should getSides 1 bottom', () => {
      const expectedValue = getSides('1', sideDirections.BOTTOM);

      expect(expectedValue).toBe('1');
    });

    test('should getSides 2 bottom', () => {
      const expectedValue = getSides('1 2', sideDirections.BOTTOM);

      expect(expectedValue).toBe('1');
    });

    test('should getSides 3 bottom', () => {
      const expectedValue = getSides('1 2 3', sideDirections.BOTTOM);

      expect(expectedValue).toBe('2');
    });

    test('should getSides 4 bottom', () => {
      const expectedValue = getSides('1 2 3 4', sideDirections.BOTTOM);

      expect(expectedValue).toBe('2');
    });

    test('should getSides 1 right', () => {
      const expectedValue = getSides('1', sideDirections.RIGHT);

      expect(expectedValue).toBe('1');
    });

    test('should getSides 2 right', () => {
      const expectedValue = getSides('1 2', sideDirections.RIGHT);

      expect(expectedValue).toBe('2');
    });

    test('should getSides 3 right', () => {
      const expectedValue = getSides('1 2 3', sideDirections.RIGHT);

      expect(expectedValue).toBe('3');
    });

    test('should getSides 4 right', () => {
      const expectedValue = getSides('1 2 3 4', sideDirections.RIGHT);

      expect(expectedValue).toBe('4');
    });

    test('should getSides 1 left', () => {
      const expectedValue = getSides('1', sideDirections.LEFT);

      expect(expectedValue).toBe('1');
    });

    test('should getSides 2 left', () => {
      const expectedValue = getSides('1 2', sideDirections.LEFT);

      expect(expectedValue).toBe('2');
    });

    test('should getSides 3 left', () => {
      const expectedValue = getSides('1 2 3', sideDirections.LEFT);

      expect(expectedValue).toBe('2');
    });

    test('should getSides 4 left', () => {
      const expectedValue = getSides('1 2 3 4', sideDirections.LEFT);

      expect(expectedValue).toBe('3');
    });
  });

  test('should removeProps', () => {
    const passedProps = {
      foo: 'bar',
      test: 'string',
    };
    const removedProps = removeProps(passedProps, ['test']);
    const expectedProps = {
      foo: 'bar',
    };

    expect(removedProps).toMatchObject(expectedProps);
  });
});
