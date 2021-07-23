
import './App.css';

import React, {useEffect, useState} from 'react';
import { BrowserRouter, Switch, Router, Link, Route } from 'react-router-dom';
import {Principal, Caixa, Menu} from './estilo'; 
import Controle from './Controle';
import Cadastro from './cadastro';





// o bortão vai verificar as informações adicionadas, analisará se existe o usuário em questão, caso não será
// condzido para a página e  efetuar o cadastro






function App() {

  

  return (
    <container>
    <BrowserRouter>
   <Principal>

     
   <Menu>
     <Caixa>
       
                <Controle 
                
                 icon="/assets/imagens/store.png" link="/" />
                <Controle icon="/assets/imagens/edit.png" link="/cadastro" />
                
              
     </Caixa>
     </Menu>
     

               

               
              

              <Switch>
                <Route exact path="/">

                </Route>

                <Route exact path="/cadastro"> 

                <Cadastro/>

                </Route>

                

                

     


       
     </Switch>

     <br></br>
     
       <h1>Faça seu login, ou cadastre-se em nosso sistema</h1>

   
   
   </Principal>

   
       
    </BrowserRouter>
    

    


    </container>

    
  );
}

export default App;
