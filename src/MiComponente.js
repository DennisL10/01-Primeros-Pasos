//Importar modulos
import React from "react";

//Funcion de componente
const MiComponente = () => {
const usuario = {
    Nombre : "Dennis",
    Apellidos: "Landaverde",
    Web: "dennisl10.com"
};

    return(
    <div className="primer-componente">
    <h2>Componente creado</h2>
    <h3>Datos usuario</h3>
    <ul>
        <li>Nombre: <strong>{usuario.Nombre}</strong></li>
        <li>Apellidos: <strong>{usuario.Apellidos}</strong></li>
        <li>Web: <strong>{usuario.Web}</strong></li>
    </ul>
    <hr/>
    <ul>
        <li>
            React
        </li>
        <li>
            Angular
        </li>
        <li>
            Vue
        </li>
    </ul>
    </div>
    );
}


// export
export default MiComponente;