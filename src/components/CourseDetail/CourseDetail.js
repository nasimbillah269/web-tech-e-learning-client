import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const CourseDetail = () => {
    const course = useLoaderData();
    console.log(course)
    const { title, description, instractorPicture, name, picture } = course;
    return (
        <Container className='mt-5'>
            <Row>
                <Col lg="3">
                    <LeftSideNav></LeftSideNav>
                </Col>
                <Col lg="9">
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

                </Col>
            </Row>

        </Container>
    );
};

export default CourseDetail;