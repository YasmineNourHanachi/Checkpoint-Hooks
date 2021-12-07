import React, { useState } from "react";
import { Rate } from "antd";

const Rating = ({ Rates }) => {
  const [Star, setStar] = useState(3);

  const handleChange = (Rates) => {
    setStar({ Rates });
  };

  return (
    <span>
      <Rate disabled value={Rates} />
      {Rates ? <span>{[Rates]}</span> : ""}
    </span>
  );
};
export default Rating;
