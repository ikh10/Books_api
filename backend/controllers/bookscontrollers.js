const mongoose = require("mongoose");
const bookCollection = require("./../models/BookSchema");

const bookcontroller = async (req, res) => {
    try {
        const { title, id } = req.params;
        let books;
        if (title) {
            const searchtitle = title.toLowerCase();
            books = await bookCollection.find({
                title: { $regex: new RegExp(searchtitle, "i") },
            });
        }

        else if (id) {
            books = await bookCollection.find({
                _id: id,
            });
        }

        else if (req.path.includes("/random")) {
            books = await bookCollection.aggregate([
                {
                    $sample: {
                        size: 9,
                    }
                }
            ],);
        }

        else {
            books = await bookCollection.find();
        }

        if (!books || books.length === 0) {
            res.status(200).send({ message: "404 Not Found" });
        } else {
            res.status(200).send(books);
        }

        console.log("book fetched successfully");

    }

    catch (err) {
        res.status(504).send({
            message: "404 Not Found"
        });
        console.log(`Error occured :${err}`);
    };
}
module.exports = bookcontroller;