// ./components/SearchBar.jsx

const searchBarStyle = {
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  color: '#333',
  backgroundColor: '#fff',
  width: '250px'
};

const SearchBar = (props) => {
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    props?.onSearch(searchTerm);
  };

  return ( 
      <input
        type="search"
        placeholder={props?.placeHolder || "Enter your search terms..."}
        onChange={handleSearch}
        style={searchBarStyle}
      /> 
  );
};

export default SearchBar;