const express = require('express');
const app = express();
require('dotenv').config();


const githubData = [{
    name: 'Rahul',
    age: 22
},
{
    name: 'Rohit',
    age: 23
},
{
    name: 'Raj',
    age: 24
}
]




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
app.get('/github', (req, res) => {
    res.json(githubData);
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})