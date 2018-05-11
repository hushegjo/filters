import React from 'react';

export const Slider = function (props) {

    return (
        <div className="range-field">
            <input type="range" min={props.min} max={props.max} step={props.step} name={props.name} onChange={props.change} />
        </div>
    );
};