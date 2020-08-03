import React from 'react';
import { FooterBase } from './styles';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png'

function Footer() {
  return (
    <FooterBase>
      <Link to="/">
                <img className="Logo" src={Logo} alt="Myflix logo"/>
      </Link>
      <p>
        Criado por Belle Paiva durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
