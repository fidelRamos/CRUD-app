import React,{useState}from 'react';
import CrupForm from './CrupForm';
import CrupTable from './CrupTable';
import initialDb from "../FalseDb.json"

function CrudApp(){
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData=(data)=>{
    data.id=db.length+1
    console.log(data)
    setDb([...db,data])
  }
  const updateData=(data)=>{
    let newData=db.map((el)=>(el.id===data.id ? data : el ));
    setDb(newData);
  }
  const deleteData=(id)=>{
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  }

  return(
    <div>
      <h2>CRUD App</h2>
      <article className='grid-1-2'>
      <CrupForm
      setDataToEdit={setDataToEdit}
      dataToEdit={dataToEdit}
      createData={createData}
      updateData={updateData}
      />
      <CrupTable data={db} 
      setDataToEdit={setDataToEdit}
      deleteData={deleteData}
      />
      </article>
    </div>
  )
}
export default CrudApp