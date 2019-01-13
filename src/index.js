import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import 'bootstrap/dist/css/bootstrap.css';
import Calendar from './calendar.jsx';
const element = <h1>Month</h1>;
// ReactDOM.render(element, document.getElementById('root'));
ReactDOM.render(<Calendar />, document.getElementById('root'));
