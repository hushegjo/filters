import React from 'react';

export const TextInput = function (props) {

    return (
        <div className="input-field">
          <input type="text" name={props.name} onChange={props.change} />
          <label htmlFor={props.inputID} className="active">{props.labelText}</label>
        </div>
    );
};