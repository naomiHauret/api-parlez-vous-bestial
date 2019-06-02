//
// Post taken lesson

const app = require("./../../utils/app")
const LessonModel = require("./../../models/Lesson")

app.post("/api/lesson", (req, res) => {
  const lesson = new LessonModel({
    lessonUID: req.body.uid,
  })

  lesson.save((err) => {
    if (err) return console.error(err)
    res.send(200)
  })
})

module.exports = app
