import { useState } from "react";

const AddReviewForm = ({book, ... props}) => {

    const [newReview, setNewReview] = useState('');

    function handleReviewChange(e) {
        setNewReview(e.target.value);
    }

    function saveReview(e) {
        e.preventDefault();
        console.log("To be saved : " + newReview);
    }

    return (
        <form>
            <textarea type="select" onChange={ handleReviewChange } value={ newReview } />
            <input type="submit" onClick={ saveReview } />
        </form>
    );
}

export default AddReviewForm;