const express = require('express')
const router = express.Router()
const UserApi = require('./UserApi')

router.use('/api/user', UserApi)

module.exports = router
