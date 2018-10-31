import React from 'react';
import "./Loader.css";

const loader = (props)=>{
    let loadedValue = null;

    if(props.loading){
        loadedValue = (
            <div className="loader-background">
                <div className="loader"> </div>
            </div>
        );
    }

    return loadedValue;
};

export default loader;


