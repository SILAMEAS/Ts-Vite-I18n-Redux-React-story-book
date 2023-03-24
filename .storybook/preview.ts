import type {Preview} from '@storybook/react';
import i18n from './i18next';

const preview: Preview = {
  parameters: {
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    i18n,
    local: 'fr'
  },
};

export default preview;
