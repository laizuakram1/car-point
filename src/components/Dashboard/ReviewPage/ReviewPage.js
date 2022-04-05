import React from 'react';

const ReviewPage = ({review}) => {
    const {image, name, comment, Ratting} = review;
    return (
        <div className='review'>
            <img src={image} alt="personImg" />
            <h4>{name}</h4>
            <p>{comment}</p>
            <p>{Ratting}</p>
        </div>
    );
};

export default ReviewPage;