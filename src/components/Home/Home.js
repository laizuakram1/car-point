import React from 'react';
import UseReview from '../../Hooks/UseReview';
import HomeReview from '../HomeReview/HomeReview';
import './Home.css'
import { useNavigate } from 'react-router-dom';




const Home = () => {
    const [reviews, setReviews] = UseReview();
    const navigate = useNavigate();

    return (
        <div>
            <div className='car-intro-container'>
                <div className='car-title'>
                    <h2 className='text-5xl'><span className='text-orange-400'>Power</span> & Beauty</h2>
                    <h3 className='text-5xl mt-2'>Chose your Best Car</h3>
                    <br />
                    <button className='buy-btn'>Buy Now</button>
                </div>
                <div className='carImage'>
                    <img src={`https://img.freepik.com/free-vector/blue-sports-car-isolated-white-vector_53876-67418.jpg?w=740`} alt="" />
                </div>

            </div>
            <div className='mb-12'>
                <h2 className='text-center text-4xl mb-4'> Our Client Say!</h2>
                <div className='grid gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        reviews.slice(0, 3).map(review => <HomeReview 
                            key={review.id}
                            review={review}
                            ></HomeReview>)
                    }
                    
                </div>
            </div>
            <div className='mb-10 mt-0 text-center'>
            <button onClick={()=> navigate('/review')} className='ReviewBtn'>View all Review</button>
            </div>
        </div>
    );
};

export default Home;