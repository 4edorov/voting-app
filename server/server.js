require('dotenv').config()
const express = require('express')
const debug = require('debug-levels')('server')
const DbConn = require('./lib/DbConn')
const routes = require('./routes')

const app = express()

app.use('/', routes)

const port = process.env.PORT || 3030

async function startUp () {
  await DbConn.init()

  app.listen(port, () => debug.info('voting-app server live on port:', port))
}

startUp()

