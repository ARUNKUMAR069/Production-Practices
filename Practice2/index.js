const express = require('express');
const app = express();
require('dotenv').config();


app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/twitter', (req, res) => {
    res.send('Twitter');
})
app.get('/login', (req, res) => {
    res.send('<h1>Hello World</h1>');
})
app.get('/youtube', (req, res) => {
    res.send('<h1>Chai aur code</h1>');
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${port}`);
})