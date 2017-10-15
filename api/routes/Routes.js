'use strict';

module.exports = function(server) {
    const gifService = require('../controllers/GifController.js');
    const paths = require('../conf/Paths');
    console.log(paths.intern.getRandomGif());
    server.route({
      method: 'GET',
      path: paths.intern.getRandomGif(),
      handler: gifService.random_gif
    });
};
