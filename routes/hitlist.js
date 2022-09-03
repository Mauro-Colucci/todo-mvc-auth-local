const express = require('express')
const router = express.Router()
const hitlistController = require('../controllers/hitlist') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, hitlistController.getEntries)

router.post('/addEntry', hitlistController.postEntry)

router.put('/updateEntry/:id', hitlistController.putEntry)

router.delete('/deleteEntry/:id', hitlistController.deleteEntry)




module.exports = router