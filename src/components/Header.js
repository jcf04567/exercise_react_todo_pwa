import React, { useContext } from "react";
import dig from "object-dig";
import { signInWithGoogle, logOut } from "../service/firebase";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const currentUser = useContext(AuthContext);
  console.log(currentUser);
  return(
    <>
      <header>
        ヘッダー
        <button onClick={!dig(currentUser,'currentUser','uid') ? signInWithGoogle : logOut}>{!dig(currentUser,'currentUser','uid') ? "ログイン" : "ログアウト" }</button>
      </header>
    </>
  )
}

export default Header;
