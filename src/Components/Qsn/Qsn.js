// import React, { useState } from 'react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Qsn.css';

const Qsn = ({ qsn }) => {
    const { question, options, correctAnswer } = qsn;


    const notify = () => toast(`${correctAnswer}`);



    // {

    //     if (`${correctAnswer}` === (`${options}`)) {

    //         toast("right");
    //     }
    //     else {
    //         toast("wrong");
    //     }


    // }


    // const [select, setSelect] = useState(false);
    return (
        <div className='qsn-div'>

            <h5>{question}</h5>
            <ul >

                <button className='toaster optn'>{options[0]}</button><ToastContainer />
                <button className='toaster optn' >{options[1]}</button><ToastContainer />
                <button className='toaster optn'>{options[2]}</button><ToastContainer />
                <button className='toaster optn' >{options[3]}</button><ToastContainer />

            </ul>
            <FontAwesomeIcon onClick={notify} icon={faEye}></FontAwesomeIcon>
        </div>
    );
};

export default Qsn;