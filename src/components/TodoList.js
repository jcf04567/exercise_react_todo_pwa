import React, {useState, useEffect, useContext} from "react";
import * as Api from "../service/api";
import { signInWithGoogle } from "../service/firebase";
import dig from "object-dig";
import { AuthContext } from "../providers/AuthProvider";

function ToDoList(props) {
  const currentUser = useContext(AuthContext);

  const deleteHandle = async(id) => {
    await Api.todoDelete(id);

    props.fetch(currentUser);
  }

  //propsを元にliタグを作成
  // const todoList = props.todos.map((todo) => {
  //   return(
  //     <li key={todo.id}>{todo.content}</li>
  //   )
  // })
  return(
    <div>
      <h2>ToDoリスト一覧</h2>
      <ul>
        {props.todos.map(todo => <li key={todo.id}>{todo.content}<button type="button" onClick={() => {
          deleteHandle(todo.id);
          }}>削除</button></li>)}
      </ul>
    </div>
  );
}

export default ToDoList;
