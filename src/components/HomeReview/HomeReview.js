import React from 'react';

const HomeReview = ({review}) => {
    const {name, comment, Ratting, image} = review;
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

export default HomeReview;