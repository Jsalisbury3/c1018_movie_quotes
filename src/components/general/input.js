import React from 'react';

export default ({input, type='text', label, size = 's12', meta: {touched, error}}) => (
    <div className = {`col input-field ${size}`}>
        <input {...input} type={type} id={input.name}/>
        <label htmlFor={input.name}>{label}</label>
        <p className="red-text text-darken-2">{touched && error}</p>
    </div>
)