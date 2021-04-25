const SearchSelector = ({apiOptions, handleSearchChange}) => {
    
    const selectNodes = apiOptions.map((apiOption, index) => {
        return (
            <option value={apiOption.url} key={index}>{apiOption.category}</option>
        )
    })

    const handleChange = (event) => {
        handleSearchChange(event.target.value);
    }


    return(
        <div className="selector">
        <h3>This is the SearchSelector</h3>
        <select onChange={handleChange}>
            <option defaultValue>Select a category to search</option>
            {selectNodes}
        </select>
        </div>
    )
}

export default SearchSelector;