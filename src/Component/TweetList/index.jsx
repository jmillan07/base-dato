import useTweets from '../../Hooks/useTweets';

function TweetList() {
const tweets = useTweets()

return (
    <div>
      {
        tweets.map((tweet)=> {
          return <p>{tweet.mensaje}</p>
        })
      }
    </div>
  );
}

export default TweetList;
