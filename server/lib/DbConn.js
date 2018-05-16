const MongoClient = require('mongodb')
const debug = require('debug-levels')('dbConn')

const env = process.env.NODE_ENV

const getMongoUri = () => {
  if (env === 'development') {
    return 'mongodb://localhost:27017'
  }
  if (env === 'production') {
    return `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds245218.mlab.com:45218/${process.env.DB_NAME}`
  }
}

const DbConn = {
  connection: null,
  mongoUri: getMongoUri(),
  init: async () => {
    if (DbConn.connection) {
      debug.info('DbConn.connection exists')
      return DbConn.connection
    }

    const dataBase = await MongoClient.connect(DbConn.mongoUri)
    DbConn.connection = dataBase.db(process.env.DB_NAME)
    debug.info('DbConn.init')
  },
  getColl: coll => {
    return DbConn.connection.collection(coll)
  }
}

module.exports = DbConn
