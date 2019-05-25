//
// Emotions
// Emotions saved by Khimera users

const mongoose = require("./../utils/database")
const Schema = mongoose.Schema

const EmotionSchema = new Schema(
  {
    emotionUID: {
      // Question identifier
      type: String,
      required: true,
    },
  },
  {
    collection: "emotions",
  },
)

const EmotionModel = mongoose.model("EmotionModel", EmotionSchema)
module.exports = EmotionModel
