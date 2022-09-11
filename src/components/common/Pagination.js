import './Pagination.css';

const PaginationStart = ({amountOfPagesToShow, currentPage, goToPage, totalPages}) => {
    let pageSplit;
    if (totalPages > amountOfPagesToShow) {
        pageSplit = amountOfPagesToShow / 2;
    } else {
        pageSplit = totalPages
    }
    const pagesToShow = [];

    let showNumbersBefore = Math.floor(pageSplit)
    let showNumbersAfter = Math.floor(pageSplit)

    if (currentPage <= Math.floor(pageSplit)) {
        showNumbersAfter = amountOfPagesToShow - currentPage;
    } else if (currentPage >= totalPages - Math.floor(pageSplit)) {
        const numbersBefore = totalPages - currentPage;
        showNumbersBefore = amountOfPagesToShow - numbersBefore - 1;
        showNumbersAfter = totalPages - currentPage;
    }

    for (let i = 0; i < showNumbersBefore; i++) {
        const pageNumber = currentPage - showNumbersBefore + i;
        if (pageNumber < 1) {
            continue;
        }
        pagesToShow.push(<div key={i + '-previous'} className={'page-number'}
                              onClick={() => goToPage(pageNumber)}>{pageNumber}</div>);
    }

    pagesToShow.push(<div onMouseEnter={() => console.log('eneter')} onMouseLeave={() => console.log("left")} className={"current-page"}>{currentPage}</div>);


    for (let i = 0; i < showNumbersAfter; i++) {
        const pageNumber = currentPage + i + 1;
        pagesToShow.push(<div key={i + '-next'} className={'page-number'}
                              onClick={() => goToPage(pageNumber)}>{pageNumber}</div>);
    }

    return pagesToShow.map((pageNumber) => pageNumber)
}


const Pagination = ({currentPage, totalPages, incrementPage, decrementPage, goToPage, amountOfPagesToShow}) => {

    return (
        <div className={"pagination-container"}>
            <div onClick={decrementPage} className={"change-page-button"}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M11.0821 2.80787C11.3246 3.08496 11.2965 3.50614 11.0194 3.74859L6.25946 7.91354L11.0194 12.0785C11.2965 12.3209 11.3246 12.7421 11.0821 13.0192C10.8397 13.2963 10.4185 13.3244 10.1414 13.0819L5.09475 8.66612C4.63943 8.26771 4.63943 7.55938 5.09475 7.16097L10.1414 2.74516C10.4185 2.5027 10.8397 2.53078 11.0821 2.80787Z"
                          fill="black"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M11.0821 2.80787C11.3246 3.08496 11.2965 3.50614 11.0194 3.74859L6.25946 7.91354L11.0194 12.0785C11.2965 12.3209 11.3246 12.7421 11.0821 13.0192C10.8397 13.2963 10.4185 13.3244 10.1414 13.0819L5.09475 8.66612C4.63943 8.26771 4.63943 7.55938 5.09475 7.16097L10.1414 2.74516C10.4185 2.5027 10.8397 2.53078 11.0821 2.80787Z"
                          fill="#2A59FE" fillOpacity="0.3"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M11.0821 2.80787C11.3246 3.08496 11.2965 3.50614 11.0194 3.74859L6.25946 7.91354L11.0194 12.0785C11.2965 12.3209 11.3246 12.7421 11.0821 13.0192C10.8397 13.2963 10.4185 13.3244 10.1414 13.0819L5.09475 8.66612C4.63943 8.26771 4.63943 7.55938 5.09475 7.16097L10.1414 2.74516C10.4185 2.5027 10.8397 2.53078 11.0821 2.80787Z"
                          fill="white" fillOpacity="0.5"/>
                </svg>
            </div>
            {(Math.floor(amountOfPagesToShow / 2) + 1 < currentPage && totalPages > amountOfPagesToShow) &&
                <div className={"pagination-container"}>
                    <div className={'page-number'} onClick={() => goToPage(1)}>
                        1
                    </div>
                    <div>
                        ...
                    </div>
                </div>
            }
            <PaginationStart amountOfPagesToShow={amountOfPagesToShow} currentPage={currentPage} goToPage={goToPage}
                             totalPages={totalPages}/>
            {
                (Math.floor(amountOfPagesToShow / 2) + currentPage + 1 <= totalPages && totalPages > amountOfPagesToShow) &&
                <div className={"pagination-container"}>
                    <div>
                        ...
                    </div>
                    <div className={'page-number'} onClick={() => goToPage(totalPages)}>
                        {totalPages}
                    </div>
                </div>
            }
            <div onClick={incrementPage} className={"change-page-button"}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M4.91825 13.0192C4.6758 12.7421 4.70388 12.3209 4.98097 12.0785L9.74091 7.91354L4.98097 3.7486C4.70388 3.50614 4.6758 3.08497 4.91825 2.80787C5.16071 2.53078 5.58188 2.50271 5.85897 2.74516L10.9056 7.16097C11.3609 7.55938 11.3609 8.26771 10.9056 8.66612L5.85897 13.0819C5.58188 13.3244 5.16071 13.2963 4.91825 13.0192Z"
                          fill="black"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M4.91825 13.0192C4.6758 12.7421 4.70388 12.3209 4.98097 12.0785L9.74091 7.91354L4.98097 3.7486C4.70388 3.50614 4.6758 3.08497 4.91825 2.80787C5.16071 2.53078 5.58188 2.50271 5.85897 2.74516L10.9056 7.16097C11.3609 7.55938 11.3609 8.26771 10.9056 8.66612L5.85897 13.0819C5.58188 13.3244 5.16071 13.2963 4.91825 13.0192Z"
                          fill="#2A59FE" fillOpacity="0.3"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M4.91825 13.0192C4.6758 12.7421 4.70388 12.3209 4.98097 12.0785L9.74091 7.91354L4.98097 3.7486C4.70388 3.50614 4.6758 3.08497 4.91825 2.80787C5.16071 2.53078 5.58188 2.50271 5.85897 2.74516L10.9056 7.16097C11.3609 7.55938 11.3609 8.26771 10.9056 8.66612L5.85897 13.0819C5.58188 13.3244 5.16071 13.2963 4.91825 13.0192Z"
                          fill="white" fillOpacity="0.5"/>
                </svg>
            </div>
        </div>
    )
}

export default Pagination;