'use strict'

import Hapi from 'hapi'
require('dotenv').config()

if (!process.env.GIPHY_TOKEN && !process.env.PATH) {
  throw 'Make sure you defined GIPHY_TOKEN and PATH in your .env file'
}

const server = new Hapi.Server()
server.connection({ port: 4322, host: '192.168.100.1', routes: { cors: true } })
//server.connection({ port: 4322, host: '192.168.43.20', routes: { cors: true } })

const routes = require('./api/routes/Routes')
routes(server)

server.start((err) => {
    if (err) {
        throw err
    }
    console.log('Server running at:', server.info.uri)
})
