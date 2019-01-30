import React, { Component, Fragment } from "react";
import {
  createStyles,
  Theme,
  WithStyles,
  withStyles
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

export interface TopbarType {
  buttonText: string;
}

interface Props extends WithStyles<typeof styles> {
  topbar: TopbarType;
}

const styles = ({  }: Theme) =>
  createStyles({
    Drawer: {
      width: 250,
      fontFamily: "Verdana",
      padding: 10
    },
    Toolbar: {
      flexDirection: "row-reverse"
    }
  });

class Topbar extends Component<Props> {
  state = {
    drawerOpen: false
  };

  curryToggleDrawer(open: boolean) {
    return () => {
      this.setState({
        drawerOpen: open
      });
    };
  }

  renderDrawer() {
    const { classes } = this.props;
    return (
      <Drawer
        anchor="right"
        open={this.state.drawerOpen}
        onClose={this.curryToggleDrawer.call(this, false)}
      >
        <div className={classes.Drawer}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.curryToggleDrawer.call(this, false)}
            onKeyDown={this.curryToggleDrawer.call(this, false)}
          />
          <p>Hello modal!</p>
        </div>
      </Drawer>
    );
  }

  render() {
    const { topbar, classes } = this.props;
    return (
      <Fragment>
        <AppBar position="static" color="default">
          <Toolbar className={classes.Toolbar}>
            <Button onClick={this.curryToggleDrawer.call(this, true)}>
              {topbar.buttonText}
            </Button>
          </Toolbar>
        </AppBar>
        {this.renderDrawer.call(this)}
      </Fragment>
    );
  }
}

export default withStyles(styles)(Topbar);
