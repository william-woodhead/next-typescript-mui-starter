import React, { Component } from "react";
import {
  createStyles,
  Theme,
  WithStyles,
  withStyles
} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

interface Props extends WithStyles<typeof styles> {}

const styles = ({ spacing }: Theme) =>
  createStyles({
    FloatingBox: {
      width: "90%",
      minHeight: 200,
      position: "relative",
      top: -100,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontSize: "3em",
      padding: spacing.unit * 2
    },
    "@media (min-width: 1024px)": {
      FloatingBox: {
        width: "60%"
      }
    },
    Wrapper: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    }
  });

class FloatingBox extends Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.Wrapper}>
        <Card className={classes.FloatingBox}>
          Welcome to your NEXT Material-UI Typescript site
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(FloatingBox);
