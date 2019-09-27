const express = require('express');
const os = require('os');

const app = express();

app.use(express.static('dist'));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.get('/api', (req,res) => {
    res.json({'data': [
        {
        "id": "1",
        "name": "Contestant #1",
        "image": "https://ts-cms-test.votenow.tv/campaign/10/06/1006976/15373176775ba19b2d42df59.58363769.jpg",
        "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ullamcorper elementum nibh ut ultrices. Suspendisse vehicula massa eget urna iaculis, eu condimentum sapien fermentum.",
        "link": "https://www.telescope.tv",
        "link_text": "Visit Website"
        },
        {
        "id": "2",
        "name": "Second Challenger",
        "image": "https://ts-cms-test.votenow.tv/campaign/10/06/1006976/15373176815ba19b315b9387.22030551.jpg",
        "bio": "Vestibulum sem neque, pretium nec justo sit amet.",
        "link": "https://www.google.com",
        "link_text": "Visit Website"
        },
        {
        "id": "3",
        "name": "The Third Contestant",
        "image": "https://ts-cms-test.votenow.tv/campaign/10/06/1006976/15373176555ba19b173f4629.26209684.jpg",
        "bio": "Etiam tempor molestie purus, a sagittis diam congue sed. Mauris pulvinar massa eget orci ultrices, a viverra dolor scelerisque.",
        "link": "https://www.facebook.com",
        "link_text": "Visit Website"
        },
        {
            "id": "4",
            "name": "The Third Contestant",
            "image": "https://ts-cms-test.votenow.tv/campaign/10/06/1006976/15373176555ba19b173f4629.26209684.jpg",
            "bio": "Etiam tempor molestie purus, a sagittis diam congue sed. Mauris pulvinar massa eget orci ultrices, a viverra dolor scelerisque.",
            "link": "https://www.facebook.com",
            "link_text": "Visit Website"
        },
        {
            "id": "5",
            "name": "The Third Contestant",
            "image": "https://ts-cms-test.votenow.tv/campaign/10/06/1006976/15373176555ba19b173f4629.26209684.jpg",
            "bio": "Etiam tempor molestie purus, a sagittis diam congue sed. Mauris pulvinar massa eget orci ultrices, a viverra dolor scelerisque.",
            "link": "https://www.facebook.com",
            "link_text": "Visit Website"
        },
        {
            "id": "6",
            "name": "The Third Contestant",
            "image": "https://ts-cms-test.votenow.tv/campaign/10/06/1006976/15373176555ba19b173f4629.26209684.jpg",
            "bio": "Etiam tempor molestie purus, a sagittis diam congue sed. Mauris pulvinar massa eget orci ultrices, a viverra dolor scelerisque.",
            "link": "https://www.facebook.com",
            "link_text": "Visit Website"
        }
        ]})
})

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

