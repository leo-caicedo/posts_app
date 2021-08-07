const { Router } = require("express");

const router = Router();
// services
const UsersServices = require("../services/users.service");
const usersServices = new UsersServices();

router.get("/", usersServices.getPosts);
router.get("/:id", usersServices.getPost);
router.post("/", usersServices.createPost);
router.put("/:id", usersServices.updatePost);
router.delete("/:id", usersServices.deletePost);

module.exports = router;
