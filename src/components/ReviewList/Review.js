import Rating from "../common/Rating";
import Author from "../common/Author";
import PublicationDate from "../common/PublicationDate";
import Description from "../common/Description"

const Review = ({id, ... props}) => {

    const review = {
        "@context": "string",
        "@id": "string",
        "@type": "string",
        "body": "string",
        "rating": 2,
        "book": {
          "@context": "string",
          "@id": "string",
          "@type": "string",
          "title": "string"
        },
        "author": "string",
        "publicationDate": "2021-06-09T15:03:46.716Z"
    };

    review.publicationDate = new Date(review.publicationDate);

    return (
        <article>
            <aside>
                <h2>
                    <Author name={ review.author } /> 
                    <PublicationDate publicationDate={ review.publicationDate } />
                </h2>
                <Rating rating={ review.rating } />
            </aside>
            <main>
                <Description description={ review.description } />
            </main>
        </article>
    )
}

export default Review;