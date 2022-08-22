// Load and cache express module
const express = require('express');
// Generating the app
const app = express();

// When we get request from NGINX, parse the body
app.use(express.urlencoded());

// POST to /auth
app.post("/auth", function (req, res) {
    // Server only available in nginx
    // Taking the stream key from the request body
    const streamkey = req.body.key;

    // Can make database of users instead if that's your preference
    // In this example, the password is hard coded.
    // If the key and password match up, return a 200 status - Success!
    if(streamkey === "supersecret"){
        res.status(200).send();
        return;
    }

    // Rejecting the stream
    res.status(403).send();
});

app.listen(8000, function(){
    console.log("Listening on port 8000!");
});