import React from "react";
import { BaseColaboradores } from "./BaseColaboradores";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

const SearchCard = () => {
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleSearch = (e) => {
    e.preventDefault();
    handleShow();
    setSearchResults(
      BaseColaboradores.filter((collaborator) =>
        collaborator.nombre.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  return (
    <>
      <div className="search-card-container">
        <div className="input-name">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="button">
          <button onClick={handleSearch}>
            {" "}
            <i className="fa-solid fa-magnifying-glass"></i>{" "}
          </button>
        </div>
      {searchResults.map((collaborator) => (
        <Modal show={show} key={collaborator.id} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{collaborator.nombre}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{collaborator.correo}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      ))}
        
      </div>      
    </>
  );
};

export default SearchCard;
