import React from 'react';

import Card from 'react-bootstrap/Card';
import { Link, } from 'react-router-dom';
import './ExamCard.css';

const ExamCard = ({ cardOfExam }) => {
    const { id, logo, name, total } = cardOfExam;
    return (



        <div>
            <div className='cover-area'>

            </div>
            <div className='card-container'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img className='bg-dark' variant="top" src={logo} />
                    <Card.Body className='bg-success'>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {total}
                        </Card.Text>
                        <Link to={`/${id}`}>Exam</Link>
                    </Card.Body>
                </Card>
            </div>

        </div>



    );
}

export default ExamCard;