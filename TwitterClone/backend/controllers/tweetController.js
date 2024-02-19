const Tweet = require("../model/tweet");

const fetchTweets = async (req, res) => {
  try {
    const tweets = await Tweet.find({});
    res.status((200)).json(tweets);
  } catch (err) {
    console.error(err);
  }
} 

const newTweet = async(req,res) => {
  try {
    const { username, tweet } = req.body;
    //no user or tweet message
    if (!username || !tweet) {
      return res.status(400);
    }
    const newTweet = new Tweet({ username, tweet });
    await newTweet.save();
    res.status(201).json(newTweet);
    } catch (err) {
      console.error(err);
  }
}

module.exports = { fetchTweets, newTweet };