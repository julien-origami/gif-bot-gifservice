'use-strict'
import fetch from 'node-fetch'
import Paths from '../conf/Paths'

exports.random_gif = (request, reply) => {
    const tag = request.params.tag ? encodeURIComponent(request.params.tag) : ''
    GiphyFetch(reply, tag)
}

const GiphyFetch = (reply, tag) => {
    return fetch(Paths.extern.giphy.getRandomGif(tag))
    .then(res => res.json())
    .then((json) => {
        if(json.data.image_url){
            reply({ content: json.data.image_url })
        }else{
            GiphyFetch(reply, '')
        }
    })
    .catch(err => GiphyFetch(reply, ''))
}
