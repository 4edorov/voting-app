require('dotenv').config()
const express = require('express')
const debug = require('debug-levels')('server')

const app = express()

const port = process.env.PORT || 3030

app.listen(port, () => debug.info('voting-app server live on port:', port))
