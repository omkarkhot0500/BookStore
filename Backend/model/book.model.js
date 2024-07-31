import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    title: String,
});

//   Here we create database collection of books (mongodb will convert "Book" into books)
//   In that books collection we can import data from any .json file 

//   To create collection of books in database write below command

const Book = mongoose.model("Book", bookSchema);  

export default Book;