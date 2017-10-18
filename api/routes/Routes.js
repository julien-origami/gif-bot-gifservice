'use strict'
import gifService from '../controllers/GifController.js'
import paths from '../conf/Paths'

module.exports = (server) => {
    server.route({
      method: 'GET',
      path: paths.intern.getRandomGif(),
      handler: gifService.random_gif
    })
}
