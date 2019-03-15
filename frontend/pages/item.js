import React from "react";
import SingleItem from "../components/SingleItem";

const item = ({ query }) => {
  return (
    <div>
      <SingleItem id={query.id} />
    </div>
  );
};

export default item;
