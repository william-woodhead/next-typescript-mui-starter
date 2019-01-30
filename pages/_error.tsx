import React from "react";
import { NextContext } from "next";
import {
  createStyles,
  Theme,
  WithStyles,
  withStyles
} from "@material-ui/core/styles";

interface Props extends WithStyles<typeof styles> {
  statusCode: number;
}

const styles = ({  }: Theme) =>
  createStyles({
    Error: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      fontFamily: "Verdana",
      marginTop: 60
    }
  });

class ErrorPage extends React.Component<Props> {
  static getInitialProps({ res, err }: NextContext) {
    const statusCode = res
      ? res.statusCode
      : err
        ? (err as any).statusCode
        : null;
    return {
      statusCode,
      content: {
        topbar: {
          buttonText: "Open sidebar"
        }
      }
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.Error}>
        <h2>
          {this.props.statusCode
            ? `An error ${this.props.statusCode} occurred on server`
            : "An error occurred on client"}
        </h2>
      </div>
    );
  }
}

export default withStyles(styles)(ErrorPage);
