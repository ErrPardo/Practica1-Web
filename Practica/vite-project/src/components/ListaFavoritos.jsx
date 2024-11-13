import { useEffect, useState } from 'react';

//Function para extraer el arrays de favoritos que tenemos en LocalStorage, si no existe devuelve []
function getLocalItems(){
    const localtasks=localStorage.getItem("Favoritos");
    if(localtasks){
        return JSON.parse(localtasks);
    }
    else{
        return [];
    }
}

export const ListaFavoritos=({data})=>{
    
    //use Effect que rellena los corazones de color rojo, si el corazon tiene el mismo id que el comic y existe en LocalStorage
    //Necesito un boton para actualizar a tiempo real sin hacer F5, porque tengo las funciones en otro componente
    const [favoritos,setFavoritos]=useState(getLocalItems);
    useEffect(()=>{
        data && favoritos.map((item)=>document.querySelector(`.inputHeart[data-id='${item.id}']`).checked=true)
    },[data])

    function actualizar(){
        setFavoritos(getLocalItems)
    }

    return(
        <div className='ContenedorListaFavoritos'>
            
            <button className="Refresh" onClick={actualizar}>Refresh</button>
            {/*}Muestra los favoritos el id y el titulo{*/}  
            {favoritos && favoritos.map((item)=><h3 key={item.id}>{item.title}</h3>)}
            
        </div>
    )



}