const express = require('express');
const { connectToDb, getDb } = require('./db')

//init app and middleware
const app = express();

//db connection

let db
connectToDb((err) => {
    if(!err) {
        app.listen(3000, () => {
            console.log('app listening to port 3000')
    })
    db = getDb()
    }
})

//routes
app.get('/books', (req, res) => {
let books = []

    db.collection('books')
        .find() //cursor toArray forEach
        .sort({author: 1})
        .forEach(element => books.push(book))
        .then(()=> {
            res.status(200).json(books)
        })
        .catch(() => {
            res.status(500).json({error: 'Could not feth the documents'})
        })

    res.json({mssg: "welcome to the api"})
})