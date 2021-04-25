const RmList = ({listObject, handleSearchChange, currentPage}) => {

    const listNodes = listObject.results.map((result, index) => {
        return (
            <li key={index}>{result.name}</li>
        )
    })

    const handleClick = (event) => {
        handleSearchChange(event.target.value)
    }

    const getCurrentPage = () => {
        if(parseInt(currentPage)){
            return parseInt(currentPage)
        }
        return "1"
        
    }

    return(
        <div className="list">
            <ul>
                {listNodes}
            </ul>
            {listObject.info.prev ? <button value={listObject.info.prev} onClick={handleClick}>Previous</button> : null}
            {listObject.info.next ? <button value={listObject.info.next} onClick={handleClick}>Next</button> : null}
            {listObject? <p> page {getCurrentPage()} of {listObject.info.pages} - {listObject.info.count} total</p> : null}
        </div>
    )
}

export default RmList