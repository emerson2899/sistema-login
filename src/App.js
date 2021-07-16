
import './App.css';

import React, {useEffect, useState} from 'react';
import { BrowserRouter, Switch, Router, Link, Route } from 'react-router-dom';
import {Principal, Caixa, Menu} from './estilo'; 
import Controle from './Controle';
import Cadastro from './cadastro';
import Login from './login';





// o bortão vai verificar as informações adicionadas, analisará se existe o usuário em questão, caso não será
// condzido para a página e  efetuar o cadastro






function App() {
  return (
    <BrowserRouter>
   <Principal>

     
   <Menu>
     <Caixa>
       
                <Controle icon="/assets/imagens/store.png" link="/" />
                <Controle icon="/assets/imagens/edit.png" link="/cadastro" />
                <Controle icon="/assets/imagens/profile.png" link="/login" />
              
     </Caixa>
     </Menu>
     

               

               
              

              <Switch>
                <Route exact path="/">

                </Route>

                <Route exact path="/cadastro"> 

                <Cadastro/>

                </Route>

                <Route exact path="/login"> 
                <Login/>                 
                </Route>

                

     


       
     </Switch>

   
   
   </Principal>
       
    </BrowserRouter>
  );
}

export default App;
