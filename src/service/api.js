import firebase from "firebase";
import { db } from "./firebase";

const COLLECTION_NAME = "todo";

export const initGet = async(uid) => {
  const todo = await db.collection("todo")
  .orderBy("createdAt", "desc")
  .where("uid", "==", uid);

  return todo.get().then((snapShot) =>{
    let todos = [];
    snapShot.forEach((doc) => {
      todos.push({
        id: doc.id,
        content: doc.data().content,
        isComplete: doc.data().isComplete,
      });
    });
    return todos;
  });
}
export const addToDo = (content, uid) => {
  db.collection(COLLECTION_NAME).add({
    content: content,
    uid:uid,
    isComplete:false,
    createdAt:firebase.firestore.FieldValue.serverTimestamp()
  });
}

export const todoDelete = async(id) => {
  await db.collection(COLLECTION_NAME).doc(id).delete();
}

export async function toggleComplete(id) {
  const todo = await db.collection(COLLECTION_NAME).doc(id).get();
  return db.collection(COLLECTION_NAME).doc(id).update({
    isComplete: todo.data().isComplete ? false :true,
  });
}
