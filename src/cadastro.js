import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Router, Link } from 'react-router-dom';
import { Caixa, Campo, DigitaNome, Senha, Campol, Campoa, Logar } from "./estilo";
import {useState, useEffect, props} from "react"


//campo de inserção de dados para cadastramento de usuário
// functon registro verifica se foram inseridos dados nos campos de input
// function logar => Valida os dados passados no campo de login e verifica se são compativeis com os que foram passados no Cadastro




 function Cadastro () {


    const [email, setEmail]= useState('');
    
    const [senha, setSenha]= useState('');

    const [inputSenha, setInputSenha] = useState('');

    const [inputEmail, setInputEmail] = useState('');

    function registro (){
        if (email.length == 0 && senha.length == 0){
            return (
                alert('insira seus dados para cadastro')
                
            )
        }else{
            alert('Usuário cadastrado com sucesso')
            return (
                document.location.reload(false)
            
            
            )
        }
    }

    function log () {
        if (inputSenha == senha && inputEmail==email){
            return (
                alert ("Você efetuou login com sucesso")
                )
        }else{
            return (
                alert("Seu email ou senha não está correto")
            )
        }
    }
     
    


    return (

        <>
          <Campo>
              <Campoa>
              <h1>Cadastre-se</h1>
           <h2> Por Favor Digite um nome de usuário, ou um e-mail: </h2>

            <DigitaNome type="Email" value={email} onChange ={(e) => setEmail(e.target.value)} 
             />

            <h2>Por Favor digite uma senha a ser cadastrada:  </h2>

            <Senha placeholder= "Digite uma senha aqui" type="password" value={senha} onChange={(e) => setSenha(e.target.value)}/>
            
            <br></br>

            <button onClick={registro} >Registre-se</button> 
            </Campoa>

            <Campol>           
                <h1>Login</h1>                

                <h2>Por favor digite seu email cadastrado</h2>

                <DigitaNome type="Email" value={inputEmail} onChange={(e) => setInputEmail(e.target.value)}/>

                <h2>Por favor digite sua senha cadastrada </h2> 

                <Senha type="password" value={inputSenha} onChange= {(e) => setInputSenha(e.target.value)} /> <br></br>

                <button onClick={log}>Login</button>

                
                    
   
            </Campol>

           </Campo>

           
  




        </>
    );
}

export default Cadastro
