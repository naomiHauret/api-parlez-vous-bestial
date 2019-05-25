//
// Answers
// Answers are response to questions

// Questions can be found in /static/questions.json

const mongoose = require("./../utils/database")
const Schema = mongoose.Schema

const AnswerSchema = new Schema(
  {
    questionUID: {
      // Question identifier
      type: String,
      required: true,
    },
    isAnswerYes: {
      type: Boolean, // Is answer yes (yes = true ; no = false)
      required: true,
    },
  },
  {
    collection: "answers",
  },
)

const AnswerModel = mongoose.model("AnswerModel", AnswerSchema)
module.exports = AnswerModel
