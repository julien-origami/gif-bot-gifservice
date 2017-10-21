'use strict'

import Hapi from 'hapi'
require('dotenv').config()
import swaggered from 'hapi-swaggered'
import swaggeredUI from 'hapi-swaggered-ui'
import vision from 'vision'
import inert from 'inert'

if (!process.env.GIPHY_TOKEN && !process.env.PATH) {
  throw 'Make sure you defined GIPHY_TOKEN and PATH in your .env file'
}

const server = new Hapi.Server()
//server.connection({ port: 4322, host: '192.168.100.1', routes: { cors: true } })
server.connection({ port: 4322, host: '192.168.43.20', routes: { cors: true } , labels: ['api'] })

server.register([
    vision,
    inert,
    {
        register: swaggered,
        options: {
            info: {
                title: 'Gif Service API',
                description: 'API documentation for Gif Service',
                version: '1.0'
            }
        }
    },
    {
        register: swaggeredUI,
        options: {
            title: 'Gif Bot Gif-Service API',
            path: '/docs',
            swaggerOptions: {}
        }
    }
], {
    select: 'api'
}, (err) => { if (err) { throw err } })

const routes = require('./api/routes/Routes')
routes(server)

server.start((err) => {
    if (err) {
        throw err
    }
    console.log('Server running at:', server.info.uri)
})
