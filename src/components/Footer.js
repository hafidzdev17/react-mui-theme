import React from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.mode === "dark" ? "#333" : "#f5f5f5",
    color: theme.palette.mode === "dark" ? "#fff" : "#000",
    padding: "1rem",
    marginTop: "auto",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="body2" align="center">
        &copy; {new Date().getFullYear()} My App. All rights reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
