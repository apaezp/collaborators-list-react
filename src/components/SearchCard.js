import React from "react";
import { BaseColaboradores } from "./BaseColaboradores";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import profile from "./assets/img/profile.jpeg";
import "./SearchCard.css";

const SearchCard = () => {
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleSearch = (e) => {
    e.preventDefault();
    handleShow();         
   
    
    if (search === "") {
    alert("Please enter a name");
    handleClose();    
  } else if (search.length === 0) {
     alert("No results found");
    handleClose();
  } else {
     setSearchResults(BaseColaboradores.filter((collaborator) =>
        collaborator.nombre.toLowerCase().includes(search.toLowerCase())));       
  }; 
    setSearch("")
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
          <img src={profile} alt="profilepic" className="img-fluid"/>
            <Modal.Title className="collaborator-name-modal">{collaborator.nombre}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="collaborator-email-modal">{collaborator.correo}</Modal.Body>
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
