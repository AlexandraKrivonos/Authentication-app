const express = require('express')
const controller = require('../controllers/analystic')
const router = express.Router()

router.get('/overview', controller.overview)
router.get('/analystic', controller.analytics)


module.exports = router