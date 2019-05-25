//
// Post answer to question UID

const app = require("./../../utils/app")
const AnswerModel = require("./../../models/Answer")

app.get("*", (req, res) => {
  const answer = new AnswerModel({
    questionUID: req.body.uid,
    isAnswerYes: req.body.answer,
  })

  answer.save((err) => {
    if (err) return console.error(err)
    res.send(200)
  })
})

module.exports = app
