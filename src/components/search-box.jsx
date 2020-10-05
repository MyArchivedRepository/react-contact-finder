import React from "react";
import "./search-box.css";

const SearchBox = ({placeholder,onChange}) => {
  const search = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <input
        type="search"
        placeholder={placeholder}
        onChange={search}
      ></input>
    </div>
  );
};

export default SearchBox;
