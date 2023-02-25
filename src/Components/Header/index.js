import React from 'react';
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import Logo from '../../Assets/Logo/logo.svg'
import './style.css';

export default function Header() {

  // estou usando o hook do redux useSelector que ele recupera o que tem dentro da state de um reducer então é só chamar a state.nomedoreducer e atribuir a uma variavel aqui, nesse caso eu to pegando a quantidade de items que tem na state dessa reducer
  const qtdReservas = useSelector(state => state.reservas.length)


 return (
   <header className='conteiner__Cabeçalho'>
        <Link className='btn__Reserva' to={"/"}>
          <img className="logo__Cabeçalho" src={Logo} alt='Logo-SistemaViagens'/>
          <span className='Titulo__Cabeçalho'>FlynVi</span>
        </Link>
        <Link className='btn__Reserva' to={'/reservas'}>
          <div className='conteiner__Reserva'>
           <strong className='titulo__Reserva'>Minhas Reservas</strong>
           <span className='descricao__Reserva'>{qtdReservas} reservas</span>
          </div>
        </Link>

   </header>
 );
}