import React, { Fragment, Component } from "react";
import {
  createStyles,
  Theme,
  WithStyles,
  withStyles
} from "@material-ui/core/styles";
import Topbar, { TopbarType } from "../topbar";

const styles = ({  }: Theme) => createStyles({});

export interface ContentType {
  topbar: TopbarType;
}

interface Props extends WithStyles<typeof styles> {
  children: any;
  content: ContentType;
}

class Wrapper extends Component<Props> {
  render() {
    const { children, content } = this.props;

    return (
      <Fragment>
        <Topbar topbar={content.topbar} />
        {children}
      </Fragment>
    );
  }
}

export default withStyles(styles)(Wrapper);
