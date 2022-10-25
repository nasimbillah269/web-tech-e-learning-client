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
        <div className='border'>
            <h2>left side nav{categories.length}</h2>
            <div >
                {
                    categories.map(category => <p className='mb-0' key={category.id}><Link to={`/category/${category.id}`} className='text-decoration-none'>{category.name}</Link></p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;