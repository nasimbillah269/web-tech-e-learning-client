import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';



const SingleCourse = ({ course }) => {
    // console.log(course)
    const { id, title, picture, price, reting } = course;
    return (
        <div className='col-lg-4 mt-5 '>
            <Card style={{ height: '24rem' }} className="ps-3 pt-2">
                <Image style={{ width: "14rem", height: "14rem" }} src={picture}></Image>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <div className='d-flex justify-content-between'>
                            <div >
                                <p className='mb-0 fw-bold'>${price}</p>
                            </div>
                            <div className='d-flex'>
                                <span><FaStar className='text-warning'></FaStar></span>
                                <span><FaStar className='text-warning'></FaStar></span>
                                <span><FaStar className='text-warning'></FaStar></span>
                                <span className='me-2 text-warning'><FaStar></FaStar></span>
                                <p className='mb-0'>{reting}</p>
                            </div>
                        </div>
                    </Card.Text>
                    <Link to={`/courses/${id}`}><Button className='w-100' variant="outline-primary">Details</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleCourse;