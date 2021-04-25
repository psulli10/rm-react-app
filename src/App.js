import React, {useEffect, useState} from 'react';
import RmContainer from './containers/RmContainer';
import './App.css';


function App() {

  const [apiOptions, setApiOptions] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api')
    .then(res => res.json())
    .then(data => createOptionsArray(data))
  }, [])

  const createOptionsArray = (apiObject) => {
    let optionsArray = []
    for (const key in apiObject){
      let newObject = {}
      newObject["category"] = key
      newObject["url"] = apiObject[key]
      optionsArray.push(newObject)
    }
    setApiOptions(optionsArray);
  }

  return (
    <div className="App">
      <RmContainer apiOptions={apiOptions}/>
    </div>
  );
}

export default App;
