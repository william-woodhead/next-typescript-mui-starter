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

interface Props extends WithStyles<typeof styles> {}

const styles = ({  }: Theme) =>
  createStyles({
    Drawer: {
      width: 250
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
        </div>
      </Drawer>
    );
  }

  render() {
    return (
      <Fragment>
        <AppBar position="static" color="default">
          <Toolbar>
            <Button onClick={this.curryToggleDrawer.call(this, true)}>
              Open
            </Button>
          </Toolbar>
        </AppBar>
        {this.renderDrawer.call(this)}
      </Fragment>
    );
  }
}

export default withStyles(styles)(Topbar);
