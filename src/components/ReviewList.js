import Review from './ReviewList/Review';

const ReviewList = ({reviews, ... props}) => {
    return (
        <ul>
            { reviews.map((review, index) => (<li key={ index }><Review id={ review.id } /></li>), '')}
        </ul>
    )
}

export default ReviewList;