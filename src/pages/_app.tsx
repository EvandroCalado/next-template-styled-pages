import StyledComponentsRegistry from '@/lib/registry';
import Providers from '@/utils/Providers';
import type { AppProps } from 'next/app';
import { Open_Sans } from 'next/font/google';

const open_sans = Open_Sans({
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyledComponentsRegistry>
      <Providers>
        <main className={open_sans.className}>
          <Component {...pageProps} />
        </main>
      </Providers>
    </StyledComponentsRegistry>
  );
}
