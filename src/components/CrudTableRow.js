import React from "react";


function CrudTableRow({el,setDataToEdit,deleteData}){
  let {first_name, last_name, email, id}=el;
  return(
    <tr>
      <td>{first_name}</td>
      <td>{last_name}</td>
      <td>{email}</td>
      <td>
          <button onClick={()=>setDataToEdit(el)}>Editar</button>
          <button onClick={()=>deleteData(id)}>Eliminar</button>
      </td>
    </tr>    
  )
}
export default CrudTableRow