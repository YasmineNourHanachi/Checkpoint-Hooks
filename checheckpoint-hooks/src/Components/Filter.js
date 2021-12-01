import React, { useState } from "react";

import "./Filter.css";

const Filter = ({ setSearch, Search }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      {
        <div className="search">
          <input
            type="text"
            placeholder="Search Movies ..."
            value={Search}
            onChange={handleChange}
          ></input>
        </div>
      }
    </div>
  );
};

export default Filter;
