const bookcontroller = require("../controllers/bookscontrollers");
const express = require("express");
const router = express.Router();
router.get("/", bookcontroller);
router.get("/title/:title", bookcontroller);
router.get("/id/:id", bookcontroller);
router.get("/random", bookcontroller);
module.exports = router;