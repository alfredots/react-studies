import { AppProps } from 'next/app';
import Head from 'next/head';
import { ErrorBoundary } from 'react-error-boundary';

import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Project</title>
        <link rel="shorcut icon" href="/img/bg.png" />
        <link rel="apple-touch-icon" href="/img/bg.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Project" />
      </Head>
      <ErrorBoundary FallbackComponent={() => <h1>Crashou</h1>}>
        <Component {...pageProps} />
      </ErrorBoundary>
    </>
  );
}

export default App;
