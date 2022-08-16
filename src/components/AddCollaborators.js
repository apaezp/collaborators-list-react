import React from 'react'
import { BaseColaboradores } from './BaseColaboradores';
import { useState} from 'react'
import CollaboratorsReview from './CollaboratorsReview';

const AddCollaborators = () => {
    const [collaborator, setCollaborator] = useState("[]")
    const [collaboratormail, setCollaboratorEmail] = useState("[]")

    const sendForm = (e) => {
        e.preventDefault()
        BaseColaboradores.push({
            id: BaseColaboradores.length + 1,
            nombre: collaborator,
            correo: collaboratormail
        })
        setCollaborator("")
        setCollaboratorEmail("")
    }

  return (
    <>
    <div className="add-collaborators">
        <form onSubmit={sendForm}>
        <div className="add-collaborators-container">
            <label> Collaborator's Name </label>
            <div className="input-name">
                <input type="text" placeholder="Enter Collaborator's Name" onChange={(e) => setCollaborator (e.target.value)} />
            </div>
            <label> Collaborator's Email </label>
            <div className="input-name">
                <input type="text" placeholder="Enter Collaborator's email" onChange={(e) => setCollaboratorEmail (e.target.value)} />
            </div>
            <div className="button">
                <button type="submit"> Add </button>
            </div>
        </div>
        </form>
    </div>
    <CollaboratorsReview />

    </>
  )
}

export default AddCollaborators