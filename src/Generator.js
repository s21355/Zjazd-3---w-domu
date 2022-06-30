import React from 'react';

function Generator() {
    const min = 1;
    const max = 100;
    const rand = Math.round(Math.random() * (max - min));
    return (
        rand
    );
}

export default Generator;