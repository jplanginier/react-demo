import { useState, useEffect } from 'react'

const AuthorInput = (... props) => {
    const [author, setAuthor] = useState(localStorage.getItem('author') || '');

    useEffect(
        () => {
            localStorage.setItem('author', author);
        },
        [author]
    );

    return (
        <div>
            <label htmlFor="author">Author</label>
            <input name="author" id="author" onChange={e => setAuthor(e.target.value)} value={ author } />
        </div>
    )
}

export default AuthorInput;