import React from "react";
import { BaseColaboradores } from "./BaseColaboradores";
import "./CollaboratorsReview.css";

function CollaboratorsReview() {
  return (
    <>
      <div className="collaborators-review">
        <div className="collaborators-review-container">
          <div className="title-name"> Collaborators' List </div>
          {BaseColaboradores.map((collaborator) => (
            <div className="collaborators-list" key={collaborator.id}>
              <h4 className="collaborators-list-name">
                {collaborator.nombre} - {collaborator.correo}{" "}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CollaboratorsReview;
