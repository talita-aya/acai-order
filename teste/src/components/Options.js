import React from "react";

const Options = ({list}) => {

  return (
    <div className="button" key={list._id}>
      <button>{list.name}</button>
    </div>
  );
};

export default Options;
