//
// Get all emotions from DB

const app = require("./../../utils/app")
const EmotionModel = require("./../../models/Emotion")

app.get("/api/emotions", (req, res) => {
  EmotionModel.find({}).exec((err, data) => {
    if (err) {
      return res.send(500, err)
    }
    res.header("Content-Type", "application/json")
    res.send(JSON.stringify(data))
    res.end()
  })
})

module.exports = app
