import React from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.mode === "dark" ? "#fffccc" : "#f5f5f5",
    color: theme.palette.mode === "dark" ? "#ccc000" : "#000",
    padding: "1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
      color: "#fcfc",
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <Typography variant="h2" component="h1">
        Welcome to My App
      </Typography>
    </header>
  );
};

export default Header;
