const express = require('express')
const router = express.Router()
const hitlistController = require('../controllers/hitlist') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, hitlistController.getTodos)

router.post('/createTodo', hitlistController.createTodo)

router.put('/markComplete', hitlistController.markComplete)

router.delete('/deleteTodo', hitlistController.deleteTodo)




module.exports = router