const db = require("../models");

exports.getAll = async () => {
  try {
    const books = await db.Book.find().sort({ date: 0 });
    return books;
  } catch (error) {
    return error;
  }
};

exports.saveBook = async (authors, description, image, title, link) => {
  try {
    const newBook = await db.Book.create({
      authors,
      description,
      image,
      title,
      link
    });
    return newBook;
  } catch (error) {
    return error;
  }
};

exports.deleteById = async (id) => {
  try {
    const deletedBook = await db.Book.findById({ _id: id });
    await deletedBook.remove();
    return deletedBook;
  } catch (error) {
    return error;
  }
};
