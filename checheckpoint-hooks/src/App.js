import React, { useState } from "react";
import MovieList from "./Components/MovieList";

import "./App.css";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage:
          "url(" +
          "https://images.squarespace-cdn.com/content/v1/580fbaac440243d8731ffc57/1595949639442-848QDO8N264VBTC877HW/Netflix_Website+no+text.jpg?format=1000w" +
          ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1>Movieflix</h1>

      <MovieList></MovieList>
    </div>
  );
}

export default App;
