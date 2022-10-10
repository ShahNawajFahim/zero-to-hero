import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ExamCard.css';

const ExamCard = ({ cardOfExam }) => {
    const { logo, name, total } = cardOfExam;
    return (
        <div className='card-container'>

            <Card style={{ width: '18rem' }}>
                <Card.Img className='bg-dark' variant="top" src={logo} />
                <Card.Body className='bg-success'>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {total}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

        </div>
    );
}

export default ExamCard;