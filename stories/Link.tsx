import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, color } from '@storybook/addon-knobs';

import Link from '../src/components/button/Link'

const stories = storiesOf('Link', module);

const divWrapperStyle: object = {
  fontFamily: '"Helvetica Neue", Helvetica, Roboto, Arial, sans-serif',
  fontWeight: 'normal',
  lineHeight: '1.5',
  color: '#0a0a0a',
  MozOsxFontSmoothing: 'grayscale',
};

stories.addDecorator(withKnobs);

stories.add('Basics', () => {

  return (
    <div style={divWrapperStyle}>
      <Link href={'#'}>{text('Label1', 'Learn More')}</Link>&nbsp;
      <Link href={'#'}>{text('Label2', 'View All Features')}</Link>&nbsp;
      <Link href={'#'} buttonType={'success'}>{text('Label3', 'Save')}</Link>&nbsp;
      <Link href={'#'} buttonType={'alert'}>{text('Label4', 'Delete')}</Link>
    </div>
  );
});

stories.add('Sizing', () => {
  return (
    <div style={divWrapperStyle}>
      <Link href={'#'} buttonSize={'tiny'}>So Tiny</Link>&nbsp;
      <Link href={'#'} buttonSize={'small'}>So Small</Link>&nbsp;
      <Link href={'#'}>So Basic</Link>&nbsp;
      <Link href={'#'} buttonSize={'large'}>So Large</Link>&nbsp;
      <Link href={'#'} buttonSize={'expanded'}>Such Expand</Link>&nbsp;
      <Link href={'#'} buttonSize={'small'} isExpanded={true}>Wow, Small Expand</Link>
    </div>
  );
});

stories.add('Coloring', () => {
  return (
    <div style={divWrapperStyle}>
      <Link href={'#'} buttonType={'primary'}>Primary</Link>&nbsp;
      <Link href={'#'} buttonType={'secondary'}>Secondary</Link>&nbsp;
      <Link href={'#'} buttonType={'success'}>Success</Link>&nbsp;
      <Link href={'#'} buttonType={'alert'}>Alert</Link>&nbsp;
      <Link href={'#'} buttonType={'warning'}>Warning</Link>
    </div>
  );
});

stories.add('Hollow Style', () => {
  return (
    <div style={divWrapperStyle}>
      <Link href={'#'} isHollow={true}>Primary</Link>&nbsp;
      <Link href={'#'} isHollow={true} buttonType={'secondary'}>Secondary</Link>&nbsp;
      <Link href={'#'} isHollow={true} buttonType={'success'}>Success</Link>&nbsp;
      <Link href={'#'} isHollow={true} buttonType={'alert'}>Alert</Link>&nbsp;
      <Link href={'#'} isHollow={true} buttonType={'warning'}>Warning</Link>&nbsp;
      <Link href={'#'} isHollow={true} isDisabled={true}>Disabled</Link>
    </div>
  );
});

stories.add('Disabled', () => {
  return (
    <div style={divWrapperStyle}>
      <Link href={'#'} isDisabled={true} aria-disabled>Disabled</Link>&nbsp;
      <Link href={'#'} buttonType={'primary'} isDisabled={true}>Disabled</Link>&nbsp;
      <Link href={'#'} buttonType={'secondary'} isDisabled={true}>Disabled</Link>&nbsp;
      <Link href={'#'} buttonType={'success'} isDisabled={true}>Disabled</Link>&nbsp;
      <Link href={'#'} buttonType={'alert'} isDisabled={true}>Disabled</Link>&nbsp;
      <Link href={'#'} buttonType={'warning'} isDisabled={true}>Disabled</Link>&nbsp;
      <br/>
      <Link href={'#'} isHollow={true} isAriaDisabled={true} isDisabled={true}>Disabled</Link>&nbsp;
      <Link href={'#'} buttonType={'primary'} isHollow={true} isDisabled={true}>Disabled</Link>&nbsp;
      <Link href={'#'} buttonType={'secondary'} isHollow={true} isDisabled={true}>Disabled</Link>&nbsp;
      <Link href={'#'} buttonType={'success'} isHollow={true} isDisabled={true}>Disabled</Link>&nbsp;
      <Link href={'#'} buttonType={'alert'} isHollow={true} isDisabled={true}>Disabled</Link>&nbsp;
      <Link href={'#'} buttonType={'warning'} isHollow={true} isDisabled={true}>Disabled</Link>
    </div>

  );
});

stories.add('Clear Style', () => {
  return (
    <div style={divWrapperStyle}>
      <Link href={'#'} isClear={true}>Primary</Link>&nbsp;
      <Link href={'#'} isClear={true} buttonType={'secondary'}>Secondary</Link>&nbsp;
      <Link href={'#'} isClear={true} buttonType={'success'}>Success</Link>&nbsp;
      <Link href={'#'} isClear={true} buttonType={'alert'}>Alert</Link>&nbsp;
      <Link href={'#'} isClear={true} buttonType={'warning'}>Warning</Link>&nbsp;
      <Link href={'#'} isClear={true} isDisabled={true}>Disabled</Link>
    </div>
  );
});

stories.add('Dropdown Arrows', () => {
  return (
    <div style={divWrapperStyle}>
      <Link href={'#'} isDropdown={true} buttonSize={'tiny'}>Dropdown Link</Link>&nbsp;
      <Link href={'#'} isDropdown={true} buttonSize={'small'}>Dropdown Link</Link>&nbsp;
      <Link href={'#'} isDropdown={true}>Dropdown Link</Link>&nbsp;
      <Link href={'#'} isDropdown={true} buttonSize={'large'}>Dropdown Link</Link>&nbsp;
      <Link href={'#'} isDropdown={true} isExpanded={true}>Dropdown Link</Link>
    </div>
  );
});

stories.add('Accessibility', () => {
  return (
    <div style={divWrapperStyle}>
      <Link
        href={'#'}
        color={color('Color', undefined)}
        backgroundColor={color('Background Color', undefined)}
        size={text('Size', undefined)}
        isHollow={boolean('isHollow', false)}
        isExpanded={boolean('isExpanded', false)}
        isDisabled={boolean('isDisabled', false)}
        isDropdown={boolean('isDropdown', false)}
        onClick={action('clicked')}>{text('Label', 'Hello Link')}</Link>&nbsp;
      <Link href={'#'}>
        <span className={'show-for-sr'}>Close</span>
        <span aria-hidden={'true'}><i className={'fi-x'}/></span>
      </Link>
    </div>

  );
});
