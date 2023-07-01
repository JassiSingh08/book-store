import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

const BookList = ({ book }) => {
  return (
    <div style={{ padding: "20px" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={book.image} height={250} width={200}/>
        <Card.Body>
          <Card.Title>{book.name}</Card.Title>
          <h6 className="text-muted">Author : {book.author}</h6>
          <Card.Text>Description : {book.description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Price : {book.price}</ListGroup.Item>
          <ListGroup.Item>
            Available : {book.available ? "Yes" : "No"}
          </ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Link to="/view">View Book</Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BookList;
