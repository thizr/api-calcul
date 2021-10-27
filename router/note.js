const express = require("express")
const router = express.Router()
const noteCTRL = require('../controllers/note')


router.post('/post-note', noteCTRL.postNote )
router.get('/get-moyenne/:id_etudiant', noteCTRL.getMoyenne)

module.exports = router