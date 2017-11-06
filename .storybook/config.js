import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/Button.tsx');
  require('../stories/Link.tsx');
}

configure(loadStories, module);