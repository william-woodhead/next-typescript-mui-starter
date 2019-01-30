// This page is based on the Material-ui Next.js page
// https://github.com/mui-org/material-ui/tree/master/examples/nextjs
import React from "react";
import { merge } from "lodash";
import App, { Container, NextAppContext } from "next/app";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import JssProvider from "react-jss/lib/JssProvider";
import getPageContext, { PageContext } from "../src/getPageContext";
import Wrapper, { ContentType } from "../components/wrapper";

interface Props extends NextAppContext {
  pageProps: PageProps;
  content: ContentType;
}

interface PageProps {
  content: ContentType;
}

class MyApp extends App<Props> {
  static async getInitialProps({ Component, ctx }: NextAppContext) {
    let pageProps: any = {};

    if (Component.getInitialProps) {
      const newPageProps = await Component.getInitialProps(ctx);
      pageProps = merge(pageProps, newPageProps);
    }

    return { pageProps };
  }

  constructor(props: Props) {
    super(props);
    this.pageContext = getPageContext();
  }

  private pageContext: PageContext;

  componentDidMount() {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps }: Props = this.props;

    return (
      <Container>
        <JssProvider
          registry={this.pageContext.sheetsRegistry}
          generateClassName={this.pageContext.generateClassName}
        >
          <MuiThemeProvider
            theme={this.pageContext.theme}
            sheetsManager={this.pageContext.sheetsManager}
          >
            <CssBaseline />
            <Wrapper content={pageProps.content}>
              <Component {...pageProps} pageContext={this.pageContext} />
            </Wrapper>
          </MuiThemeProvider>
        </JssProvider>
      </Container>
    );
  }
}

export default MyApp;
