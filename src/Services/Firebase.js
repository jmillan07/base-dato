import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA62nk8MdEroEWcQZvx4MpmgpQkV5l1rKg",
  authDomain: "proyecto-prueba-74f20.firebaseapp.com",
  projectId: "proyecto-prueba-74f20",
  storageBucket: "proyecto-prueba-74f20.appspot.com",
  messagingSenderId: "871990221625",
  appId: "1:871990221625:web:963a48f24aece7b3a6a6e8"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


