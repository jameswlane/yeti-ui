import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, color } from '@storybook/addon-knobs';

import Button from '../src/components/button/Button'

const stories = storiesOf('Button', module);

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
      <Button>{text('Label1', 'Learn More')}</Button>&nbsp;
      <Button>{text('Label2', 'View All Features')}</Button>&nbsp;
      <Button buttonType={'success'}>{text('Label3', 'Save')}</Button>&nbsp;
      <Button buttonType={'alert'}>{text('Label4', 'Delete')}</Button>
    </div>
  );
});

stories.add('Sizing', () => {
  return (
    <div style={divWrapperStyle}>
      <Button buttonSize={'tiny'}>So Tiny</Button>&nbsp;
      <Button buttonSize={'small'}>So Small</Button>&nbsp;
      <Button>So Basic</Button>&nbsp;
      <Button buttonSize={'large'}>So Large</Button>&nbsp;
      <Button buttonSize={'expanded'}>Such Expand</Button>&nbsp;
      <Button buttonSize={'small'} isExpanded={true}>Wow, Small Expand</Button>
    </div>
  );
});

stories.add('Coloring', () => {
  return (
    <div style={divWrapperStyle}>
      <Button buttonType={'primary'}>Primary</Button>&nbsp;
      <Button buttonType={'secondary'}>Secondary</Button>&nbsp;
      <Button buttonType={'success'}>Success</Button>&nbsp;
      <Button buttonType={'alert'}>Alert</Button>&nbsp;
      <Button buttonType={'warning'}>Warning</Button>
    </div>
  );
});

stories.add('Hollow Style', () => {
  return (
    <div style={divWrapperStyle}>
      <Button isHollow={true}>Primary</Button>&nbsp;
      <Button isHollow={true} buttonType={'secondary'}>Secondary</Button>&nbsp;
      <Button isHollow={true} buttonType={'success'}>Success</Button>&nbsp;
      <Button isHollow={true} buttonType={'alert'}>Alert</Button>&nbsp;
      <Button isHollow={true} buttonType={'warning'}>Warning</Button>&nbsp;
      <Button isHollow={true} isDisabled={true}>Disabled</Button>
    </div>
  );
});

stories.add('Disabled', () => {
  return (
    <div style={divWrapperStyle}>
      <Button isDisabled={true} aria-disabled>Disabled</Button>&nbsp;
      <Button buttonType={'primary'} isDisabled={true}>Disabled</Button>&nbsp;
      <Button buttonType={'secondary'} isDisabled={true}>Disabled</Button>&nbsp;
      <Button buttonType={'success'} isDisabled={true}>Disabled</Button>&nbsp;
      <Button buttonType={'alert'} isDisabled={true}>Disabled</Button>&nbsp;
      <Button buttonType={'warning'} isDisabled={true}>Disabled</Button>&nbsp;
      <br/>
      <Button isHollow={true} isAriaDisabled={true} isDisabled={true}>Disabled</Button>&nbsp;
      <Button buttonType={'primary'} isHollow={true} isDisabled={true}>Disabled</Button>&nbsp;
      <Button buttonType={'secondary'} isHollow={true} isDisabled={true}>Disabled</Button>&nbsp;
      <Button buttonType={'success'} isHollow={true} isDisabled={true}>Disabled</Button>&nbsp;
      <Button buttonType={'alert'} isHollow={true} isDisabled={true}>Disabled</Button>&nbsp;
      <Button buttonType={'warning'} isHollow={true} isDisabled={true}>Disabled</Button>
    </div>

  );
});

stories.add('Clear Style', () => {
  return (
    <div style={divWrapperStyle}>
      <Button isClear={true}>Primary</Button>&nbsp;
      <Button isClear={true} buttonType={'secondary'}>Secondary</Button>&nbsp;
      <Button isClear={true} buttonType={'success'}>Success</Button>&nbsp;
      <Button isClear={true} buttonType={'alert'}>Alert</Button>&nbsp;
      <Button isClear={true} buttonType={'warning'}>Warning</Button>&nbsp;
      <Button isClear={true} isDisabled={true}>Disabled</Button>
    </div>
  );
});

stories.add('Dropdown Arrows', () => {
  return (
    <div style={divWrapperStyle}>
      <Button isDropdown={true} buttonSize={'tiny'}>Dropdown Button</Button>&nbsp;
      <Button isDropdown={true} buttonSize={'small'}>Dropdown Button</Button>&nbsp;
      <Button isDropdown={true}>Dropdown Button</Button>&nbsp;
      <Button isDropdown={true} buttonSize={'large'}>Dropdown Button</Button>&nbsp;
      <Button isDropdown={true} isExpanded={true}>Dropdown Button</Button>
    </div>
  );
});

stories.add('Accessibility', () => {
  return (
    <div style={divWrapperStyle}>
      <Button
        color={color('Color', undefined)}
        backgroundColor={color('Background Color', undefined)}
        size={text('Size', undefined)}
        isHollow={boolean('isHollow', false)}
        isExpanded={boolean('isExpanded', false)}
        isDisabled={boolean('isDisabled', false)}
        isDropdown={boolean('isDropdown', false)}
        onClick={action('clicked')}>{text('Label', 'Hello Button')}</Button>&nbsp;
      <Button>
        <span className={'show-for-sr'}>Close</span>
        <span aria-hidden={'true'}><i className={'fi-x'}/></span>
      </Button>
    </div>

  );
});
