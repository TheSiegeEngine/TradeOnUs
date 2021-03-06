import React from 'react';

let box = {
    // backgroundColor: '#DC5E04',
    color: 'white',
    fontSize: '1.3rem',
    textAlign: 'center',
    borderRadius: '4px',
    width: '80%',
    margin: '.5em auto',
    padding: '.6em 0'
}

let FormAlert = ({success, msg}) => {
    box = {
        ...box,
        backgroundColor: success ? '#229922' : '#DC5E04'
    }

    return (
        <div style={box}>
            <span>{msg}</span>
        </div>
    )
}
export default FormAlert;