import { AppProps } from 'next/app';
import Head from 'next/head';

import { ThemeProvider } from '@/styles/ThemeProvider';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Lucas Felix</title>
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
