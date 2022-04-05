import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>
           <h2>What is context api?</h2>
           <p>Ans: The context api is way for passing variable global in component. Context API is a alternative way for to "Props drilling". The context API are easy for share variable in any component withour using props. Do not share data parent to child and child. Context api share data direct parent to child.</p>
            <br />
            <h2>What is semantic tag?</h2>
            <p>Semantic tag is a HTML tag. This tag are work in web browser and helps to create webpage morkup. Semantic some tag are inline and some tag are block type. inline means do not stay extra space but block tag is stay in extra space. </p>
        </div>
    );
};

export default Blogs;