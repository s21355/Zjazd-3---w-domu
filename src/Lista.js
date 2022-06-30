import React from 'react';

import Component from "./Component";


function Lista() {
    const numbers = [];

    for (let i = 0; i < 10; i++) {
        numbers[i]=<Component/>;
    }

    return (
        <div>
            <button className="btn" onClick={() => window.location.reload()}><p> Nowa Lista </p> </button>
            <br></br>
            <a>{numbers}</a>
            
        </div>
    )
}
export default Lista;