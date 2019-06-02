//
// Get all lessons from DB

const app = require("./../../utils/app")
const LessonModel = require("./../../models/Lesson")

app
  .get("/api/lessons", (req, res) => {
    LessonModel.find({}).exec((err, data) => {
      if (err) {
        return res.send(500, err)
      }
      res.header("Content-Type", "application/json")
      res.send(JSON.stringify(data))
      res.end()
    })
  })
  .get("/api/lessons/:uid", (req, res) => {
    LessonModel.find({
      lessonUID: req.params.uid,
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
