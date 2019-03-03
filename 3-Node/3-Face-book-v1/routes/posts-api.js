var express = require('express');
var router = express.Router();

var Post = require('../model/Post')
var auth = require('../helpers/auth');

router
  // .get('/new', auth.ensureAuthenticated, function (req, res, next) {
  //   res.render('post/new-form');
  // })
  .get('/', function (req, res, next) {
    Post.find({})
      .sort({ date: 'desc' })
      .then(posts => {
        res.json(posts)
      })
  })
  .delete('/:id', (req, res) => {
    let id = req.params.id;
    Post.remove({ _id: id })
      .then(() => {
        res.status(200).json({ message: 'post deleted' })
      })
  })
  .get('/:id', (req, res) => {
    let id = req.params.id;
    Post.findOne({ _id: id })
      .then(post => {
        res.json(post)
      })
  })
  .post('/', (req, res, next) => {
    let form = req.body;
    let errors = [];
    let newPost = new Post(form);
    let user = req.user;
    newPost.user = user.userName;
    newPost.save()
      .then(post => {
        res.status(201).json(post)
      })
  })
  .put('/:id', (req, res, next) => {
    let formData = req.body;
    let id = req.params.id;
    Post.findOne({ _id: id })
      .then(post => {
        post.title = formData.title;
        post.body = formData.body
        post.save()
          .then((post) => {
            res.json(post)
          })
      })
  });

module.exports = router;
