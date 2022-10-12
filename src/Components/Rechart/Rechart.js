import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Statistic from '../Statistic/Statistic';
import './Rechart.css';

const Rechart = () => {

    const card = useLoaderData();
    const { data } = card;


    return (
        <div>
            <div><h1 id='analysis'>
                Exam analysis:
            </h1></div>

            {
                <Statistic
                    key={data.Id}
                    card={data}

                ></Statistic>

            }

        </div>
    );
};

export default Rechart;