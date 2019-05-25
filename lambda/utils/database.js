const mongoose = require("mongoose")

const url = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PSW}@${process.env.DATABASE_REMOTE}`
mongoose.connect(url, { dbName: process.env.DATABASE_NAME, useNewUrlParser: true })
const db = mongoose.connection

module.exports = mongoose
