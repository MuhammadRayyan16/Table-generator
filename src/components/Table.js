import React, { useEffect, useState } from "react";
import '../components/Table.css';


function Tablegenerator() {
    let [num, setNum] = useState('');
    let [loading, setLoading] = useState(true);
    let arrs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    
    useEffect(() => {
        load();
    }, []);

    const load = () => {
        setTimeout(() => {
            setLoading(false);
        }, 4000);
    }

    return (
        <div className="App">
            {loading ? (
                <div className="loader-container">
                    <div className="loader"></div>
                    <h2 className="h2">Loading...</h2>
                </div>
            ) : (
                <div className="table-container">
                    <h2 className="h2">Table Generator</h2>
                    <input
                        type="number"
                        className="input"
                        autoFocus
                        value={num}
                        onChange={e => setNum(e.target.value)}
                    />
                    <div className="div">
                        {num > 0 && arrs.map(arr => (
                            <p key={arr} className="p">{`${num} x ${arr} = ${num * arr}`}</p>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Tablegenerator;
