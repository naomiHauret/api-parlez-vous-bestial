//
// Get all answers from DB

const app = require("./../../utils/app")
const QuestionModel = require("./../../models/Question")

app.get("/api/questions", (req, res) => {
  QuestionModel.find({}).exec((err, data) => {
    if (err) {
      return res.send(500, err)
    }
    res.header("Content-Type", "application/json")
    res.send(JSON.stringify(data))
    res.end()
  })
})

module.exports = app
