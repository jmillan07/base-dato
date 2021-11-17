import {db} from './Firebase.js'
import {collection, getDocs} from "firebase/firestore/lite"
import {doc, deleteDoc, addDoc, updateDoc} from 'firebase/firestore'
import { onSnapshot } from "firebase/firestore";


//Get data
export async function getData(coll){
    const dataCollection = collection(db,coll);
    const dataSnaptshot = await getDocs(dataCollection);
    const dataList = dataSnaptshot.docs.map(doc => doc.data());
    
    return dataList
  }
  
//Delete data

export async function deleteData(coll,id){
    await deleteDoc(doc(db,coll,id))
  }

  //Add data
export async function addData(coll,data){
    const res = await addDoc(collection(db,coll))
    return res
  }

//Update data
  export async function updateData(coll,id,data){
    await updateDoc(doc(db,coll,id),data)
  }

  //suscribe to data
  export function suscribeData(coll,callback){
    const unSubscribe = onSnapshot(collection(db,coll),()=>{}) 
    return unSubscribe
    
    //  onSnapshot(collection(db, "cities"), () => {
    //     // Respond to data
    //     // ...
    //   });
      
  }

