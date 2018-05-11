import React from 'react';

export const SearchField = function (props) {

    const styleWrapper = {
        position: 'relative',
    };

    const styleInput = {
        color: '#777',
        display: 'block',
        fontSize: '16px',
        backgroundColor: '#fff',
        fontWeight: '300',
        width: '100%',
        height: '52px',
        margin: '0',
        boxSizing: 'border-box',
        padding: '0 45px 0 30px',
        border: '0'
    };

    const styleIcon = {
        position: 'absolute',
        top: '10px',
        right: '10px',
        fontSize: '32px',
        color: '#999',
        cursor: 'pointer'
    };

    return (
        <div style={styleWrapper}>
            <form onSubmit={props.submit}>
                <input placeholder="Search items..." type="text" name="search" style={styleInput} onChange={props.change} />
                <i className="material-icons" style={styleIcon} onClick={props.submit}>search</i>
            </form>
        </div>
    );
};