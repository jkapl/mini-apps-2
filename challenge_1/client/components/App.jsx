import React, { useState } from 'react';
import axios from 'axios';


const App = () => {
  
  const [data, setData] = useState([]);
  
  const [query, setQuery] = useState('');

  const search = () => {
    axios.get(`/events?q=${query}`)
      .then((response) => {
        console.log(response.data);
      })
    e.preventDefault();
  }

  render() {
    return (
      <form>
        <label>
          Search for historical events:
        </label>
          <input type="text" value={query} onChange={(e)=> {setQuery(e.target.value)}}></input>
          <button onSubmit={(e)=> search()}></button>
      </form>
    )
  }
}

export default App

