
import UseReview from '../../Hooks/UseReview';
import ReviewPage from '../Dashboard/ReviewPage/ReviewPage';
import './Review.css';

const Review = () => {
    const [reviews, setReviews] = UseReview();

    return (
        <div className='review-container'>
            <h2 className='text-center text-3xl text-blue-500 mt-6 mb-10'>Our Customer says!!</h2>
            <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {
                    reviews.map(review => <ReviewPage review={review}></ReviewPage>)
                }
            </div>


        </div>
    );
};

export default Review;