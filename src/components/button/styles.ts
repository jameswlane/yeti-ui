import * as Color from 'color';
import {
  after,
  css,
  merge,
} from 'glamor';

import {
  ButtonSizes,
} from '../../enums';
import {
  BLACK,
  PRIMARY,
  WHITE,
} from '../../styles/colors';
import {
  FOUNDATION_PALETTE,
  MARGIN,
  RADIUS,
} from '../../styles/global';
import {
  cssTriangle,
  directions,
  getSides,
  sideDirections,
} from '../../utilities';

const buttonFontFamily = 'inherit';
const buttonPadding = '0.85em 1em';
const buttonMargin = `0 0 ${MARGIN} 0`;
const buttonFill = 'solid';
const buttonBackground = PRIMARY;
const buttonColor = WHITE;
const buttonColorAlt = BLACK;
const buttonRadius = RADIUS;
const buttonHollowBorderWidth = '1px';

const buttonPalette = FOUNDATION_PALETTE;
const buttonOpacityDisabled = 0.25;
const buttonBackgroundHoverLightness = 0.20;
const buttonHollowHoverLightness = 0.5;
// @if $global-text-direction == 'rtl' {
//     $button-margin: 0 0 $global-margin $global-margin !default;
// }
const buttonTransition = 'background-color 0.25s ease-out, color 0.25s ease-out';
const buttonResponsiveExpanded = false;

export function buttonBase(props: any) {
  const { buttonSize } = props;

  return {
    WebkitAppearance: 'none',
    border: '1px solid transparent',
    borderRadius: buttonRadius,
    cursor: 'pointer',
    display: 'inline-block',
    fontFamily: buttonFontFamily,
    fontSize: buttonSize ? ButtonSizes[buttonSize.toUpperCase()] : ButtonSizes.DEFAULT,
    lineHeight: '1',
    margin: buttonMargin,
    // @if (type-of($button-padding) == 'map') {
    //     @each $size, $padding in $button-padding {
    //         @include breakpoint($size) {
    //                 padding: $padding;
    //             }
    //         }
    //     }
    // @else {
    padding: buttonPadding,
    //     }
    textAlign: 'center',
    transition: buttonTransition,
    verticalAlign: 'middle',
  };
}

export function buttonStyle(props: any) {
  const {
    color,
    backgroundColor,
    backgroundHover,
    buttonType,
  } = props;

  const defaultBackgroundColor = backgroundColor ? backgroundColor : PRIMARY;
  const typeColor = buttonType ? buttonPalette[buttonType.toUpperCase()] : defaultBackgroundColor;
  const defaultColor = Color(typeColor).isLight() ? BLACK : WHITE;
  const defaultHoverBackgroundColor = Color(typeColor).darken(buttonBackgroundHoverLightness).hex();
  const defaultHoverColor = Color(defaultHoverBackgroundColor).isLight() ? BLACK : WHITE;

  return {
    ':focus': {
      backgroundColor: backgroundHover ? backgroundHover : defaultHoverBackgroundColor,
      color: defaultHoverColor,
    },
    ':hover': {
      backgroundColor: backgroundHover ? backgroundHover : defaultHoverBackgroundColor,
      color: defaultHoverColor,
    },
    backgroundColor: typeColor,
    color: color ? color : defaultColor,
    textDecoration: 'none',
  };
}

export function buttonHollow(props: any) {
  const {
    isHollow,
    backgroundColor,
    backgroundHover,
    buttonType,
  } = props;
  const defaultBackgroundColor = backgroundColor ? backgroundColor : PRIMARY;
  const typeColor = buttonType ? buttonPalette[buttonType.toUpperCase()] : defaultBackgroundColor;
  const defaultHoverBackgroundColor = Color(typeColor).darken(buttonHollowHoverLightness).hex();
  const hoverColor = backgroundHover ? backgroundHover : defaultHoverBackgroundColor;

  if (isHollow) {
    return {
      ':focus': {
        ':disabled': {
          border: `${buttonHollowBorderWidth} solid ${hoverColor}`,
          color: hoverColor,
        },
        backgroundColor: 'transparent',
        borderColor: hoverColor,
        color: hoverColor,
      },
      ':hover': {
        ':disabled': {
          border: `${buttonHollowBorderWidth} solid ${hoverColor}`,
          color: hoverColor,
        },
        backgroundColor: 'transparent',
        borderColor: hoverColor,
        color: hoverColor,
      },
      backgroundColor: 'transparent',
      border: `${buttonHollowBorderWidth} solid ${typeColor}`,
      color: `${typeColor}`,
    };
  }

  return {};
}

export function buttonExpand(props: any) {
  const { isExpanded } = props;
  if (isExpanded) {
    return {
      display: 'block',
      marginLeft: '0',
      marginRight: '0',
      width: '100%',
    };
  }
  return {
    display: 'inline-block',
    margin: buttonMargin,
    width: 'auto',
  };
}

export function buttonDisable(props: any) {
  const {
    isDisabled,
    backgroundColor,
  } = props;
  if (isDisabled) {
    const defaultColor = Color(backgroundColor).isLight() ? BLACK : WHITE;

    return {
      ':focus': {
        backgroundColor,
        color: defaultColor,

      },
      ':hover': {
        backgroundColor,
        color: defaultColor,

      },
      cursor: 'not-allowed',
      opacity: buttonOpacityDisabled,
    };
  }

  return {};
}

export function buttonDropdown(props: any) {
  const {
    isDropdown,
    backgroundColor,
    buttonType,
  } = props;
  if (isDropdown) {
    const defaultBackgroundColor = backgroundColor ? backgroundColor : PRIMARY;
    const typeColor = buttonType ? buttonPalette[buttonType.toUpperCase()] : defaultBackgroundColor;
    const defaultColor = Color(typeColor).isLight() ? BLACK : WHITE;
    const offset = getSides(buttonPadding, sideDirections.RIGHT);
    const cssTriangleObject = cssTriangle('0.4em', defaultColor, directions.DOWN);
    const triangleStyle = {
      display: 'inline-block',
      float: 'right',
      marginLeft: offset,
      position: 'relative',
      top: '0.4em',
    };

    return after(merge(
      triangleStyle,
      cssTriangleObject,
    ));
  }
  return {};
}

export function generateStyle(props: any) {
  return css(
    buttonBase(props),
    buttonStyle(props),
    buttonHollow(props),
    buttonExpand(props),
    buttonDisable(props),
    buttonDropdown(props),
  );
}
