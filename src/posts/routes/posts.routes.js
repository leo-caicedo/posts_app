const { Router } = require("express");

const router = Router();
// services
const PostsServices = require("../services/posts.service");
const postsServices = new PostsServices();

router.get("/", postsServices.getPosts);
router.get("/:id", postsServices.getPost);
router.post("/", postsServices.createPost);
router.put("/:id", postsServices.updatePost);
router.delete("/:id", postsServices.deletePost);

module.exports = router;
