import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ExamCard from '../ExamCard/ExamCard';
import './Home.css';

const Home = () => {
    const cardsOfExam = useLoaderData();
    console.log(cardsOfExam);
    const { data } = cardsOfExam;

    return (
        <div className='home-container'>
            <div className='box'>
                {
                    data.map(cardOfExam => <ExamCard
                        cardOfExam={cardOfExam}
                        key={cardOfExam.id}
                    ></ExamCard>)
                }
            </div>
        </div>
    );
};

export default Home;