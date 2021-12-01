import React, { useState } from "react";
import MovieCard from "./MovieCard";
import Filter from "./Filter";
import RatingFilter from "./RatingFilter";

import "./MovieList.css";

const MovieList = (props) => {
  const [movies, setMovies] = useState([
    {
      Title: "Project Power",
      Resume:
        "La rumeur commence à circuler à propos d'une pilule mystérieuse qui libère des super-pouvoirs différents selon chaque personne.",
      Poster:
        "	https://www.whywatchthat.com/wp-content/uploads/2020/08/Project-Power-Poster-202x300.png",
      Rates: 4,
    },
    {
      Title: "Harry Potter",
      Resume:
        "Harry Potter, a young orphan, is raised by his uncle and aunt who hate him. While he was as tall as three apples, they told him that his parents had died in a car accident.",
      Poster: "https://m.media-amazon.com/images/I/71bmNSxkw-L._AC_SY550_.jpg",
      Rates: 5,
    },
    {
      Title: "The Ivory Game",
      Resume:
        "Ivory is a popular symbol among middle-class Chinese, and poachers chasing white gold are slaughtering African elephants in droves.",
      Poster:
        "//upload.wikimedia.org/wikipedia/en/thumb/0/01/The_Ivory_Game_poster.jpg/220px-The_Ivory_Game_poster.jpg",
      Rates: 4,
    },
    {
      Title: "The Crown",
      Resume:
        "the film focuses on Queen Elizabeth II, then 25 years old and facing the inordinate task of leading the world's most famous monarchy while forging ",
      Poster:
        "https://fr.web.img4.acsta.net/pictures/19/10/22/14/31/2797425.jpg",
      Rates: 3,
    },
    {
      Title: "Un after Mortel",
      Resume:
        "Cassie can be found at every party, until she dies in an unlikely accident. To deserve her entry into paradise, she will have to correct her mistakes on Earth.",
      Poster:
        "https://imgr.cineserie.com/2021/08/1882894-1.jpg?imgeng=/f_jpg/cmpr_0/w_148/h_222/m_cropbox&ver=1",
      Rates: 4,
    },
    {
      Title: "Le Dernier Voyage",
      Resume:
        "In the near future, a mysterious red moon is being exploited to the limit for its energy. As it abruptly changes course and heads straight for Earth, Paul W.R, the only astronaut",
      Poster:
        "https://www.journaldugeek.com/content/uploads/2021/05/le-dernier-voyage-affiche-scaled.jpg",
      Rates: 4,
    },
  ]);

  const [search, setSearch] = useState("");
  const [Star, setStar] = useState(1);

  return (
    <div>
      <RatingFilter Star={Star} setStar={setStar} />
      <Filter>
        search={search} setSearch={setSearch}
      </Filter>

      <div className="listofMovies">
        {movies
          .filter(
            (movies) =>
              movies.Title.toUpperCase().includes(search.toUpperCase()) &&
              movies.Rates >= Star
          )
          .map((movies, i) => (
            <div>
              <MovieCard movies={movies} />
            </div>
          ))}
      </div>
    </div>
  );
};
export default MovieList;
