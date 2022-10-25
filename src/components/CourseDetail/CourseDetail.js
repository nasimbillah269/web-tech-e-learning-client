import React from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';

const CourseDetail = () => {
    const course = useLoaderData();
    console.log(course)
    const { title, description, instractorPicture, name, picture } = course;
    return (
        <div className='mt-5'>
            <Card>
                <Card.Header>{title}</Card.Header>
                <Card.Body>
                    <Image className='w-100  rounded ' style={{ height: '355px' }} src={picture}></Image>
                    <Card.Text>
                        <div>
                            <p>{description}</p>
                        </div>
                    </Card.Text>
                    <div>
                        <Image style={{ width: "56", height: "56px" }} roundedCircle src={instractorPicture}></Image>
                        <span>{name}</span>
                    </div>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default CourseDetail;