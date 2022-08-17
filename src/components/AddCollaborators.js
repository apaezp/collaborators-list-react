import React from "react";
import { BaseColaboradores } from "./BaseColaboradores";
import { useState } from "react";
import CollaboratorsReview from "./CollaboratorsReview";
import "./AddCollaborators.css";
import { Button } from "react-bootstrap";

const AddCollaborators = () => {
  const [collaborator, setCollaborator] = useState("[]");
  const [collaboratormail, setCollaboratorEmail] = useState("[]");

  const sendForm = (e) => {
    e.preventDefault();
    BaseColaboradores.push({
      id: BaseColaboradores.length + 1,
      nombre: collaborator,
      correo: collaboratormail,
    });
    setCollaborator("");
    setCollaboratorEmail("");
  };

  return (
    <>
      <div className="add-collaborators">
        <form onSubmit={sendForm}>
          <div className="add-collaborators-container">
            <label className="collaborator-name"> Collaborator's Name </label>
            <div className="input-name">
              <input
                type="text"
                placeholder="Enter Collaborator's Name"
                onChange={(e) => setCollaborator(e.target.value)}
              />
            </div>
            <label className="collaborator-email"> Collaborator's Email </label>
            <div className="input-mail">
              <input
                type="text"
                placeholder="Enter Collaborator's Email"
                onChange={(e) => setCollaboratorEmail(e.target.value)}
              />
            </div>
            <div className="button">
              <Button className="btn" type="submit" variant="dark"> Add </Button>
            </div>
          </div>
        </form>
      </div>
      <CollaboratorsReview />
    </>
  );
};

export default AddCollaborators;
