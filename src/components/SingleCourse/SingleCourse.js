import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'


const SingleCourse = ({ course }) => {
    const { title, picture } = course;
    return (
        <div className='col-lg-4 mt-3 '>
            <Card style={{ height: '24rem' }} className="ps-3 pt-2">
                <Image style={{ width: "14rem", height: "14rem" }} src={picture}></Image>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>

                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleCourse;