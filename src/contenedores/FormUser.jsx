import { TextField } from "@mui/material";
import { useState } from "react"

const FormUser = ()=>{

const [valorDeInputs ,setValorInputs] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    password: "",
});

const handleInputValues = (e) => {

const {name, value} = e.target;

setValorInputs({
    ...valorDeInputs,
    [name]:value,}
);
};

return(
<div class="container">
        <form>
            <h4>FORMULARIO DE USUARIO </h4>
            <h5>Nombre {valorDeInputs.nombre}</h5>
            <h5>apellido {valorDeInputs.apellido}</h5>
            <h5>correo {valorDeInputs.email}</h5>
            <h5>password {valorDeInputs.password}</h5>
     <p>
        
        <TextField
        type="text"
        name="nombre"
        variant = "outlined"
        onChange = {handleInputValues}
        label="ingrese su nombre"       


        />
     </p>
     <p>
        <TextField
        type="text"
        name="apellido"
        variant = "standard"
        onChange = {handleInputValues}
        label="ingrese su Apellido"

        />
     </p>
     <p>
        <TextField
        type="email"
        name="email"
        variant = "standard"
        onChange = {handleInputValues}
        label="ingrese su email"

        />
     </p>
     <p>
        <TextField
        type="password"
        name="password"
        variant = "standard"
        onChange = {handleInputValues}
        label="ingrese su contraseña"

        />
     </p>
          </form>
          </div>

);
};

export default FormUser