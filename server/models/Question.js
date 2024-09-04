const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  Questions: {
    type: String,
    required: true,
  },
  CorrectiveMeasure: {
    type: String,
    required: true,
  }
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;


