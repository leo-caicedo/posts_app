const { Router } = require("express");

const router = Router();
// services
const UsersServices = require("../services/users.service");
const usersServices = new UsersServices();

router.get("/", usersServices.getUsers);
router.get("/:id", usersServices.getUser);
router.post("/", usersServices.createUser);
router.put("/:id", usersServices.updateUser);
router.delete("/:id", usersServices.deleteUser);

module.exports = router;
