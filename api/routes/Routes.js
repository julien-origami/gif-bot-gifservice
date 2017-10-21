'use strict'
import gifService from '../controllers/GifController.js'
import paths from '../conf/Paths'
import Joi from 'joi'

module.exports = (server) => {
    server.route({
        method: 'GET',
        path: paths.intern.getRandomGif(),
        config: {
            tags: ['api'],
            validate: {
                params: {
                    tag: Joi.string().description('tag')
                }
            },
            handler: gifService.random_gif
        }
    })
}
