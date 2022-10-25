import React, { } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import SingleCourse from '../SingleCourse/SingleCourse';

const Course = () => {
    const courses = useLoaderData();
    return (
        <Container>
            {/* <h2>course content:{courses.length}</h2> */}
            <Row>

                {
                    courses.map(course => <SingleCourse key={course.id} course={course}></SingleCourse>)
                }

            </Row>
        </Container>
    );
};

export default Course;