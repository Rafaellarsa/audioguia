import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBarsSolid } from '@fortawesome/free-solid-svg-icons'
import React, { Component } from 'react';
import './Menu.css';
import bars from '../../assets/bars-solid.svg';

class Menu extends Component {
    constructor(props){
        super(props);
        this.options = React.createRef();
    }

    showMenu = async () => {
        var x = await this.options.current;
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }

    render() {
    return(
    <div id="menu">
        <div className="options" ref={this.options} id="options">
            <a href="/index.html">Destaques</a>
            <a href="/quem-somos.html">Quem somos?</a>
            <a href="/producoes.html">Produções</a>
            <a href="/videos.html">Vídeos</a>
            <a href="/referencias.html">Referências</a>
            <a href="/comissao.html" class="active">Comissão</a>
            <a href="/contato.html">Contato</a>
        </div>
        <a href="javascript:void(0);" className="icon" onclick= { this.showMenu }>
            <FontAwesomeIcon icon={faBarsSolid} />
        </a>
    </div>
    )
    }
}

export default Menu;