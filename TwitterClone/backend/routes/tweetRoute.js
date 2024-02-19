const express = require('express');
const router = express.Router();
const tweetController = require('../controllers/tweetController');

router.get('/', tweetController.fetchTweets);

router.post('/', tweetController.newTweet);

module.exports = router;