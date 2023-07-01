import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

const AddBook = ({ show, setShow}) => {
 

  const handleClose = () => setShow(false);
  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Add a Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name of the Book :</Form.Label>
            <Form.Control type="text" name="name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Author's Name :</Form.Label>
            <Form.Control type="text" name="author" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description :</Form.Label>
            <Form.Control as="textarea" rows={1} name="description"/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price :</Form.Label>
            <Form.Control type="number" name="price" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image Link :</Form.Label>
            <Form.Control type="text" name="image"/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Is This Book currently Available? :</Form.Label>
            <Form.Select aria-label="Default select example" name="available">
              <option value="1">Yes</option>
              <option value="2">No</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Add Book
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddBook;
