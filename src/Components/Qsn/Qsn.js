import React, { } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Qsn.css';




const Qsn = ({ qsn }) => {
    const { question, options, correctAnswer, } = qsn;


    const notify = () => toast(`${correctAnswer}`);


    const ans = options => {
        if (options === `${correctAnswer}`) {

            toast(`👑 Correct Answer.🎉🎉`);
        }
        else {
            toast("Wrong Answer 🙁");
        }
    }


    return (
        <div className='qsn-div'>

            <h5>{question}</h5>
            <ul >

                <button className='toaster optn' onClick={() => ans(options[0])}>{options[0]}</button><ToastContainer />
                <button className='toaster optn' onClick={() => ans(options[1])}>{options[1]}</button><ToastContainer />
                <button className='toaster optn' onClick={() => ans(options[2])}>{options[2]}</button><ToastContainer />
                <button className='toaster optn' onClick={() => ans(options[3])}>{options[3]}</button><ToastContainer />

            </ul>
            <FontAwesomeIcon onClick={notify} icon={faEye}></FontAwesomeIcon>
        </div>
    );
};

export default Qsn;