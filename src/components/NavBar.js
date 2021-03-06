import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from '@material-ui/icons/Menu';

class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="root">
          <AppBar position="static">
            <Toolbar>
              <IconButton
                edge="start"
                className="menuButton"
                color="inherit"
                aria-label="menu"
              ></IconButton>
              <Typography variant="h6" className="title">
                My Music App
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      </div>
    );
  }
}

export default NavBar;
