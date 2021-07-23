import React, {useEffect, useState, props} from "react";
import { BrowserRouter, Switch, Router, Link } from 'react-router-dom';

import {Caixa, Campo, DigitaNome, Senha  } from "./estilo";
import {Cadastro} from "./cadastro"

 
function Acesso () {
    

}

function Login () {
   

    const [entrarUsuario, setEntrarUsuario] = useState ('')

    const [entrarSenha, setEntrarSenha]  = useState ('')




    return (
        <>
       <h1>Olá, Bem vindo a tela de login</h1>       

       <Campo>
       <h2>Por favor insira seu e-mail cadastrado, ou seu nome de usuário</h2>
      <DigitaNome padrao="email" />

           <h2>Por favor, insira sua senha cadastrada</h2>
           <Senha />

           <br></br>

           <button onClick={Acesso}>Login</button>


       </Campo>




        </>
    );


};

export default Login