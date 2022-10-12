import React from 'react';
import { useLoaderData } from 'react-router-dom';

import Qsn from '../Qsn/Qsn';

const Mcq = () => {


    const mcqExam = useLoaderData();
    console.log(mcqExam);
    const { data } = mcqExam;
    const { questions } = data;


    console.log(questions);


    return (
        <div>
            <h2 className=''>Answer The Questions { }</h2>
            <div>
                {

                    questions.map(
                        qsn => <Qsn
                            qsn={qsn}
                            key={qsn.id}
                        ></Qsn>
                    )


                }



            </div>
        </div>
    );
};

export default Mcq;