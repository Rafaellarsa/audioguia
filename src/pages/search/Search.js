import React, { Component } from 'react';
import './Search.css';
import logo from '../../assets/logo.png';
import Information from './filter-json';
import ReactSearchBox from 'react-search-box';
import { Link, NavLink, Redirect, useHistory } from 'react-router-dom';
import Routes from '../../routes';


function Search () {
    const history = useHistory();
    function handleClick() {
      history.push("/audio");
    }

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
          onSelect = { handleClick }
         />

      </div>
      </header>
    </div>
    );
}

export default Search;