//
// Questions
// Yes-no question asked to StreetCred user

const mongoose = require("./../utils/database")
const Schema = mongoose.Schema

const QuestionSchema = new Schema(
  {
    uid: {
      // Identifier
      type: String,
      required: true,
    },
    fr: {
      // French translation
      type: String,
      required: true,
    },
    en: {
      // English translation
      type: String,
      required: true,
    },
  },
  {
    collection: "questions",
  },
)

const QuestionModel = mongoose.model("QuestionModel", QuestionSchema)
module.exports = QuestionModel
