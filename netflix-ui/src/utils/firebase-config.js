import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdXGkFVQ9BvEvK9fVWWOXxOOL5dLMP4P0",
  authDomain: "react-netflix-clone-d7bee.firebaseapp.com",
  projectId: "react-netflix-clone-d7bee",
  storageBucket: "react-netflix-clone-d7bee.appspot.com",
  messagingSenderId: "189244004460",
  appId: "1:189244004460:web:70ff453aaa92c499d12049",
  measurementId: "G-WW72RSEGDX"
};
const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app);