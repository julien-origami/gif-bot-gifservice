'use-strict'

const fetch = require('node-fetch');
const Paths = require('../conf/Paths');

exports.random_gif = function (request, reply) {
    const tag = request.params.name ? encodeURIComponent(request.params.name) : '';
    GiphyFetch(reply, tag);
}

function GiphyFetch(reply, tag){
    return fetch(Paths.extern.giphy.getRandomGif(tag))
    .then(res => res.json())
    .then((json) => {
        if(json.data.image_url){
            reply(json.data.image_url);
        }else{
            GiphyFetch(reply, '');
        }
    })
    .catch(function(err) {
        GiphyFetch(reply, '');
    });
}
