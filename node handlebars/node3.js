const express = require('express');
const { engine } = require('express-handlebars');
const axios = require('axios');

const app = express();
const port = 3000;

const apiKey = '3b96ace51c2a439eaa2a75649866a31a';
const apiUrl = 'http://newsapi.org/v2/top-headlines';
const q = 'tech'; // Change this to your desired country code
const pageSize = 5;   // Number of news articles to fetch

const requestOptions = {
    params: {
        q,
        pageSize,
        apiKey,
    }
};

// Configure Handlebars as the view engine
app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
// Route to fetch news and render it using Handlebars
app.get('/', (req, res) => {
    axios.get(apiUrl, requestOptions)
        .then(response => {
            const articles = response.data.articles;
            res.render('news', { articles, title: 'Aaj ki Taza Khabar' });
        })
        .catch(error => {
            console.error('Error fetching news:', error.message);
            res.render('error', { title: 'Error' });
        });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});