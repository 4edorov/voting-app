const express = require('express')
const router = express.Router()
const debug = require('debug-levels')('UserApi')

const UserApi = {
  async signUp (req, res) {
    debug.debug('router test')
  }
}

router.get('/sign-up', UserApi.signUp)

module.exports = router
