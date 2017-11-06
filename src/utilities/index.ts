import {
  merge,
} from 'glamor';
import {
  Breakpoints,
  ExtendedBreakpoints,
  FloatTypes,
  HorizontalAlignments,
  SpaceControls,
  VerticalAlignments,
} from '../enums';

export const listOfButtonProps = [
  'isDropdown',
  'buttonSize',
  'isExpanded',
  'isHollow',
  'isDisabled',
  'isAriaDisabled',
  'isClear',
  'backgroundColor',
  'buttonType',
];

export interface IGeneralPropTypes {
  showFor?: Breakpoints.MEDIUM | Breakpoints.LARGE;
  showOnlyFor?: Breakpoints;
  hideFor?: Breakpoints;
  hideOnlyFor?: Breakpoints;
  isHidden?: boolean;
  isInvisible?: boolean;
  showForLandscape?: boolean;
  showForPortrait?: boolean;
  showForSr?: boolean;
  showOnFocus?: boolean;
  isClearfix?: boolean;
  float?: FloatTypes;
}

export interface IButtonProp extends IGeneralPropTypes {
  buttonType?: string;
  fontFamily?: string;
  padding?: string;
  margin?: string;
  buttonSize?: string;
  fill?: string;
  children?: any;
  color?: string;
  colorAlt?: string;
  radius?: string;
  hollowBorderWidth?: string;
  sizes?: string;
  palette?: string;
  opacityDisabled?: string;
  backgroundHoverLightness?: string;
  hollowHoverLightness?: string;
  transition?: string;
  offset?: string;
  backgroundColor?: string;
  backgroundHover?: string;
  size?: string;
  onClick?: any;
  isHollow?: boolean;
  isClear?: boolean;
  isExpanded?: boolean;
  isDisabled?: boolean;
  isAriaDisabled?: boolean;
  isDropdown?: boolean;
}

export interface ILinkProp extends IButtonProp {
  href: string;
}

export interface IFlexboxPropTypes {
  alignX: HorizontalAlignments;
  alignY: VerticalAlignments;
  selfAlignX: HorizontalAlignments;
  selfAlignY: VerticalAlignments;
  centerAlign: boolean;
  flexContainer: boolean;
  flexDirRow: ExtendedBreakpoints;
  flexDirRowRev: ExtendedBreakpoints;
  flexDirCol: ExtendedBreakpoints;
  flexDirColRev: ExtendedBreakpoints;
  flexChild: SpaceControls;
  flexOrder: number;
  flexOrderSmall: number;
  flexOrderMedium: number;
  flexOrderLarge: number;
}

export enum directions {
  DOWN = 'DOWN',
  UP = 'UP',
  RIGHT = 'RIGHT',
  LEFT = 'LEFT',
}

export function cssTriangle(size: string, color: string, direction: directions) {
  const triangleBase = {
    border: `inset ${size}`,
    content: '\'\'',
    display: 'block',
    height: 0,
    width: 0,
  };
  let triangleDirection;

  if (direction === directions.DOWN) {
    triangleDirection = {
      borderBottomWidth: 0,
      borderColor: `${color} transparent transparent`,
      borderTopStyle: 'solid',
    };
  }
  if (direction === directions.UP) {
    triangleDirection = {
      borderBottomStyle: 'solid',
      borderColor: `transparent transparent ${color}`,
      borderTopWidth: 0,
    };
  }
  if (direction === directions.RIGHT) {
    triangleDirection = {
      borderColor: `transparent transparent transparent ${color}`,
      borderLeftStyle: 'solid',
      borderRightWidth: 0,
    };
  }
  if (direction === directions.LEFT) {
    triangleDirection = {
      borderColor: `transparent ${color} transparent transparent`,
      borderLeftWidth: 0,
      borderRightStyle: 'solid',
    };
  }

  return merge(
    triangleBase,
    triangleDirection,
  );
}

interface IDirectionalSidesObject {
  TOP: string;
  BOTTOM: string;
  LEFT: string;
  RIGHT: string;

  [key: string]: string;
}

export enum sideDirections {
  TOP = 'TOP',
  BOTTOM = 'BOTTOM',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

export function getSides(val: string, side: sideDirections) {
  const numberOfSides = val.split(' ');

  if (numberOfSides.length === 1) {
    return val;
  }

  if (numberOfSides.length === 2) {
    const twoSidedObject: IDirectionalSidesObject = {
      BOTTOM: numberOfSides[0],
      LEFT: numberOfSides[1],
      RIGHT: numberOfSides[1],
      TOP: numberOfSides[0],
    };

    return twoSidedObject[side];
  }

  if (numberOfSides.length === 3) {
    const twoSidedObject: IDirectionalSidesObject = {
      BOTTOM: numberOfSides[1],
      LEFT: numberOfSides[1],
      RIGHT: numberOfSides[2],
      TOP: numberOfSides[0],
    };

    return twoSidedObject[side];
  }

  if (numberOfSides.length === 4) {
    const twoSidedObject: IDirectionalSidesObject = {
      BOTTOM: numberOfSides[1],
      LEFT: numberOfSides[2],
      RIGHT: numberOfSides[3],
      TOP: numberOfSides[0],
    };

    return twoSidedObject[side];
  }
}

export function removeProps(object: any, remove: string[]) {
  const result: any = {};

  for (const property in object) {
    if (object.hasOwnProperty(property) && remove.indexOf(property) === -1) {
      result[property] = object[property];
    }
  }

  return result;
}
