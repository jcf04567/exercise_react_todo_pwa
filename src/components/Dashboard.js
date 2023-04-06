import React, {useState, useEffect, useContext} from "react";
import * as Api from "../service/api";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { signInWithGoogle } from "../service/firebase";
import dig from "object-dig";
import { AuthContext } from "../providers/AuthProvider";
import ToDoList from "./TodoList";

const useStyles = makeStyles(() => ({
  root: {
    textAlign: 'center',
    marginTop: 40,
  },
  form: {
    width: "100%",
    maxWidth: 360,
    margin: "auto",
    marginBottom:40,
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
  },
  input: {
    marginRight: 10,
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  const currentUser = useContext(AuthContext);
  const [inputName, setInputName] = useState("");
  const [todos, setTodos] = useState([]);
  // console.log(inputName);
  // console.log(todos);

useEffect(() => {
  // ToDo一覧を取得
  fetch(currentUser);
},[currentUser]);

const fetch = async () => {
  if( dig(currentUser, 'currentUser', 'uid')) {
    const data = await Api.initGet(currentUser.currentUser.uid);
    // await setTodos(data);
    setTodos(data);
  }
}

const post = () => {
  Api.addToDo(inputName, currentUser.currentUser.uid);
  setInputName("");
  fetch();
}

  return(
    <div className={classes.root}>
      {dig(currentUser,'currentUser','uid') ?
      <form className={classes.form}>
        <TextField className={classes.input} placeholder="ToDoName" value={inputName} onChange={event => setInputName(event.currentTarget.value)} />
        <Button variant="contained"
                color="primary"
                size="small"
                disabled={inputName.length > 0 ? false :true}
                type="button"
                onClick={() => post()}>
                  追加
        </Button>
      </form>
      :
      <button onClick={signInWithGoogle}>ログイン</button>}
      <ToDoList todos={todos} fetch={fetch} />
    </div>
  );
}

export default Dashboard;
