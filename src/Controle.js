import React from 'react';
import {} from './estilo';
import {useHistory, useLocation} from 'react-router-dom'
import {LinkMenu, LinkIcon} from './estilo';


export default ({icon, link}) => {

    const history = useHistory ();
    const location = useLocation ();

    let isActive = location.pathname == link;
   
    const handleLinkClick = (e) =>{
        e.preventDefault();
        history.push(link);

    }


    return(
        <LinkMenu active={isActive} href={link} onClick={handleLinkClick}>
        <LinkIcon src ={icon}/>
        </LinkMenu>

    );
}






