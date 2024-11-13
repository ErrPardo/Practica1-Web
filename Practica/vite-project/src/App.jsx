import { useState } from 'react';
import { useEffect } from 'react';
import './App.css'
import { FeedComics } from './components/Feed';
import { ListaFavoritos } from './components/ListaFavoritos';
import { Filtros } from './components/Filtros';


function App() {

  const ts='2';
  const publicKey='6832c977ef3b25ff2a1f2506cef38eff';
  const hash='4cb11d7cd7e006987f69c5bc0f13032e';
  const [querry,setQuery]=useState('https://gateway.marvel.com:443/v1/public/comics?format=comic&formatType=comic&dateDescriptor=thisMonth&orderBy=-modified&ts=2&apikey=6832c977ef3b25ff2a1f2506cef38eff&hash=4cb11d7cd7e006987f69c5bc0f13032e');
  //variables necesarias para realizar la querry para la peticion a la api
  //declaramos como useState para actualizar su informacion y poder realizar nuevas consultas
  const [data,setData]=useState(null);
  //Datos que recibimos de la peticion
    useEffect(()=>{
      fetch(querry)
      .then(results=>results.json())
      .then(json=>setData(json))
    },[querry]);
    
  
  return (
    <>
      {/*}Navegador que tiene el titulo y los filtros para actualizar los comics que muestra por pantalla{*/}
      <nav>
        Comics De Marvel
        <Filtros setQuerry={setQuery}></Filtros>
      </nav>
      {/*}Contenedor que contienene todos los comics, su informacion detallada{*/}
      <div className='Container'>
        <FeedComics data={data && data.data.results}></FeedComics>
      </div>
      {/*}Lista de elementos favoritos{*/}
      <div className='Lista'>
        <h2 className='ComicTitle'>Lista de Favoritos</h2>
        <ListaFavoritos data={data}></ListaFavoritos>
      </div>
      {/*}Footer con mi nombre{*/}
      <footer>
        <p className='footer-content'>Eduardo Yánez Cordero</p>
      </footer>
    </>
  )
}

export default App
