import {
  BLACK,
  PRIMARY,
  WHITE,
} from '../../../../src/styles/colors';
import {
  buttonBase,
  buttonDisable,
  buttonDropdown,
  buttonExpand,
  buttonHollow,
  buttonStyle,
  generateStyle,
} from '../../../../src/components/button/styles';
import {
  getCssValueByProperty,
  resetHeadStyle,
} from '../../../utilities';

describe('src/components/button/styles.ts', () => {
  describe('buttonBase', () => {
    test('should return button base style', () => {
      const baseStyle = buttonBase({});

      expect(baseStyle.fontSize).toBe('0.9rem');
      expect(baseStyle).toMatchSnapshot();
    });

    test('should return button base style with tiny font size', () => {
      const baseStyle = buttonBase({ buttonSize: 'tiny' });

      expect(baseStyle.fontSize).toBe('0.6rem');
    });

    test('should return button base style with small font size', () => {
      const baseStyle = buttonBase({ buttonSize: 'small' });

      expect(baseStyle.fontSize).toBe('0.75rem');
    });

    test('should return button base style with large font size', () => {
      const baseStyle = buttonBase({ buttonSize: 'large' });

      expect(baseStyle.fontSize).toBe('1.25rem');
    });
  });

  describe('buttonDisable', () => {
    test('should return nothing if isDisabled is false', () => {
      const baseStyle = buttonDisable({
        backgroundColor: PRIMARY,
        isDisabled: false,
      });

      expect(baseStyle).toMatchObject({});
    });

    test('should disabled style if isDisabled is true', () => {
      const baseStyle = buttonDisable({
        backgroundColor: PRIMARY,
        isDisabled: true,
      });

      expect(baseStyle).toMatchSnapshot();
    });

    test('should set color to white on a dark background color', () => {
      const baseStyle = buttonDisable({
        backgroundColor: BLACK,
        isDisabled: true,
      });

      expect(baseStyle[':focus'].color).toBe(WHITE);
      expect(baseStyle[':hover'].color).toBe(WHITE);
      expect(baseStyle[':focus'].backgroundColor).toBe(BLACK);
      expect(baseStyle[':hover'].backgroundColor).toBe(BLACK);
    });

    test('should set color to black on a light background color', () => {
      const baseStyle = buttonDisable({
        backgroundColor: WHITE,
        isDisabled: true,
      });

      expect(baseStyle[':focus'].color).toBe(BLACK);
      expect(baseStyle[':hover'].color).toBe(BLACK);
      expect(baseStyle[':focus'].backgroundColor).toBe(WHITE);
      expect(baseStyle[':hover'].backgroundColor).toBe(WHITE);
    });
  });

  describe('buttonDropdown', () => {
    beforeEach(() => {
      resetHeadStyle();
    });

    test('should return nothing if isDropdown is false', () => {
      const baseStyle = buttonDropdown({
        backgroundColor: PRIMARY,
        buttonType: 'primary',
        isDropdown: false,
      });

      expect(baseStyle).toMatchObject({});
    });

    test('should return base dropdown style', () => {
      buttonDropdown({
        backgroundColor: PRIMARY,
        buttonType: 'primary',
        isDropdown: true,
      });

      const display = getCssValueByProperty('display');
      const float = getCssValueByProperty('float');
      const marginLeft = getCssValueByProperty('margin-left');
      const position = getCssValueByProperty('position');
      const top = getCssValueByProperty('top');

      expect(display).toBe('block');
      expect(float).toBe('right');
      expect(marginLeft).toBe('1em');
      expect(position).toBe('relative');
      expect(top).toBe('0.4em');
    });
  });

  describe('buttonExpand', () => {
    test('should return button expand base style if isExpanded is false', () => {
      const baseStyle = buttonExpand({
        isExpanded: false,
      });

      expect(baseStyle).toMatchSnapshot();
    });

    test('should return expand style if isExpanded is true', () => {
      const baseStyle = buttonExpand({
        isExpanded: true,
      });

      expect(baseStyle).toMatchSnapshot();
    });
  });

  describe('buttonHollow', () => {
    test('should return no style if isHollow is false', () => {
      const baseStyle = buttonHollow({
        isHollow: false,
        backgroundColor: PRIMARY,
        backgroundHover: undefined,
        buttonType: 'primary',
      });

      expect(baseStyle).toMatchObject({});
    });

    test('should return no style if isHollow is true', () => {
      const baseStyle = buttonHollow({
        isHollow: false,
        backgroundColor: PRIMARY,
        backgroundHover: undefined,
        buttonType: 'primary',
      });

      expect(baseStyle).toMatchSnapshot();
    });
  });

  describe('buttonStyle', () => {
    test('should return button base style', () => {
      const baseStyle = buttonStyle({
        color: undefined,
        backgroundColor: PRIMARY,
        backgroundHover: undefined,
        buttonType: 'primary',
      });

      expect(baseStyle).toMatchSnapshot();
    });
  });

  // describe('generateStyle', () => {
  //   test('should return button base style', () => {
  //     const baseStyle = buttonBase({});
  //
  //     expect(baseStyle.fontSize).toBe('0.9rem');
  //     expect(baseStyle).toMatchSnapshot();
  //   });
  //
  //   test('should render the button', () => {
  //     expect('this').toMatch('this');
  //   });
  // });
});
