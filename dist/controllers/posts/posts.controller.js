"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class PostsController {
    constructor() {
        this.path = '/posts';
        this.router = express.Router();
        this.posts = [
            {
                id: 1,
                author: 'Ali GOREN',
                content: 'This is an example post',
                title: 'Hello world!'
            }
        ];
        this.getPost = (req, res) => {
            const id = +req.params.id;
            let result = this.posts.find(post => post.id == id);
            if (!result) {
                res.status(404).send({
                    'error': 'Post not found!'
                });
            }
            res.render('posts/index', result);
        };
        this.getAllPosts = (req, res) => {
            res.send(this.posts);
        };
        this.createPost = (req, res) => {
            const post = req.body;
            this.posts.push(post);
            res.send(this.posts);
        };
        this.initRoutes();
    }
    initRoutes() {
        this.router.get(this.path + '/:id', this.getPost);
        this.router.get(this.path, this.getAllPosts);
        this.router.post(this.path, this.createPost);
    }
}
exports.default = PostsController;
//# sourceMappingURL=posts.controller.js.map