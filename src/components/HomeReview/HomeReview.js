import React from 'react';
import './HomeReview.css'


const HomeReview = ({review}) => {
    const {name, comment, Ratting, image} = review;
    return (
        <div className='review'>
            <img src={image} alt="personImg" />
            <h2 className='text-xl font-semibold'>{name}</h2>
            <p>{comment}</p>
            <p className='font-medium'>Rattings: {Ratting} star</p>
        </div>
        
    );
};

export default HomeReview;