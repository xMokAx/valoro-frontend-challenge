import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons&display=swap"
            rel="stylesheet"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#77f0ab" />
          <meta name="theme-color" content="#ffffff"></meta>
          <meta
            name="description"
            content="Reservations.com - The easiest way for booking."
          ></meta>
          <meta
            property="og:description"
            content="Reservations.com - The easiest way for booking."
          />
          <meta property="og:site_name" content="reservations.com" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/og-image.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="628" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
