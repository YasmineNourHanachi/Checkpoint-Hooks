import React from "react";
import { Rate } from "antd";

const RatingFilter = ({ Star, setStar }) => {
  const handleChange = (Star) => {
    setStar(Star);
  };
  return (
    <div>
      <span>
        <Rate onChange={handleChange} value={Star} />
        {Star ? <span className="ant-rate-text">{[Star - 1]}</span> : ""}
      </span>
    </div>
  );
};

export default RatingFilter;
