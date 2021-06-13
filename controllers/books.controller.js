const BookService = require("../services/books.service");

exports.returnSaved = async (req, res, next) => {
    try {
        const booksDB = await BookService.getAll();

        res.status(200).json(booksDB);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.saveNew = async (req, res, next) => {
    const { authors, description, image, title, link } = req.body;
    try {
        const newBook = await BookService.saveBook(authors, description, image, title, link);

        res.status(200).json(newBook)
    } catch (error) {
        res.status(400).json(error);
    }
};

exports.deleteBook = async (req, res, next) => {
    const id = req.params.id;
    try {
        const deletedBook = await BookService.deleteById(id);

        res.status(200).json(deletedBook);
    } catch (error) {
        res.status(404).json(error);
    }
};