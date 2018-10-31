import React from 'react';
import "./User.css"

const user = (props)=>{
    const user_info = props.user;
    return(
        <div className="user">
            <img className="avatar" src={user_info.avatar} alt="avatar"></img>
            <p className="user-name">{user_info.first_name+ " "+ user_info.last_name}</p>
            <span className="delete" onClick ={props.openDeleteModal}> Delete</span>
        </div>);
};

export default user;