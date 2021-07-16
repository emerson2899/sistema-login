import styled from "styled-components";

// formatação do background
export const Principal = styled.div`
background-image: url('/assets/imagens/ia.png');
background-repeat: no-repeat;
background-attachment: fixed;
background-size: 100%;
//*background: #A8FCED;
width: 100%;
height: 1000px;
text-align: center;
align-itens: center;
border: solid, 3px, #00ff00; 
color: #ffffff;
position: fixed;`;

//formatação da caixa de login

export const Caixa = styled.div`
border: solid 3px #00FFFF;
border-radius: 6px;
width: 450px;
padding: 30px;
align-items: center;
text-align: center;
//* box-shadow: 60px -16px rgba(0, 0, 0, 0.2);
 padding-left: 20%;
margin-top: 100%;
margin-left: 590%;
`;

//formatação campo de input

export const Entrar = styled.input`
type: email;
background: #000000;
color: #ffffff;
border-radius: 5px;
`;
// formatação do botaõ 
export const Acesso = styled.button`
background: #000000;
color: #ffffff;
border: solid 2px #ffffff;
margin-top: 10px;
font-size: 15px;
border-radius: 5px;
width: 90px;

`; 
export const LinkArea = styled.a`
display: flex;
justify-content: center;
align-itens: center;
width: 60px;
height: 60px;
border-radius: 10px;
background-color: ${props=>props.active ? '#00ff00' : 'transparent' };
margin-bottom: 10px;

`;

export const LinkIcon = styled.img`
width: 34px;
height: auto;
padding: 3px;

`;

export const Menu = styled.div`

justify-content: center;
align-itens: center;
width: 80px;

`;

export const LinkMenu = styled.a`
border: solid 3px #00FFFF;
border-radius: 6px;
width: 400px;
padding: 20px;
align-items: center;
text-align: center;
//* box-shadow: 60px -16px rgba(0, 0, 0, 0.2);
//* padding-left: 20%;

//* position: relative;

background-color: ${props=>props.active ? '#92d2fd' : 'transparent' };
margin: 4px;

`;

export const DigitaNome = styled.input`
border: solid 2px #00FFFF;
border-radius: 5px;
width: 300px;
padding: 5px;
align-itens: center;

`;
export const Campo = styled.div`
color: #FFF;
border: solid 5px #00FFFF;
border-radius: 6px;
width: 28.5%;
padding: 5px;
align-itens: center;
text-align:center;
padding-left: 4%;
background: #FFF opacity: 0.2;

padding-left: -20%;
margin-bottom: 10px;
margin-top: 10px;
margin-left: 30.6%;

`;

export const Senha = styled(DigitaNome) `

`;

export const Enter = styled.button`

`;