const express = require('express');
global.fetch = require('node-fetch');
const os = require('os');
const bodyParser = require('body-parser');
const app = express();
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');

const config = require('./config.json');

const poolData = {
  UserPoolId: config.cognito.userPoolId,
  ClientId: config.cognito.clientID
}
const userPool  = new AmazonCognitoIdentity.CognitoUserPool(poolData);

app.use(express.static('dist'));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/signup', (req,res) => {
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirm_password;
  const username = req.body.userName;
  const name = req.body.name

  let attributeList = [];
  if( password !== confirmPassword) {
    res.redirect('/signup?error=passwords');
  }

  const emailData = {
    Name: 'email',
    Value: email,
  }

  const nameData = {
    Name : 'name',
    Value: name
};

  const nameAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(nameData);
  const emailAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(emailData);
  attributeList.push(emailAttribute);
  attributeList.push(nameAttribute);


    userPool.signUp(username, password, attributeList, null, (err,data) => {
     if (err) { 
      return console.log(err);
     }
     res.send(data.user)
   });

});



app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.get('/api', (req,res) => {
    res.json({'data': [
        {
        "id": "1",
        "name": "ReactJs",
        "image": "https://anthonytalent-assets.s3-us-west-2.amazonaws.com/linkedin.png",
        "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ullamcorper elementum nibh ut ultrices. Suspendisse vehicula massa eget urna iaculis, eu condimentum sapien fermentum.",
        "link": "https://www.telescope.tv",
        "link_text": "Visit Website"
        },
        {
        "id": "2",
        "name": "Javascript",
        "image": "https://anthonytalent-assets.s3-us-west-2.amazonaws.com/linkedin.png",
        "bio": "Vestibulum sem neque, pretium nec justo sit amet.",
        "link": "https://www.google.com",
        "link_text": "Visit Website"
        },
        {
        "id": "3",
        "name": "Full Stack JS development",
        "image": "https://anthonytalent-assets.s3-us-west-2.amazonaws.com/linkedin.png",
        "bio": "Etiam tempor molestie purus, a sagittis diam congue sed. Mauris pulvinar massa eget orci ultrices, a viverra dolor scelerisque.",
        "link": "https://www.facebook.com",
        "link_text": "Visit Website"
        },
        {
        "id": "4",
        "name": "NodeJS",
        "image": "https://anthonytalent-assets.s3-us-west-2.amazonaws.com/linkedin.png",
        "bio": "Etiam tempor molestie purus, a sagittis diam congue sed. Mauris pulvinar massa eget orci ultrices, a viverra dolor scelerisque.",
        "link": "https://www.facebook.com",
        "link_text": "Visit Website"
        },
        {
        "id": "5",
        "name": "BackBoneJS",
        "image": "https://anthonytalent-assets.s3-us-west-2.amazonaws.com/linkedin.png",
        "bio": "Etiam tempor molestie purus, a sagittis diam congue sed. Mauris pulvinar massa eget orci ultrices, a viverra dolor scelerisque.",
        "link": "https://www.facebook.com",
        "link_text": "Visit Website"
        },
        {
        "id": "6",
        "name": "Angular",
        "image": "https://anthonytalent-assets.s3-us-west-2.amazonaws.com/linkedin.png",
        "bio": "Etiam tempor molestie purus, a sagittis diam congue sed. Mauris pulvinar massa eget orci ultrices, a viverra dolor scelerisque.",
        "link": "https://www.facebook.com",
        "link_text": "Visit Website"
        },
        {
        "id": "7",
        "name": "MongoDB",
        "image": "https://anthonytalent-assets.s3-us-west-2.amazonaws.com/linkedin.png",
        "bio": "Etiam tempor molestie purus, a sagittis diam congue sed. Mauris pulvinar massa eget orci ultrices, a viverra dolor scelerisque.",
        "link": "https://www.facebook.com",
        "link_text": "Visit Website"
        },
        {
        "id": "8",
        "name": "CSS/Sass",
        "image": "https://anthonytalent-assets.s3-us-west-2.amazonaws.com/linkedin.png",
        "bio": "Etiam tempor molestie purus, a sagittis diam congue sed. Mauris pulvinar massa eget orci ultrices, a viverra dolor scelerisque.",
        "link": "https://www.facebook.com",
        "link_text": "Visit Website"
        },
        {
        "id": "9",
        "name": "Years of IT experience professionally",
        "image": "https://anthonytalent-assets.s3-us-west-2.amazonaws.com/linkedin.png",
        "bio": "Etiam tempor molestie purus, a sagittis diam congue sed. Mauris pulvinar massa eget orci ultrices, a viverra dolor scelerisque.",
        "link": "https://www.facebook.com",
        "link_text": "Visit Website"
        },
        {
        "id": "10",
        "name": "clean and effiecent readable code",
        "image": "https://anthonytalent-assets.s3-us-west-2.amazonaws.com/linkedin.png",
        "bio": "Etiam tempor molestie purus, a sagittis diam congue sed. Mauris pulvinar massa eget orci ultrices, a viverra dolor scelerisque.",
        "link": "https://www.facebook.com",
        "link_text": "Visit Website"
        },
        {
        "id": "11",
        "name": "Working on large scale applications in a prompt and efficent manner",
        "image": "https://anthonytalent-assets.s3-us-west-2.amazonaws.com/linkedin.png",
        "bio": "Etiam tempor molestie purus, a sagittis diam congue sed. Mauris pulvinar massa eget orci ultrices, a viverra dolor scelerisque.",
        "link": "https://www.facebook.com",
        "link_text": "Visit Website"
        },
        {
        "id": "12",
        "name": "All around nice person",
        "image": "https://anthonytalent-assets.s3-us-west-2.amazonaws.com/linkedin.png",
        "bio": "Etiam tempor molestie purus, a sagittis diam congue sed. Mauris pulvinar massa eget orci ultrices, a viverra dolor scelerisque.",
        "link": "https://www.facebook.com",
        "link_text": "Visit Website"
        }
        ]})
})

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

