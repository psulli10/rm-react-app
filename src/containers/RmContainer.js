import React, {useEffect, useState} from 'react';
import RmList from '../components/RmList';
import SearchSelector from '../components/SearchSelector'

const RmContainer = ({apiOptions}) => {

    const [searchUrl, setSearchUrl] = useState("");
    const [listObject, setListObject] = useState(null);

    useEffect(() => {
        fetch(searchUrl)
        .then(res => res.json())
        .then(data => setListObject(data))
    }, [searchUrl])

    const handleSearchChange = (url) => {
        setSearchUrl(url);
    }
    
    return (
        <div className="container">
            <SearchSelector apiOptions={apiOptions} handleSearchChange={handleSearchChange}/>
            {listObject ? <RmList listObject={listObject} handleSearchChange={handleSearchChange} currentPage={searchUrl[searchUrl.length -1]}/> : null}
        </div>
    )

}

export default RmContainer;