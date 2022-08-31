// para darle estilos a la etiqueta es propio de react hay que usar camelCase

import './app.css';
import NavBar from './components/NavBar';


function App() {

  

  const categorias = ["Electronics" , "Audio & Video" , "Clothing"]
  
  const temperatura = 18;

  return (
    <>
    <NavBar
      categories={categorias} 
      temp={temperatura}
    />
    

    
    </>

  );
}

export default App;
