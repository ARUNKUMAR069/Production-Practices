import express from 'express';
const app = express();
const port = 3000;
import cors from 'cors';


//  CORS POLICY
app.use(cors());
app.get('/api/jokes', (req, res) => {
    const jokes = [
        { id: 1, title: "Science Joke", content: "Why don't scientists trust atoms? Because they make up everything!" },
        { id: 2, title: "Scarecrow Joke", content: "Why did the scarecrow win an award? Because he was outstanding in his field!" },
        { id: 3, title: "Skeleton Joke", content: "Why don't skeletons fight each other? They don't have the guts." }
    ];
    res.json(jokes);
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});