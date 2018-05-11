import React from 'react';

export const Checkbox = function (props) {

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    className="filled-in"
                    name={props.name}
                    onChange={props.change} />
                <span>{props.label}</span>
            </label>
        </div>
    );
};