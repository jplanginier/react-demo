const PublicationDate = ({publicationDate, ... props}) => {
    return (
        <span>{ publicationDate.getFullYear() }</span>
    )
}

export default PublicationDate;
