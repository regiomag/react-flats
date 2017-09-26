// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import Flat from './components/flat';
import FlatList from './components/flat_list';
import App from './components/app';

// internal modules
import '../assets/stylesheets/application.scss';


// A simple example of a functional component
const Hello = props => <p>Hello, {props.name}</p>;

// render an instance of the component in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));


