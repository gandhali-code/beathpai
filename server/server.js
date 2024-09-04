
// import path from 'path';
// import { fileURLToPath } from 'url';


const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const { fileURLToPath } = require('url');


// const __filename = fileURLToPath(import.meta.url)
// const __filename = fileURLToPath(require.resolve(__filename));
// const __dirname = path.dirname(__filename)

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const cors = require('cors');
app.use(cors());  // Enable CORS for all routes



mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

const questionSchema = new mongoose.Schema({
    id: String,
    Questions: String,
    CorrectiveMeasure: String,
});

const Question = mongoose.model('Question', questionSchema);

app.use(express.static('public'));

app.get('/api/questions', async (req, res) => {
    try {
        // Fetch questions and sort them by the 'id' field in ascending order
        const questions = await Question.find().sort({ id: 1 });
        res.json(questions);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});



app.use(express.static(path.join(__dirname,'/client/dist')))
app.get('*', (req, res) => 
    res.sendFile(path.join(__dirname,'/client/dist/index.html'))
);



app.use(express.static(path.join(__dirname,'/client/dist')))
app.get('*', (req, res) => 
    res.sendFile(path.join(__dirname,'/client/dist/index.html'))
);
