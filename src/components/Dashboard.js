import React, {useState, useEffect, useContext} from "react";
import * as Api from "../service/api";
import { signInWithGoogle } from "../service/firebase";
import dig from "object-dig";
import { AuthContext } from "../providers/AuthProvider";


const Dashboard = () => {
  const currentUser = useContext(AuthContext);
  const [inputName, setInputName] = useState("");
  console.log(inputName);

  const post = () => {
    Api.addToDo(inputName, currentUser.currentUser.uid);
    setInputName("");
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
    </div>
  );
}

export default Dashboard;
