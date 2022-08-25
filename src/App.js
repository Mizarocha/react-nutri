import React, { useEffect, useState } from 'react';
import './style.css';
 
function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(()=> {

    function loadApi(){
      let url = 'https://sheet.best/api/sheets/f1a2f00b-2754-4382-bb3c-b4d000697f8d';

      fetch(url)
      .then((r)=> r.json())
      .then((json)=> {
        console.log(json);
        setNutri(json);
      })
    }
  
    loadApi();
 }, []);
  
  return (
    <div className="container">
      <header>
        <strong>Ábitos Saudáveis</strong>
      </header>
      
      {nutri.map((item)=>{
        return(
           <article key={item.id} className="post">
           <strong className="titulo">{item.titulo}</strong>
          
          <img src={item.capa} alt={item.titulo} className="capa"/>
          <p className="subtitulo">
            {item.subtitulo}
          </p>
          <a className="botao">Acessar</a>

        </article>

      )
    })}
   </div>
  );
}

export default App;