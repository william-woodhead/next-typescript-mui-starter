import React, { Component } from "react";
import {
  createStyles,
  Theme,
  WithStyles,
  withStyles
} from "@material-ui/core/styles";

export interface HeroType {
  title: string;
}

interface Props extends WithStyles<typeof styles> {
  hero: HeroType;
}

const styles = ({  }: Theme) =>
  createStyles({
    Hero: {
      width: "100%",
      height: "100vh",
      background: "lightgrey",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
      fontFamily: "Verdana"
    },
    License: {
      color: "#666666"
    },
    Title: {
      color: "#444444"
    }
  });

class Hero extends Component<Props> {
  render() {
    const { classes, hero } = this.props;
    return (
      <div className={classes.Hero}>
        <h1 className={classes.Title}>{hero.title}</h1>
        <div className={classes.License}>William Woodhead - MIT License</div>
      </div>
    );
  }
}

export default withStyles(styles)(Hero);
