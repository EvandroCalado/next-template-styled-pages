'use client';

import { GlobalStyles } from '../styles/global-styles';
import { theme } from '../styles/theme';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'styled-components';

interface IAuthProvider {
  children: React.ReactNode;
}

export default function Providers({ children }: IAuthProvider) {
  return (
    <SessionProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
}
