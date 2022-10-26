import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://web-tech-e-learning-server.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='bg-light p-5 text-center shadow-lg rounded mb-3'>
            <div>
                {
                    categories.map(category => <p className='px-5 border border-info rounded bg-dark py-2' key={category.id}><Link to={`/category/${category.id}`} className='text-decoration-none fw-bold text-white hover:text-info'>{category.name}</Link></p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;