import React, { Component } from "react";
import {
  createStyles,
  Theme,
  WithStyles,
  withStyles
} from "@material-ui/core/styles";

export interface FooterType {
  item: string;
}

interface Props extends WithStyles<typeof styles> {
  footer: FooterType;
}

const styles = ({  }: Theme) =>
  createStyles({
    Footer: {
      width: "100%",
      minHeight: 400,
      background: "#3d3d55"
    }
  });

class Footer extends Component<Props> {
  render() {
    const { classes, footer } = this.props;
    return <div className={classes.Footer}>{footer.item}</div>;
  }
}

export default withStyles(styles)(Footer);
