import * as Chance from 'chance';
import { shallow } from 'enzyme';
import * as React from 'react';

import {
  getCssValueByProperty,
  resetHeadStyle,
} from '../../../utilities';

import {
  ButtonColors,
  ButtonSizes,
} from '../../../../src/enums';
import {
  FOUNDATION_PALETTE,
} from '../../../../src/styles/global';
import Link from '../../../../src/components/button/Link';

const chance = new Chance();

describe('<Link>', () => {

  beforeEach(() => {
    resetHeadStyle();
  });

  function mountPureComponent(props, elementText?: string) {
    const expectedText = elementText ? elementText : chance.string();
    const onClickHandler = jest.fn();
    const wrapper = shallow(
      <Link {...props} href="#">{expectedText}</Link>);

    return { wrapper, onClickHandler, expectedText };
  }

  test('should render the link', () => {
    const { wrapper } = mountPureComponent({}, 'Expected text');

    expect(wrapper.find('a')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  test('should set className to the link element', () => {
    const expectedClassName = chance.string();
    const { wrapper } = mountPureComponent({ className: expectedClassName });

    expect(wrapper.find('a').prop('className')).toMatch(expectedClassName);
  });

  test('should set the size of the link', () => {
    const { wrapper } = mountPureComponent({ buttonSize: 'small' });
    const currentValue = getCssValueByProperty('font-size');

    expect(currentValue).toMatch(ButtonSizes.SMALL);
    expect(wrapper.find('a').prop('buttonSize')).toBeUndefined();
  });

  test('should set the color of the link based on type', () => {
    const { wrapper } = mountPureComponent({ buttonType: ButtonColors.SUCCESS });
    const currentValue = getCssValueByProperty('background-color');

    expect(currentValue).toMatch(FOUNDATION_PALETTE.SUCCESS);
    expect(wrapper.find('a').prop('buttonType')).toBeUndefined();
  });

  test('should set the link to hollow', () => {
    const { wrapper } = mountPureComponent({ isHollow: true });
    const currentValue = getCssValueByProperty('background-color');

    expect(currentValue).toMatch('transparent');
    expect(wrapper.find('a').prop('isHollow')).toBeUndefined();
  });

  test('sets expanded', () => {
    const { wrapper } = mountPureComponent({ isExpanded: true });
    const currentValue = getCssValueByProperty('width');

    expect(currentValue).toMatch('100%');
    expect(wrapper.find('a').prop('isExpanded')).toBeUndefined();
  });

  test('sets disabled', () => {
    const { wrapper } = mountPureComponent({ isDisabled: true });
    const currentValue = getCssValueByProperty('cursor');

    expect(currentValue).toMatch('not-allowed');
    expect(wrapper.find('a').prop('isDisabled')).toBeUndefined();
  });

  test('sets dropdown', () => {
    const { wrapper } = mountPureComponent({ isDropdown: true });
    const currentValue = getCssValueByProperty('top');

    expect(currentValue).toMatch('0.4em');
    expect(wrapper.find('a').prop('isDropdown')).toBeUndefined();
  });

  // test('sets arrow only', () => {
  //     const component = render(<Button isArrowOnly/>);
  //     expect(component).to.have.className('arrow-only');
  //     expect(component).to.not.have.attr('isArrowOnly');
  // });

  test('sets contents', () => {
    const { wrapper, expectedText } = mountPureComponent({});

    expect(wrapper.find('a').text()).toBe(expectedText);
  });
});