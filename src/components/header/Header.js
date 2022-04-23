import React from "react";

const Header = ({ handleSerchQuery }) => {
  // console.log(handleSerchQuery("hello"));

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="fw-bold fs-5 text-white mx-auto">NOTES_TRACKER</span>

        <form
          className="d-flex"
          onSubmit={(e) => {
            e.preventDefault();
            handleSerchQuery(e.target.searchText.value);
          }}
        >
          <input
            className="form-control me-2"
            type="search"
            name="searchText"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Header;
