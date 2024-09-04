require('dotenv').config();
const mongoose = require('mongoose');
const Question = require('./models/Question'); // Adjust the path as necessary

const questions = [
    {
        text: 'Do you have a biosecurity plan in place?',
        imageUrl: 'https://example.com/image1.jpg',
        correctiveMeasure: 'Implement a comprehensive biosecurity plan tailored to your operation.'
    },
    {
        text: 'Are all visitors required to follow biosecurity protocols?',
        imageUrl: 'https://example.com/image2.jpg',
        correctiveMeasure: 'Establish and enforce biosecurity protocols for all visitors.'
    },
    // Add more questions as needed
];

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log('Connected to MongoDB');
        await Question.deleteMany({});
        await Question.insertMany(questions);
        console.log(questions);
        mongoose.disconnect();
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });
