import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='mt-5 bg-primary h-100 text-center'>
            <div >
                {
                    categories.map(category => <p className='mb-0' key={category.id}><Link to={`/category/${category.id}`} className='text-decoration-none fw-bold text-white mt-2'>{category.name}</Link></p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;