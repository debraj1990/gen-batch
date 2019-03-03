var express = require('express');
var router = express.Router();

var Post = require('../model/Post')

router
  .get('/new', function (req, res, next) {
    res.render('post-form');
  })
  .get('/', function (req, res, next) {
    Post.find({})
      .then(posts => {
        res.render('posts-view', { posts })
      })
  })
  .delete('/:id', (req, res) => {
    let id = req.params.id;
    Post.remove({ _id: id })
      .then(() => {
        res.redirect('/posts')
      })
  })
  .get('/:id', (req, res) => {
    let id = req.params.id;
    Post.findOne({ _id: id })
      .then(post => {
        console.log(post);
        res.render('post-edit-form', post)
      })
  })
  .post('/', (req, res, next) => {
    let body = req.body;
    let newPost = new Post(body);
    newPost.save()
      .then(post => {
        res.redirect('/posts')
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
          .then(() => {
            res.redirect('/posts')
          })

      })
  })
  ;

module.exports = router;
