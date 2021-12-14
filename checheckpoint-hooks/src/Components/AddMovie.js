import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "./AddMovie.css";

const AddMovie = ({ movies, setMovies }) => {
  const [show, setShow] = useState(false);
  const [newMovie, setNewMovie] = useState({
    Title: "",
    Rate: 1,
    Poster: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const AddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    handleClose();
    setNewMovie({
      Title: "",
      Rate: 1,
      Poster: "",
    });
  };

  return (
    <>
      <button onClick={handleShow} className="addBtn">
        Add Movie
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            className="modalInput"
            name="title"
            onChange={handleChange}
            placeholder="Enter Movie Title ..."
          />
          <Form.Control
            type="number"
            className="modalInput"
            name="Rate"
            value={newMovie.Rate}
            onChange={handleChange}
            placeholder="Enter Movie Rating ..."
            min="1"
            max="5"
          />
          <Form.Control
            type="text"
            className="modalInput"
            name="poster"
            onChange={handleChange}
            placeholder="Enter Poster URL ..."
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() =>
              AddMovie({
                Title: newMovie.Title,
                Resume: "",
                Poster: newMovie.Poster,
                Rates: newMovie.Rate,
              })
            }
          >
            ADD Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default AddMovie;
