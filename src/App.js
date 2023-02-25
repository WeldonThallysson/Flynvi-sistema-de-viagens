import React from 'react';
import Rotas from './Routes';  
import GlobalStyle from './style/styled';
import {BrowserRouter} from 'react-router-dom';
import Header from './Components/Header';
import { Provider } from 'react-redux';
import store from './store/store';
import history from './Services/history';
export default function App() {
 return (
   <Provider store={store}>
   <BrowserRouter history={history}>
    <GlobalStyle />
     <Header/>
   
     <Rotas/>
      
   </BrowserRouter>
   </Provider>
 );
}