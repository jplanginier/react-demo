import Book from './BookList/Book';

const BookList = (... props) => {

    const books = [
        {
            "@context": "string",
            "@id": "string",
            "@type": "string",
            "isbn": "string",
            "title": "Titre",
            "description": "string",
            "author": "string",
            "publicationDate": "2021-06-09T14:01:56.416Z",
            "reviews": [
              {
                "@context": "string",
                "@id": "string",
                "@type": "string",
                "body": "string"
              }
            ]
        },
        {
            "@context": "string",
            "@id": "string",
            "@type": "string",
            "isbn": "string",
            "title": "Test",
            "description": "string",
            "author": "string",
            "publicationDate": "2021-06-09T14:01:56.416Z",
            "reviews": [
              {
                "@context": "string",
                "@id": "string",
                "@type": "string",
                "body": "string"
              }
            ]
        },
    ].map((book) => {
        book.publicationDate = new Date(book.publicationDate);
        return book;
    });

    return (
        <ul>
            { books.map((book, index) => (<li key={ index }><Book book={ book } /></li>), '')}
        </ul>
    )
}

export default BookList;