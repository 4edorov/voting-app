require('dotenv').config()
const express = require('express')
const debug = require('debug-levels')('server')
const DbConn = require('./lib/DbConn')

const app = express()

const port = process.env.PORT || 3030

async function startUp () {
  await DbConn.init()

  app.listen(port, () => debug.info('voting-app server live on port:', port))
}

startUp()

