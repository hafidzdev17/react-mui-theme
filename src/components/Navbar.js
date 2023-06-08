import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import { useTheme, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
}));

const Navbar = ({ onThemeToggle }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <AppBar
      position="static"
      color={theme.palette.mode === "dark" ? "default" : "primary"}
    >
      <Toolbar>
        <Typography variant="h6" component="div" className={classes.title}>
          My App
        </Typography>
        <Switch
          checked={theme.palette.mode === "dark"}
          onChange={onThemeToggle}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
