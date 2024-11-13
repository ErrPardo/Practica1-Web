import { useState } from 'react';
import {VisorComic} from './VisorComic.jsx';
import {Favoritos} from './Favoritos.jsx'

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

export const FeedComics=({data})=>{
    const dataFiltrado=data;
    const [selectedImage, setSelectedImage] = useState(null);
    const [characters,setCharacters]=useState(null);

    //estado para saber que imagen tengo seleccionado al hacer click
    const handleImageClick = (item) => {
        setSelectedImage(item);
    };
    //Funcion que realiza una peticion para obtener la informacion detallada de cada uno de los personajes
    const GetCharacters=((CollectionUri)=>{
        fetch(`${CollectionUri}?ts=2&apikey=6832c977ef3b25ff2a1f2506cef38eff&hash=4cb11d7cd7e006987f69c5bc0f13032e`)
        .then(results=>results.json())
        //Aqui hago un set de los personajes para obtener cada uno de ellos dependiendo del comic seleccionado
        //Algunos tienen 17 otros 3...
        .then(json=>setCharacters(json))
    });

    const [favoritos,setFavoritos]=useState(getLocalItems);

    return(
        <>
           {dataFiltrado && dataFiltrado.map((item)=>(
            <div className="ContenedorComic" key={item.id}>
                {/*}Cuando haces click en la imagen seteas lo necesario para ver los detalles en el pop up{*/}
                <img className="Imagen" onClick={() => (handleImageClick(item), GetCharacters(item.characters.collectionURI))} src={`${item.thumbnail.path}.${item.thumbnail.extension}`}></img>
                <h4 className='ComicTitle'>{item.title}<br></br>{item.modified}</h4>
                {/*}Svg de un corazon{*/}
                <Favoritos className="item" dataFiltrado={item} favoritos={favoritos} setFavoritos={setFavoritos}></Favoritos>
            </div>                              
            ))} 
            {/*}Aqui empleo la imagen seleccionada para crear un pop up y la informacion de cada uno de los personajes{*/}
            <VisorComic selectedImage={selectedImage} setSelectedImage={setSelectedImage} characters={characters}></VisorComic>
            
        </>
    )
}