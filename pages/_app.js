import React from "react";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import App from "next/app";
import Head from "next/head";
import { makeStore } from "../redux/configureStore";
import GlobalStyle from "../styled/GlobalStyle";
import { ThemeProvider } from "styled-components/macro";
import { theme } from "../theme";

function getBaseUrl(req, setLocalhost) {
  var protocol = "https:";
  var host = req
    ? req.headers["x-forwarded-host"] || req.headers["host"]
    : window.location.host;
  if (host.indexOf("localhost") > -1) {
    if (setLocalhost) host = setLocalhost;
    protocol = "http:";
  }

  return protocol + "//" + host;
}

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const baseUrl = getBaseUrl(ctx.req, "localhost:3000");
    const path = baseUrl + ctx.pathname;

    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps, path };
  }

  render() {
    const { Component, pageProps, store, path } = this.props;
    return (
      <>
        <Head>
          <meta property="og:url" content={path} />
        </Head>

        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      </>
    );
  }
}

export default withRedux(makeStore)(MyApp);
