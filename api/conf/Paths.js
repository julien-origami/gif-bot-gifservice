'use strict'

require('dotenv').config()

const path = process.env.BASIC_PATH
const GIPHY_TOKEN = process.env.GIPHY_TOKEN

module.exports = {
    extern: {
        giphy: {
            getRandomGif: (tag) => `https://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_TOKEN}&tag=${tag}`
        }
    },
    intern: {
        getRandomGif: () => {
            return `${path}gif/random/{tag}`
        }
    }
}
