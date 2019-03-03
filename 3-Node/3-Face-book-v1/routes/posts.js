var express = require('express');
var router = express.Router();

var Post = require('../model/Post')
var auth = require('../helpers/auth');

router
  .get('/new', auth.ensureAuthenticated, function (req, res, next) {
    res.render('post/new-form');
  })
  .get('/', auth.ensureAuthenticated, function (req, res, next) {
    let user = req.user;

    Post.find({ user: user.userName })
      .sort({ date: 'desc' })
      .then(posts => {
        res.render('post/view', { posts })
      })
  })
  .delete('/:id', (req, res) => {
    let id = req.params.id;
    Post.remove({ _id: id })
      .then(() => {
        req.flash('success_msg', 'post deleted');
        res.redirect('/posts')
      })
  })
  .get('/:id', (req, res) => {
    let id = req.params.id;
    Post.findOne({ _id: id })
      .then(post => {
        console.log(post);
        res.render('post/edit-form', post)
      })
  })
  .post('/', auth.ensureAuthenticated, (req, res, next) => {
    let form = req.body;
    let errors = [];
    if (form.title === "") {
      errors.push({ message: 'title is required' })
    }
    if (form.body === "") {
      errors.push({ message: 'body is required' })
    }
    if (errors.length > 0) {
      res.render('post/new-form', { errors, title: form.title, body: form.body })
    } else {
      let newPost = new Post(form);

      let user = req.user;
      newPost.user = user.userName;

      newPost.save()
        .then(post => {
          req.flash('success_msg', 'New post saved');
          res.redirect('/posts')
        })
    }
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
            req.flash('success_msg', 'post updated');
            res.redirect('/posts')
          })
      })
  });

module.exports = router;
