const router = require("express").Router();
const { returnSaved, saveNew, deleteBook } = require('../controllers/books.controller');


router.get("/", returnSaved);
router.post("/", saveNew);
router.delete("/:id", deleteBook);


module.exports = router;