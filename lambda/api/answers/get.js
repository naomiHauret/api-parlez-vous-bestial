//
// Get all answers from DB

const app = require("./../../utils/app")
const AnswerModel = require("./../../models/Answer")

app
  .get("/api/answers", (req, res) => {
    AnswerModel.find({}).exec((err, data) => {
      if (err) {
        return res.send(500, err)
      }
      res.header("Content-Type", "application/json")
      res.send(JSON.stringify(data))
      res.end()
    })
  })
  .get("/api/answers/:to", (req, res) => {
    AnswerModel.find({
      questionUID: req.params.to,
    }).exec((err, data) => {
      if (err) {
        return res.send(500, err)
      }
      res.header("Content-Type", "application/json")
      res.send(JSON.stringify(data))
      res.end()
    })
  })
  .get("/api/answers/:to/:isAnswerYes", (req, res) => {
    const { to, isAnswerYes } = req.params
    AnswerModel.find({
      questionUID: to,
      isAnswerYes: isAnswerYes,
    }).exec((err, data) => {
      if (err) {
        return res.send(500, err)
      }
      res.header("Content-Type", "application/json")
      res.send(JSON.stringify(data))
      res.end()
    })
  })

module.exports = app
