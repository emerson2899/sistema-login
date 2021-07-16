import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Router, Link } from 'react-router-dom';
import { Caixa, Campo, DigitaNome, Senha } from "./estilo";

//campo de inserção de dados para cadastramento de usuário



 function Cadastro () {


    return (

        <>
          <Campo>
           <h2> Por Favor Digite um nome de usuário: </h2>

            <DigitaNome  />

            <h2>Por Favor digite uma senha a ser cadastrada:  </h2>

            <Senha placeholder= "Digite uma senha aqui" type="password"/>




    
           </Campo>




        </>
    );
}

export default Cadastro
