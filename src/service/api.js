import firebase from "firebase";
import { db } from "./firebase";

export const addToDo = (content, uid) => {
  db.collection("todo").add({
    content: content,
    uid:uid,
    isComplete:false,
    createdAt:firebase.firestore.FieldValue.serverTimestamp()
  });
}
