import * as Chance from 'chance';
import { shallow } from 'enzyme';
import * as React from 'react';

import Button from '../../../../src/components/button/Button';
import {
  ButtonColors,
  ButtonSizes,
} from '../../../../src/enums';
import {
  FOUNDATION_PALETTE,
} from '../../../../src/styles/global';
import {
  getCssValueByProperty,
  resetHeadStyle,
} from '../../../utilities';

const chance = new Chance();

describe('<Button>', () => {

  beforeEach(() => {
    resetHeadStyle();
  });

  function mountPureComponent(props, elementText?: string) {
    const expectedText = elementText ? elementText : chance.string();
    const onClickHandler = jest.fn();
    const wrapper = shallow(
      <Button {...props} onClick={onClickHandler}>{expectedText}</Button>);

    return { wrapper, onClickHandler, expectedText };
  }

  test('should render the button', () => {
    const { wrapper } = mountPureComponent({}, 'Expected text');

    expect(wrapper.find('button')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  test('should set className to the button element', () => {
    const expectedClassName = chance.string();
    const { wrapper } = mountPureComponent({ className: expectedClassName });

    expect(wrapper.find('button').prop('className')).toMatch(expectedClassName);
  });

  test('should set the size of the button', () => {
    const { wrapper } = mountPureComponent({ buttonSize: 'small' });
    const currentValue = getCssValueByProperty('font-size');

    expect(currentValue).toMatch(ButtonSizes.SMALL);
    expect(wrapper.find('button').prop('buttonSize')).toBeUndefined();
  });

  test('should set the color of the button based on type', () => {
    const { wrapper } = mountPureComponent({ buttonType: ButtonColors.SUCCESS });
    const currentValue = getCssValueByProperty('background-color');

    expect(currentValue).toMatch(FOUNDATION_PALETTE.SUCCESS);
    expect(wrapper.find('button').prop('buttonType')).toBeUndefined();
  });

  test('should set the button to hollow', () => {
    const { wrapper } = mountPureComponent({ isHollow: true });
    const currentValue = getCssValueByProperty('background-color');

    expect(currentValue).toMatch('transparent');
    expect(wrapper.find('button').prop('isHollow')).toBeUndefined();
  });

  test('sets expanded', () => {
    const { wrapper } = mountPureComponent({ isExpanded: true });
    const currentValue = getCssValueByProperty('width');

    expect(currentValue).toMatch('100%');
    expect(wrapper.find('button').prop('isExpanded')).toBeUndefined();
  });

  test('sets disabled', () => {
    const { wrapper } = mountPureComponent({ isDisabled: true });
    const currentValue = getCssValueByProperty('cursor');

    expect(currentValue).toMatch('not-allowed');
    expect(wrapper.find('button').prop('isDisabled')).toBeUndefined();
    expect(wrapper.find('button').prop('disabled')).toBe(true);
  });

  test('sets dropdown', () => {
    const { wrapper } = mountPureComponent({ isDropdown: true });
    const currentValue = getCssValueByProperty('top');

    expect(currentValue).toMatch('0.4em');
    expect(wrapper.find('button').prop('isDropdown')).toBeUndefined();
  });

  // test('sets arrow only', () => {
  //     const component = render(<Button isArrowOnly/>);
  //     expect(component).to.have.className('arrow-only');
  //     expect(component).to.not.have.attr('isArrowOnly');
  // });

  test('sets contents', () => {
    const { wrapper, expectedText } = mountPureComponent({});

    expect(wrapper.find('button').text()).toBe(expectedText);
  });
});
