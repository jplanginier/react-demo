import { useState } from 'react'
import Author from "../common/Author";
import Description from "../common/Description";
import BookGlobalRating from './Book/BookGlobalRating';
import BookImage from "./Book/BookImage";
import BookIsbn from "./Book/BookIsbn";
import PublicationDate from "../common/PublicationDate";
import OpenReviewFormButton from './Book/OpenReviewFormButton';
import ReviewList from '../ReviewList';
import AddReviewForm from '../AddReviewForm';

const Book = ({book, ... props}) => {
    const [reviewFormOpened, setReviewFormOpened] = useState(false);

    function openReviewForm() {
        setReviewFormOpened(true);
    }

    return (
        <article className="book clear">
            <BookImage id={ book.id } />
            <h1>{ book.title }</h1>
            <h2>
                <Author name={ book.author } />
                &nbsp;
                <PublicationDate publicationDate={ book.publicationDate } />
                &nbsp;
                <BookIsbn isbn={book.isbn } />
            </h2>
            <Description description={ book.description } />
            <div className="clear">
            { reviewFormOpened ? (<BookGlobalRating id={ book.id } />) : (<OpenReviewFormButton callback={ openReviewForm } />) }
            </div>
            { reviewFormOpened ? (<AddReviewForm />) : (<ReviewList reviews={ book.reviews } />)}
        </article>
    )
}

export default Book;