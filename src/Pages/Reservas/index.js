import React from 'react';
import {MdAddCircle,MdRemoveCircle, MdDelete} from 'react-icons/md'
import { DeletarReserva,UpdateAmountSuccess} from '../../store/modules/reserva/Actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './style.css'

export default function Reservas() {
    const dispatch = useDispatch()
    const reservas = useSelector(state => state.reservas)
    const navigate = useNavigate()

    console.log(reservas)

   
 
    function excluirReserva(id){
       dispatch(DeletarReserva(id)) 
    }

    function incrementeReserva(item){
       dispatch(UpdateAmountSuccess(item.id, item.amount + 1)) 
    }
    function decrementeReserva(item){
       dispatch(UpdateAmountSuccess(item.id, item.amount - 1))
    }
  
  return (
   <div >
        <div className='Conteiner__PrincipalReserva'>
        <h1 className='Titulo__PrincipalReserva'>Você solicitou {reservas.length} reservas</h1>
        </div>
          {reservas.map((item) => (
              <div className='Conteiner__Reservas' key={item.id}>
                <img className="Imagem__Reservas" src={item.image} alt={item.title}/>

                <strong className='Titulo__Reservas'>{item.title}</strong>

                <div className='amount'>
                  <button className='botao__adicional' type='button' onClick={() => {decrementeReserva(item)}}>
                    <MdRemoveCircle size={25}/>
                  </button>                
                </div>
                <input className='input' disabled value={item.amount}/>
                <div className='amount'>
                  <button className='botao__adicional' type='button' onClick={() => {incrementeReserva(item)}}>
                    <MdAddCircle size={25}/>
                  </button>                
                </div>
                  <button
                  className='Btn__Reservas'
                  type='button'
                  onClick={() => excluirReserva(item.id)}>
                    <MdDelete size={20} color="#191919"/>
                  </button>
              </div>
          ))}
          

        <footer className='Rodapé__Reservas'>
          <button className='Btn__SReservas' onClick={() => { navigation.navigate('/')}} type='button'>Solicitar Reservas</button>
        </footer>
   </div>
 );
}