import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { FaStar } from "react-icons/fa";



const SingleCourse = ({ course }) => {
    console.log(course)
    const { title, picture, price, reting } = course;
    return (
        <div className='col-lg-4 mt-3 '>
            <Card style={{ height: '24rem' }} className="ps-3 pt-2">
                <Image style={{ width: "14rem", height: "14rem" }} src={picture}></Image>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <div className='d-flex justify-content-between'>
                            <div >
                                <p className='mb-0'>${price}</p>
                            </div>
                            <div className='d-flex'>
                                <span><FaStar></FaStar></span>
                                <span><FaStar></FaStar></span>
                                <span><FaStar></FaStar></span>
                                <span className='me-2'><FaStar></FaStar></span>
                                <p className='mb-0'>{reting}</p>
                            </div>
                        </div>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleCourse;