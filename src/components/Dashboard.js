import React, {useState, useEffect, useContext} from "react";
import * as Api from "../service/api";
import { signInWithGoogle } from "../service/firebase";
import dig from "object-dig";
import { AuthContext } from "../providers/AuthProvider";
import ToDoList from "./TodoList";

const Dashboard = () => {
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
    <div>
      {dig(currentUser,'currentUser','uid') ?
      <form>
        <input placeholder="ToDoName" value={inputName} onChange={event => setInputName(event.currentTarget.value)} />
        <button type="button" onClick={() => post()}>追加</button>
      </form>
      :
      <button onClick={signInWithGoogle}>ログイン</button>}
      <ToDoList todos={todos} fetch={fetch} />
    </div>
  );
}

export default Dashboard;
