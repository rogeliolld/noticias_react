import React, {Fragment, useState, useEffect} from 'react';
import Header from './component/Header';
import Formulario from './component/Formulario';
import Listadonoticias from './component/Listadonoticias';


function App() {

  //definir la categoria y noticias

  const [categoria, guardarCategoria]=useState('');
  const [noticias, guardarNoticias] = useState([])
  useEffect(() => {
    const consultarApi = async () =>{
      const url=`http://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=fa47277cdb8d40ccbf1aeaa178468d46`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    }
    consultarApi();
  }, [categoria])

  return (
    <Fragment>
      <Header 
        titulo="Buscador de noticias"
      />

      <div className="container white">
        <Formulario
          guardarCategoria={guardarCategoria}
        />
        <Listadonoticias
          noticias={noticias}
        />
      </div>
    </Fragment>

  );
}

export default App;
