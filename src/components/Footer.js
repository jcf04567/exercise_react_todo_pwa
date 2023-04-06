import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: 56,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#FFF",
    backgroundColor: "#3f51b5",
    position: "fixed",
    bottom: 0,
  },
}));

function Footer(){
  const classes = useStyles();
  return(
    <Box className={classes.root}>copyright @Office Goendo</Box>
  )
};

export default Footer;
