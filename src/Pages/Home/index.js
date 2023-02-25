import React,{useState,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-scroll';
import {adicionarReservaRequest} from '../../store/modules/reserva/Actions';
import {MdFlightTakeoff} from 'react-icons/md'
import api from '../../Services/api';
import './style.css';

export default function Home() {
    // o dispatch é um hook do redux que server para disparar uma ação para o reducer que no meu caso é o reservas, então ele é usado sempre dentro de uma função e recebe os parametros de type="" e no meu caso os dados que quero colocar dentro do reducer,agora estou enviando os dados para o reducer guardar e de lá eu posso usar em qualquer componente
    const dispatch = useDispatch()    
    const [trips,setTrips] = useState([]);

    useEffect(() => {
        async function Requisicao(){
          const response = await api.get('trips');  

          setTrips(response.data)
          console.log(response.data)
        }

        Requisicao()

    },[])
    


     function adicionarViagem(id){
       dispatch(adicionarReservaRequest(id))

     }



  return (
   <main>
    <div className='Fundo__Preto'>
      <video className='video' loop autoPlay muted>
        <source src={require('../../Assets/Logo/production ID_4782486.mp4')} type="video/mp4"/>
      </video>
    </div>
     <section className='Conteiner__Apresentacao'>
        <div className='Conteiner__ApresetacaoDescricao'>
            <h1 className='Titulo__Principal'>Faça suas Melhores Viagens com a FlynVi</h1>
            <p className='Descricao__Principal'>para as melhores praias e resorts do Brasil !</p>
            <Link className="Botao__Reserva" smooth={true} to='box'>
              <span className='txt__reserva'>Solicite sua Reserva !</span>
            </Link>
        </div>
   

     </section>

         <div className='Conteiner__Subtitulo'>
            <h2 className='Subtitulo__Principal'>Faça sua Reserva</h2>
          </div>

     <section id='box' className="Conteiner__Box">
    
        {trips.map((item) => (
          <li className="Lista__Itens" key={item.id}>
             
              <img className='Image__Viagens' src={item.image} alt={item.title}/>
              <strong className='Titulo__Viagens'>{item.title}</strong>
           
               <div className='Conteiner__BotaoTxt'>                                
               <span className='Descricao__Viagens'>Status: {item.status ? 'Disponivel' : 'Indisponivel'}</span>
          
                <div className='Conteiner__Botao'>
                  <MdFlightTakeoff size={16} color="black"/>
                 <button 
                  className='Botao__Viagens'   
                  type='button'
                  onClick={() => {adicionarViagem(item.id)}}>Solicitar a Reserva
                 </button>
                </div>
               </div>   

          </li>
        ))}
     </section>
   </main>
 );
}