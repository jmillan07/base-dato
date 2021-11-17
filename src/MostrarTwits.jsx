// import {useEffect, useState} from "react";
// import useInput from "./useInput.jsx" 
// import { getDoc, setDoc, doc, collection, addDoc } from "firebase/firestore";
// import { initializeApp } from "firebase/app";
// import {getFirestore} from "firebase/firestore/lite"
// import { async } from "@firebase/util";
// const firebaseConfig = {
//     apiKey: "AIzaSyA62nk8MdEroEWcQZvx4MpmgpQkV5l1rKg",
//     authDomain: "proyecto-prueba-74f20.firebaseapp.com",
//     projectId: "proyecto-prueba-74f20",
//     storageBucket: "proyecto-prueba-74f20.appspot.com",
//     messagingSenderId: "871990221625",
//     appId: "1:871990221625:web:963a48f24aece7b3a6a6e8"
//   };
  
//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const db = getFirestore(app)

  
// const MiApp = () => {


//     const [tweet, handleTweet] = useInput()
//     const [autor, handleAutor] = useInput()

//     const handleSubmit = (e) =>{
//         e.preventDefault()
//         const tweetToSend = {
//             autor, 
//             tweet
//         }
//         console.log("esto es una mensaje")
//     }

//     const miCollection = collection (db,"twittis")

//     const sentwites = async() =>{
//         const res = await addDoc (miCollection, tweetToSend)
//         const newDoc = doc(db,"twittis", res.id)
//         const docSnap = await getDoc(newDoc)
//         docSnap.exists() ? 
//             console.log (docSnap.data()) :
//             console.log ("doc no existe")
//         const newTweet = {
//             ...docSnap.data(),
//             id:res.id
//         }

//     }

//     return (
//         <>
//         <h1>Este es mi Twitter personal</h1>
//         {/* <form>
//             <textarea></textarea>
//             <input type='Text'></input>
//             <button type='submit' onClick='handleEnevt'>enviar</button>
//         </form> */}
//         <div class="form-container">
//             <form className="form-box">
//                 <p className="title">Tweets</p>
//                 <input 
//                 className="input-box" 
//                 type="text" 
//                 placeholder="Autor" 
//                 name= "autor"
//                 value={autor}
//                 onChange={handleAutor}
//                 />
//                 <input 
//                 className="input-box" 
//                 type="text" 
//                 placeholder="Escriba un tweet"
//                 name="tweet"
//                 value={tweet}
//                 onChange={handleTweet}
//                 />
//                 <button type="submit" class="submit" onClick={handleSubmit}>Enviar</button>
//             </form>
//         </div>
//         </>
//     )
// }

// export default MiApp