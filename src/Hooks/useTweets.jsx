import { useEffect, useState } from "react"
import {getData,suscribeData} from '../Services/Operation'
import {db} from '../Services/Firebase'
import { onSnapshot,collection } from "firebase/firestore";
const useTweets =()=>{
const [tweets, setTweets] = useState ([])


// useEffect(()=>{
//     getData("twittis").then(data => setTweets(data))
// },[])

useEffect(()=>{
    //const unsuscribe = ("twittis",(TweetList)=>{setTweets(TweetList)})
    
    //const unSubscribe = onSnapshot(collection(db,"twittis"),(TweetList)=>{setTweets(TweetList)}) 

    const tweetsCol = collection(db, "twittis");

    const getTweets = onSnapshot(tweetsCol,(tweetsSnapshot)=>{
        const tweetsList = tweetsSnapshot.docs.map((doc) => {
          return {
            tweet: doc.data().tweet,
            usuario: doc.data().usuario,
            id: doc.id
          }
        });
        setTweets (tweetsList)
      })


},[])
return tweets
}

export default useTweets