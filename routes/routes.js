import express from 'express'
import mongoose from 'mongoose'
import schemas from './schemas/schemas.js'

const router = express.Router()

// app

router.get('/', function (req, res) {
  res.send('Server is running')
})

// User Routes

router.post('/signup_user', async function (req, res) {

  var user = req.body

  const newUser = new schemas.User(
    user
  );
  console.log(user);
  // Save the user to the database
  newUser.save()
    .then(() => {
      console.log('User saved to the database');
      res.send('User added to the database')
    })
    .catch((error) => {
      console.error('Error saving user:', error);
      res.send('Error saving user:', error)

    })
})


export default router
