const express = require("express");
const router = express.Router();
const Book = require("../Model/BookSchema");

router.get("/", async(req , res) => {
    try {
        let books = await Book.find()
        if(!books){
            return res.status(404).json("NO BOOKS FOUND")
        }
        return res.status(200).json({books})
    } catch (error) {
        console.log(error)
    }
})

router.post("/", async(req, res)=>{
    try {
       const {name, description , author, price, available, image } = req.body;
        let Books = new Book({
            name, description, author, price, available, image
        })
        await Books.save()
        if(!Books){
            return res.status(400).json({message: "Error in adding Book"})
        }
        return res.status(200).json({message: "New Book Added Successfully", Books})
    } catch (error) {
        console.log(error)
    }
})

router.put("/:id", async(req, res)=>{
    try {
        const {name, description , author, price, available, image } = req.body;
    
        let book = await Book.findByIdAndUpdate(req.params.id, {
            name, description, author, price, available, image
        })
        if(!book){
            return res.status(500).json({message: "Server error"})
        }
        return res.status(200).json({message:"Book Updated SuccessFully", book})
    } catch (error) {
        console.log(error)
    }
})

router.delete("/:id", async(req, res)=>{
    try {
        let book = await Book.findByIdAndDelete(req.params.id)
        if(!book){
            return res.status(500).json({message: "Server error"})
        }
        return res.status(200).json({message:"Book Deleted SuccessFully"})
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;