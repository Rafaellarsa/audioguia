import React, { Component } from 'react';
import './Search.css';
import logo from '../../assets/logo.png';
import Information from './filter-json';
import FilterResults from 'react-filter-search';
import ReactSearchBox from 'react-search-box';
import { Link } from 'react-router-dom';

export default class Search extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <div className="search-box" >
        <ReactSearchBox
          placeholder="Insira o nome da obra"
          value=""
          data = { Information }
          callback = {record => console.log(record)}
          href = "http://google.com"
        />
      </div>
      </header>
    </div>
    )
  }
} 