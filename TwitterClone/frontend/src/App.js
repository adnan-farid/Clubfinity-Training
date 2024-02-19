import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [tweets, setTweets] = useState([]);
  const [newTweet, setNewTweet] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    fetchTweets();
  }, []);

  const fetchTweets = async () => {
    const response = await axios.get('http://localhost:3000/tweet');
    setTweets(response.data);
  };

  const postTweet = async () => {
    if (newTweet.length > 280) {
      alert('Tweet must be under 280 characters');
      return;
    }
    await axios.post('http://localhost:3000/tweet', { username, tweet: newTweet });
    setNewTweet('');
    setUsername('');
    fetchTweets();
  };

  return (
    <div>
      <h1>Tweet App</h1>
      <div>
        <input
          type="text"
          placeholder="Your Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <textarea
          placeholder="What's happening?"
          value={newTweet}
          onChange={(e) => setNewTweet(e.target.value)}
        ></textarea>
        <button onClick={postTweet}>Tweet</button>
      </div>
      <div>
        {tweets.map((tweet, index) => (
          <div key={index}>
            <h3>{tweet.username}</h3>
            <p>{tweet.tweet}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
