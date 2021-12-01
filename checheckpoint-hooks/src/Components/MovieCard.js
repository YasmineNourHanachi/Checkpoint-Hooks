import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import "./MovieCard.css";

const MovieCard = (props) => {
  return (
    <div>
      <Card
        className="CardMovie"
        style={{
          width: "300px",
          backgroundColor: "Black",
        }}
      >
        <Card.Img
          src={props.movies.Poster}
          height="300px"
          className="MovieImg"
        />
        <Card.Body className="CardContainer">
          <Card.Title className="Movietitle">{props.movies.Title}</Card.Title>
          <Card.Text>
            <Rating Rates={props.movies.Rates}></Rating>
          </Card.Text>
          <Card.Text className="TextCard">{props.movies.Resume}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
