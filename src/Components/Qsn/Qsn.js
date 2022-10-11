// import React, { useState } from 'react';
import './Qsn.css';

const Qsn = ({ qsn }) => {
    const { question, options } = qsn;

    // const [select, setSelect] = useState(false);
    return (
        <div className='qsn-div'>

            <h5>{question}</h5>
            <ul >

                <li className='optn'>{options[0]}</li>
                <li className='optn'>{options[1]}</li>
                <li className='optn'>{options[2]}</li>
                <li className='optn'>{options[3]}</li>


            </ul>

        </div>
    );
};

export default Qsn;