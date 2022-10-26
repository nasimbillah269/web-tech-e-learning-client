import React, { } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import SingleCourse from '../SingleCourse/SingleCourse';

const Course = () => {
    const courses = useLoaderData();
    return (
        <Container className='mt-5'>
            <Row>
                <Col lg="3">
                    <LeftSideNav></LeftSideNav>
                </Col>
                <Col lg="9">
                    <Row>
                        {
                            courses.map(course => <SingleCourse key={course.id} course={course}></SingleCourse>)
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Course;