import React from 'react'
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBzhN5bRO7ZcGx5OloyhbHdWEyfoa2M7Js';

// Create new component
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// Put component in DOM
ReactDOM.render(<App />, document.querySelector('.container'));