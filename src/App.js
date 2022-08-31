// para darle estilos a la etiqueta es propio de react hay que usar camelCase

import './app.css';
import Ad from './components/ad';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {

  

  const categorias = ["Electronics" , "Audio & Video" , "Clothing"]
  
  const temperatura = 18;

  return (
    <>
    <NavBar
      categories={categorias} 
      temp={temperatura}
    />
    <ItemListContainer greeting={"Hola bienvenidos a nuestra app"}/>

    <Ad>
      <h1> Titulo del AD</h1>
      <span> Un anuncio muy molesto!</span>
    </Ad>
    </>

  );
}

export default App;
