//
// Post emotion

const app = require("./../../utils/app")
const EmotionModel = require("./../../models/Emotion")

app.get("*", (req, res) => {
  const emotion = new EmotionModel({
    emotionUID: req.body.uid,
  })

  emotion.save((err) => {
    if (err) return console.error(err)
    res.send(200)
  })
})

module.exports = app
