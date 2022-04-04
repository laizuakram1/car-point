import React from 'react';
import './Home.css';

const Home = () => {
 

    return (
        <div className='Home'>
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
           
        </div>
        
    );
};

export default Home;