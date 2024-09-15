const express = require('express');
// const redis = require('redis');
const axios = require('axios');
const cors = require('cors');

// Build Express app
const app = express();
app.use(cors());
app.use(express.json());

// Set Redis Server
// const redisClient = redis.createClient();
// redisClient.connect().catch(console.error);

// Drupal URL
const DRUPAL_BASE_URL = 'https://live-aiden-drupal.pantheonsite.io/jsonapi';

// const CACHE_DURATION = 3600;

// Routes to get all articles
app.get(
    '/api/articles', async (req, res) => {
        try {
            console.log("Request received to fetch articles.");

            // check if Redis cache existed
            // const cachedArticles = await redisClient.get('articles');
            // if (cachedArticles) { // return articles from caching
            //     return res.json(JSON.parse(cachedArticles));
            // }

            console.log("Fetching articles from Drupal API...");
            // if Redis cache does not existe
            const response = await axios.get(`${DRUPAL_BASE_URL}/node/article?page[limit]=100`);
            const articles = response.data;

            // save response to redis caching
            // await redisClient.set('articles', JSON.stringify(articles), {
            //     EX: CACHE_DURATION,
            // });

            // return article list
            console.log("Articles cached in Redis.");
            return res.json(articles);

        } catch (error) {
            console.error('Error fetching articles:', error);
            res.status(500).json({ message: 'Error fetching articles' });
        }
    }
);

// Routes to get specific article and its details
app.get(
    '/api/articles/:uuid', async (req, res) => {
        const { uuid } = req.params;

        try {
            // const cachedArticle = await redisClient.get(`articles:${uuid}`);
            // if (cachedArticle) {
            //     return res.json(JSON.parse(cachedArticle));
            // }

            const response = await axios.get(`${DRUPAL_BASE_URL}/node/article/${uuid}`);
            const article = response.data;

            // save response to redis caching
            // await redisClient.set(`article:${uuid}`, JSON.stringify(article), {
            //     EX: CACHE_DURATION
            // });

            // return article details
            return res.json(article);

        } catch (error) {
            console.error(`Error fetching article ${uuid}:`, error);
            res.status(500).json({ message: `Error fetching article ${uuid}` });
        }
    }
);


const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})