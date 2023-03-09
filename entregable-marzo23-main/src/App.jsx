import { useState } from "react";

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs

  const [animal, setAnimal] = useState("");
  const [comida, setComida] = useState("");

  const submitHandler = (e) => {
      e.preventDefault();

      console.log("Animal: ", animal);
      console.log("Comida Favorita: ", comida);

      if(animal.trim.length > 3 || comida.length > 5 ){
         alert("El formulario se ha enviado");
      }
      else{
        alert("Por favor chequea que la información sea correcta"); 
      }
      
  }
  
  return (
    <div className="App">
      <h1>Elige un color</h1>
      <form onSubmit={submitHandler}>{/* aqui deberias escribir tu codigo */}
          <label>Animal: </label>
          <input 
            type="text"
            id="Animal"
            name="Animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
          >
            
          </input>
          <label>Comida favorita:</label>
          <input
            type="text"
            id="Comida"
            name="Comida"
            value={comida}
            onChange={(e) => setComida(e.target.value)}
          >
          
          </input>
          <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
