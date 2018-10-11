import React, { Fragment, Component } from "react";
import {
  createStyles,
  Theme,
  WithStyles,
  withStyles
} from "@material-ui/core/styles";
import Footer, { FooterType } from "../footer";
import Topbar from "../topbar";

const styles = ({  }: Theme) => createStyles({});

interface Content {
  footer: FooterType;
}

interface Props extends WithStyles<typeof styles> {
  children: any;
  content: Content;
}

class Wrapper extends Component<Props> {
  render() {
    const { children, content } = this.props;

    return (
      <Fragment>
        <Topbar />
        {children}
        <Footer footer={content.footer} />
      </Fragment>
    );
  }
}

export default withStyles(styles)(Wrapper);
