import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

const AddBook = ({ show, setShow, setBooks }) => {
  const [bookData, setBookData] = useState({
    name: "",
    author: "",
    description: "",
    price: 0,
    available: true,
    image: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await axios.post("http://localhost:5000/books" , bookData)
    setBooks(res.data.books);
    console.log(bookData);
    window.location.reload()
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setBookData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };
  const handleClose = () => setShow(false);
  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Add a Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name of the Book:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={bookData.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formAuthor">
            <Form.Label>Author's Name:</Form.Label>
            <Form.Control
              type="text"
              name="author"
              value={bookData.author}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formDescription">
            <Form.Label>Description:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={bookData.description}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formPrice">
            <Form.Label>Price:</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={bookData.price}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formAvailable">
            <Form.Check
              type="checkbox"
              label="Is This Book currently Available?"
              name="available"
              checked={bookData.available}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formImage">
            <Form.Label>Image Link:</Form.Label>
            <Form.Control
              type="text"
              name="image"
              value={bookData.image}
              onChange={handleChange}
            />
          </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
            Add Book
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddBook;
