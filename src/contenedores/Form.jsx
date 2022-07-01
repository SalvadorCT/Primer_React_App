import {useState} from "react"

const FormRegister = () =>{
   
    const [nombre ,setNombre] = useState("");
    const[apellido, setApellido] = useState("");


const handleInputName = (e)=>{
  

setNombre(e.target.value);
};

const handleInputLastName = (e) => setApellido(e.target.value);


return(
<div>
    <form>
        <h4>Formulario de registro {apellido}</h4>
        <h4>Nombre {nombre}</h4>
        <h4>Apellido  </h4>
        <p>
            <input
            type="text"
            onChange={handleInputName}
            placeholder= "ingrese su nombre "/>
        </p>
        <p>
            <input
            type="text"
            onChange={handleInputLastName}
            placeholder= "ingrese su Apellido "/>
        </p>
        <p>
            <input
            type="email"
            
            placeholder= "ingrese su email "/>
        </p>
        <p>
            <input
            type="password"
            
            placeholder= "ingrese su password "/>
        </p>
        <p>
           <button type="submit">Registrar</button>
        </p>
    </form>
</div>


)
}

export default FormRegister;