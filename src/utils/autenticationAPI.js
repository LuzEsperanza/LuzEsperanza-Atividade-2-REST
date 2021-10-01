require('dotenv').config();
var request = require('request');

var client_id = process.env.Client_ID;
var client_secret = process.env.Client_Secret;
var redirect_uri = process.env.Redirect_URI;

module.exports = {

  async AutenticationApi(req, res) {
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        redirect_uri: redirect_uri,
        grant_type: 'client_credentials'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
      },
      json: true
    };

    request.post(authOptions,function (error, response, body) {
      console.log(response.body)
    });
    var regex = /\s/g
    console.log('selena gomes'.replace(regex,'+'))

    return  response.body.access_token
  },


};