import {elastic as MenuProp} from 'react-burger-menu';
import React, { Component } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';


class Menu extends Component {
    render() {
    return(
    <MenuProp>
        <Link to="/" className="menu-item">Pesquisa</Link>
        <Link to="/" className="menu-item">Sobre o Mauc</Link>
        <Link to="/audio/02" className="menu-item">Áudio</Link>
        <Link to="/audio/03" className="menu-item">Outro áudio</Link>
        <Link to="/audio/04" className="menu-item">Mais um áudio</Link>
        <Link to="/" className="menu-item">Contato</Link>
    </MenuProp>
    )
    }
}

export default Menu;