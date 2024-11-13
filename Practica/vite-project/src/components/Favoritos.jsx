import { useState,useEffect } from 'react';


export const Favoritos=({dataFiltrado,favoritos,setFavoritos})=>{
    
    //Use effect subir array de favoritos al LocalStorage

    useEffect(() => {
        localStorage.setItem("Favoritos", JSON.stringify(favoritos));
    }, [favoritos]);

    //Funcion para rederigir elementos para añadir o quitar elementos del LocalStorage
    function addFavoritos(favorito){
        //console.log(document.getElementsByClassName('inputHeart'));
        //No uso lo que esta comentado porque tendría que emplear un for siempre recorriendo cada uno de los elementos y eso lo hace costoso
        //Por eso me he creado un meta dato en el input para saber directamente cual es cada uno de ellos
        const checkbox=document.querySelector(`.inputHeart[data-id='${favorito.id}']`);
        //Si haces click rellena el corazon y guarda
        //Si ya esta rellenado o el input checked lo borra directamente, por eso es necesario que cuando recarges la pagina esten rellenado
        //Porque si no habra dos elementos iguales en el LocalStorage y genera problemas
        if(checkbox.checked===false){
            onDelete(dataFiltrado.id)
        }
        else{
            setFavoritos(favoritos =>[favorito,...favoritos]);
        }   
    }

    function onDelete(id){
        setFavoritos(favoritos =>favoritos.filter(item=>item.id!==id));
    }

    return(
        <>    
        {/*Svg sacado de Internet*/}   
        <label className="container">
            <input data-id={dataFiltrado.id} onClick={()=>addFavoritos(dataFiltrado)} className='inputHeart' type="checkbox"/>
            <svg  id="Layer_1" version="1.0" viewBox="0 0 24 24" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M16.4,4C14.6,4,13,4.9,12,6.3C11,4.9,9.4,4,7.6,4C4.5,4,2,6.5,2,9.6C2,14,12,22,12,22s10-8,10-12.4C22,6.5,19.5,4,16.4,4z"></path></svg>
        </label>
        </>
        
        
    )






}



