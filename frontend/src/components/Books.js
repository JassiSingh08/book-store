import React, { useEffect, useState } from "react";
import axios from "axios";
import BookList from "./BookList";
import Button from "react-bootstrap/esm/Button";

import AddBook from "./AddBook";

const Books = () => {
  const [books, setBooks] = useState([]);

  const [show, setShow] = useState(false);


  const handleShow = () => setShow(true);
  

  const getBooks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/books");
      setBooks(res.data.books);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "15px",
        }}
      >
        <h1 className="text-center">Available Books</h1>
        <Button variant="primary" onClick={handleShow} >
          Add Books
        </Button>
        <AddBook show={show} setShow={setShow}/>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {books &&
          books.map((book, i) => {
            return <BookList key={i} book={book} />;
          })}
      </div>
    </div>
  );
};

export default Books;
