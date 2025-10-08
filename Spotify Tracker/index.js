const express = require('express');

const app = express();

app.get('/', (req, res) => {
    var client_id = 'bc911d40297f45e1a4b689d257a99929';
    var redirect_uri = 'http://localhost:8888/callback';
    
    var app = express();
    
    app.get('/login', function(req, res) {
    
      var state = generateRandomString(16);
      var scope = 'user-read-private user-read-email';
    
      res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
          response_type: 'code',
          client_id: client_id,
          scope: scope,
          redirect_uri: redirect_uri,
          state: state
        }));
    });
    console.log(res.redirect)
})

const port = 8888;
app.listen(port, () => {
    console.log(`Express connection succesful at https://localhost:${port}`)
});
