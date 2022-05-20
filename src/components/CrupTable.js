import React from "react";
import CrupTableRow from "./CrudTableRow"


function CrupTable({data, setDataToEdit, deleteData}){
  return(
    <div>
      <h3>Tabla de datos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo Electrónico </th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length===0?(
           <tr>
             <td colSpan="4">Sin datos</td>
           </tr>
         ):(
          data.map((el)=><CrupTableRow 
          key={el.id}
          el={el}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
          />
          )
         )}  
        </tbody>
      </table>
    </div>
  )
}
export default CrupTable