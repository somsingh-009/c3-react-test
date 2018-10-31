import React from 'react';
import ReactModal from 'react-modal';
import "./UserPrompt.css";


const user_prompt = (props)=>{
    return (
        <ReactModal  className="modal" isOpen={props.showModal} contentLabel="Confirmation Modal">
            <h2 className="head">Delete User</h2>
            <hr></hr>
            <h4>{props.message}</h4>
            <button onClick={props.confirmDelete} className="confirm">Yes</button>
            <button onClick={props.closeModal} className="cancel">No</button>
        </ReactModal>
    );
};


export default user_prompt;
