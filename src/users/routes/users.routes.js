const { Router } = require("express");

const router = Router();
// services
const UsersServices = require("../services/users.service");
const usersServices = new UsersServices();
const AuthServices = require("../services/auth.service");
const authServices = new AuthServices();

// auth
router.post("/login", authServices.login);

router.get("/", usersServices.getUsers);
router.get("/:id", usersServices.getUser);
router.post("/", usersServices.createUser);
router.put("/:id", usersServices.updateUser);
router.delete("/:id", usersServices.deleteUser);

module.exports = router;
