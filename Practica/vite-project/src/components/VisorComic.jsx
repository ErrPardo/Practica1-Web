
export const VisorComic=({selectedImage,setSelectedImage,characters})=>{
    
    
    return(
        <>
        {selectedImage && (
            <div className="popup" onClick={()=>setSelectedImage(null)}>{/*}Cuando seleccionamos fuera del pop-up content es decir en el pop up borra la seleccionada y cierra el popup{*/}
                <div className="popup-content" onClick={(e) => e.stopPropagation()}>{/*Evita que se propage a elementos superior a este y provoque un error*/}
                    <p className="close" onClick={()=>setSelectedImage(null)}>&times;</p>{/*Le damos a la x cierra el popup*/}
                    <div className="contenedorImagenesPersonaje">
                    {/*Mostrar los detalles del personajes*/}
                    {characters && characters.data.results.map((item)=>(<img key={item.id} className="popup-image" src={`${item.thumbnail.path}.${item.thumbnail.extension}`}/>))}
                    </div>
                    <div className="contenedorTexto">
                        <h4>{selectedImage.title}<br></br>Numero Paginas:{selectedImage.pageCount}<br></br>Personajes:{selectedImage.characters.items.map((item,index)=>(<p key={index}>{item.name}</p>))}</h4>
                    </div>
                </div>
            </div>
        )}
        </>
    ) 
}