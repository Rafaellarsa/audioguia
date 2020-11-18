import {elastic as MenuProp} from 'react-burger-menu';
import React, { Component } from 'react';
import './Menu.css';
import bars from '../../assets/bars-solid.svg';

class Menu extends Component {
    constructor(props){
        super(props);
        this.options = React.createRef();
    }



    render() {
    return(
    <MenuProp>
            <a href="/index.html" className="menu-item">Destaques</a>
            <a href="/quem-somos.html" className="menu-item">Quem somos?</a>
            <a href="/producoes.html" className="menu-item">Produções</a>
            <a href="/videos.html" className="menu-item">Vídeos</a>
            <a href="/referencias.html" className="menu-item">Referências</a>
            <a href="/comissao.html" className="menu-item">Comissão</a>
            <a href="/contato.html" className="menu-item">Contato</a>
        <a href="" className="menu-item--small" onclick= { this.showSettings }>Menu</a>
    </MenuProp>
    )
    }
}

export default Menu;