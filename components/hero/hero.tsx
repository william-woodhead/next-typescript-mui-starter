import React, { Component } from "react";
import {
  createStyles,
  Theme,
  WithStyles,
  withStyles
} from "@material-ui/core/styles";

interface Props extends WithStyles<typeof styles> {}

const styles = ({  }: Theme) =>
  createStyles({
    Hero: {
      width: "100%",
      minHeight: 400,
      background: "lightgrey"
    }
  });

class Hero extends Component<Props> {
  render() {
    const { classes } = this.props;
    return <div className={classes.Hero}>Hero</div>;
  }
}

export default withStyles(styles)(Hero);
