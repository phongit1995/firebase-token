const {JWT} = require('google-auth-library');
function getAccessToken(clientEmail,privateKey) {
    return new Promise(function(resolve, reject) {
      const jwtClient = new JWT(
        clientEmail,
        null,
        privateKey,
        ['https://www.googleapis.com/auth/firebase.messaging'],
        null
      );
      jwtClient.authorize(function(err, tokens) {
        if (err) {
          reject(err);
          return;
        }
        resolve(tokens.access_token);
      });
    });
  }
  module.exports = {
    getAccessToken
  }