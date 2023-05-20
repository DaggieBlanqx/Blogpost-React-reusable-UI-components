// ./components/SearchBar.jsx
import React from "react";

const SearchBar = (props) => {
    const handleSearch = (event) => {
        const searchTerm = event.target.value;
        props?.onSearch(searchTerm);
    };

    return (
        <input
            type="text"
            placeholder={props?.placeHolder || "Enter your search terms..."}
            onChange={handleSearch}
        />
    );
};

export default SearchBar;
