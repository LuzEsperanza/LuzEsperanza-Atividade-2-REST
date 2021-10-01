const express = require('express')
const routes = express.Router()

const spotifyController = require('../controllers/spotifyController');

routes.get('/:name', spotifyController.SearchArtist);
routes.get('/recomend',spotifyController.Recomend);
routes.get('/callback',function (req,res) {
    res.send('erro')
})
module.exports = routes;