const { Router } = require("express");
const router = Router();

router.get("/", (req, res, next) => {
  res.json({
    message: "Yours Posts",
  });
});

module.exports = router;
