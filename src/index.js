import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DetailAPI from './voteApp/detailApi';


ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <div>
       <DetailAPI></DetailAPI>
    </div>,
    document.getElementById('vote')
)


