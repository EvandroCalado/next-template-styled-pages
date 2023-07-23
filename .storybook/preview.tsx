import React from 'react';
import Providers from '../src/utils/Providers';
import type { Preview } from '@storybook/react';
import { GlobalStyles } from '../src/styles/global-styles';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({ subsets: ['latin'] });

export const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <div className={openSans.className}>
      <Providers>
        <GlobalStyles />
        <Story />
      </Providers>
    </div>
  ),
];
