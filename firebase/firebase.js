
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCRMt4MWR3DjzMVDZzVRhSjwE10mkbLQ9I",
  authDomain: "chat-app-react-62141.firebaseapp.com",
  projectId: "chat-app-react-62141",
  storageBucket: "chat-app-react-62141.appspot.com",
  messagingSenderId: "1013014081838",
  appId: "1:1013014081838:web:ae2b8ebcd061e6be8d8abf"
};


const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const storage =getStorage(app);
export const db =getFirestore(app);