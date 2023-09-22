import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import groupRouter from './routes/routes.js'

const app = express()
app.use(bodyParser.json({ limit: '30mb', extanded: true }))
app.use(cors())

app.use('/', groupRouter)

const CONNECTION_URL =
  'mongodb+srv://sabir:LNnrcPrsOnfuTMEa@atlascluster.rimv5ng.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopoLogy: true })
  .then(e => {
    console.log('DB connected');
  })
  .catch(err => {
    console.log(err)
  })

const server = app.listen(PORT, a =>
  console.log(`Server running on port: ${PORT}`)
)

