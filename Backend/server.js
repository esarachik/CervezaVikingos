var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var express = require('express')
var mongoose = require('mongoose')
var auth = require('./auth.js')
var jwt = require('jwt-simple')
var app = express()

console.log("-Iniciando Server-")

var User = require('./models/user.js')
var Post = require('./models/post.js')


mongoose.Promise = Promise

app.use(cors())
app.use(bodyParser.json())

var cervezaRoute = require('./routes/cerveza.routes')
cervezaRoute(app)

app.get('/posts/:id', async (req, res) => {
    var author = req.params.id
    var posts = await Post.find({ author })
    res.send(posts) 
})

app.post('/post', auth.checkAuthenticated, (req, res) => {
    var postData = req.body
    postData.author = req.userId
    
    var post = new Post(postData)
    post.save((err, result) => {
        if (err) {
            console.error('saving post error')
            return res.status(500).send({ message: 'saving post error' })
        }
        //res.sendStatus(200) 
        res.json({status: 200})
    })
})

app.get('/users', async (req, res) => {
    try {
        var users = await User.find({}, '-pwd -__v')
        res.send(users)
    }
    catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
})

app.get('/profile/:id', async (req, res) => {
    try {
        var user = await User.findById(req.params.id, '-pwd -__v')
        res.send(user)
    }
    catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
})

mongoose.connect(
    'mongodb://cervezavikingos:eliandy2@ds117336.mlab.com:17336/cerveza-vikingos',
    { useMongoClient: true },
    (err) => {
        if (!err)
            console.log('-Connected to mongoDB-')
    })

app.use('/auth', auth.router)

app.listen(process.env.PORT || 3000)

console.log("-Iniciado Server-")