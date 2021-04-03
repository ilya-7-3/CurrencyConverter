import React from 'react';
import './error.css';
import imgError from '../error/error.png';

const OnError = () => {
    return(
        
        <div className="error">     
        <img src={imgError} alt="Error img"/>
            <div>BOOM</div>
            <div>Sorry, there was some mistake...</div>
            <div ><span>(but we will try to fix this error as soon as possible)</span></div>
        
        </div>
    )
}

export default OnError;