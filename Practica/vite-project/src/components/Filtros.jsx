export const Filtros=({setQuerry})=>{

    //Funcion que comprueba que opcion se ha elegido y hace un set de la querry actualizando y por tanto, haciendo una nueva peticion
    function changeQuery(){
        const select=document.getElementById("Filtros");
        
        if(select.value==="Año"){
            setQuerry("https://gateway.marvel.com:443/v1/public/comics?format=comic&formatType=comic&dateRange=2024-01-01%2C2024-12-30&orderBy=-modified&ts=2&apikey=6832c977ef3b25ff2a1f2506cef38eff&hash=4cb11d7cd7e006987f69c5bc0f13032e");
        }
        else if(select.value==="Spiderman"){
            setQuerry("https://gateway.marvel.com:443/v1/public/comics?characters=1009610&orderBy=issueNumber&ts=2&apikey=6832c977ef3b25ff2a1f2506cef38eff&hash=4cb11d7cd7e006987f69c5bc0f13032e");
        }
        
    }


    return(
        <select onClick={()=>changeQuery()} id="Filtros">
          <option>Selecciona un filtro</option>
          <option value="Año">2024</option>
          <option value="Spiderman">Spiderman</option>
        </select>
    )
}