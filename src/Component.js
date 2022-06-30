import React, {useState} from 'react';
import Generator from "./Generator";

function Component() {
    const wygenerowana = Generator();
    const [state, setState] = useState({count: wygenerowana})
    const count = state.count;
    const szesnastka = count.toString(16)

    function Hex() {
        setState(prevState => {
            return ({...prevState, count: szesnastka})
        })
    }

    function Delete() {
        setState(prevState => {
            return ({...prevState, count: ""})
        })
    }

    return (
        <div >
            {count}<button onClick={() => Hex()}>
            <p>HEX</p> 
            </button>
            <button onClick={() =>Delete()}><p> Delete </p> </button>

        </div>
    );
}

export default Component;
