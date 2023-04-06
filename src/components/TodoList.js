import React, {useState, useEffect, useContext} from "react";
import { ListItem,
          ListItemIcon,
          ListItemText,
          ListItemSecondaryAction,
          IconButton,
          Checkbox
        } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
// import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from "@material-ui/core";
import * as Api from "../service/api";
import { auth, signInWithGoogle } from "../service/firebase";
import dig from "object-dig";
import { AuthContext } from "../providers/AuthProvider";

const useStyles = makeStyles(() => ({
  root:{
    maxWidth: 360,
    margin: 'auto',
  },
  ul: {
    paddingLeft: 0,
    listStyle: 'none',
  },
  list: {
    justifyContent: 'space-between',
  },
}));

function ToDoList(props) {
  const classes = useStyles();
  const deleteHandle = async(id) => {
    await Api.todoDelete(id);

    props.fetch();
  }

  async function checkHandle(id) {
    await Api.toggleComplete(id);
    props.fetch();
  }

  return(
    <div className={classes.root}>
      <h2>ToDoリスト一覧</h2>
      <ul className={classes.ul}>
        {/* {props.todos.map(todo => <li key={todo.id}>{todo.content}<button type="button" onClick={() => {
          deleteHandle(todo.id);
          }}>削除</button></li>)} */}
        {props.todos.map(todo =>
          <ListItem key={todo.id}>
            <ListItemIcon>
              <Checkbox checked={todo.isComplete} onChange={() => checkHandle(todo.id)} />
            </ListItemIcon>
            <ListItemText primary={todo.content}/>
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => deleteHandle(todo.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        )}
      </ul>
    </div>
  );
}

export default ToDoList;
