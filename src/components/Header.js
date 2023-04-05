import React, { useContext } from "react";
import dig from "object-dig";
import { signInWithGoogle, logOut } from "../service/firebase";

import { makeStyles } from "@material-ui/core/styles";
import { AuthContext } from "../providers/AuthProvider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles(() => ({
  toolbar: {
    justifyContent: 'space-between',
  }
}));

const Header = () => {
  const currentUser = useContext(AuthContext);
  console.log(currentUser);
  const classes = useStyles();
  return(
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6">
          ReactToDo
        </Typography>
        {dig(currentUser, 'currentUser', 'uid') ?
          <button onClick={logOut}>ログアウト</button> :
          <button onClick={signInWithGoogle}>ログイン</button>
        }
      </Toolbar>
    </AppBar>
  )
}

export default Header;
