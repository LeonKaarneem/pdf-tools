import './Pagination.css';

const Pagination = ({currentPage, totalPages, incrementPage, decrementPage}) => {

    return (
        <div className={"pagination-container"}>
            {currentPage}

            <div onClick={decrementPage}>backward</div>
            <div onClick={incrementPage}>forward</div>
            {totalPages}
        </div>
    )
}

export default Pagination;