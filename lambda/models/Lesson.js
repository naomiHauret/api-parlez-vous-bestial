//
// Lessons
// Lessons saved by Khimera users

const mongoose = require("./../utils/database")
const Schema = mongoose.Schema

const LessonSchema = new Schema(
  {
    lessonUID: {
      // Question identifier
      type: String,
      required: true,
    },
  },
  {
    collection: "lessons",
  },
)

const LessonModel = mongoose.model("LessonModel", LessonSchema)
module.exports = LessonModel
