// This page is based on the Material-ui Next.js page
// https://github.com/mui-org/material-ui/tree/master/examples/nextjs
import React from "react";
import Document, {
  Head,
  Main,
  NextScript,
  NextDocumentContext,
  RenderPageResponse,
  DefaultDocumentIProps
} from "next/document";
import { PageContext } from "../src/getPageContext";
import flush from "styled-jsx/server";

interface Props {
  pageContext: PageContext;
}

interface DocumentIProps extends DefaultDocumentIProps, RenderPageResponse {
  pageContext: PageContext;
}

class MyDocument extends Document<Props> {
  static getInitialProps(ctx: NextDocumentContext): DocumentIProps {
    let pageContext: PageContext;
    const page: RenderPageResponse = ctx.renderPage(Component => {
      const WrappedComponent = (props: any) => {
        pageContext = props.pageContext;
        return <Component {...props} />;
      };

      return WrappedComponent;
    });

    let css;
    // @ts-ignore using pageContext before it is declared but the function above runs synchronously so its all fine
    if (pageContext) {
      css = pageContext.sheetsRegistry.toString();
    }

    return {
      ...page,
      pageContext,
      styles: [
        <React.Fragment key="style">
          <style
            id="jss-server-side"
            dangerouslySetInnerHTML={{
              __html: css as string
            }}
          />
          {flush() || null}
        </React.Fragment>
      ]
    };
  }

  render() {
    return (
      <html lang="en" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
