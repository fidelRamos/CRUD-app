import React,{useState,useEffect} from 'react';

const initialForm={
  id:null,
  first_name: "",
  last_name: "",
  email:""
}

function CrupForm ({createData,updateData,setDataToEdit,dataToEdit}){
  const [form, setForm] = useState(initialForm);
  useEffect(() => {
    if(dataToEdit){
      setForm(dataToEdit)
    }else{
      setForm(initialForm)
    }
  }, [dataToEdit]);

  const handleChange=(e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    }) 
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!form.first_name || !form.last_name || !form.email){
      alert("Datos insuficientes");
      return;
    }
    if(form.id===null){
      createData(form)
    }else{
      updateData(form)
    }
    handleReset();
  }
  const handleReset=(e)=>{
    setForm(initialForm);
    setDataToEdit(null);
  }
  return(
    <div>
      <h3>{dataToEdit?"Editar": "Agregar"}</h3>
    <form onSubmit={handleSubmit}>
      <input type="text" name="first_name" placeholder='Nombre'onChange={handleChange} value={form.first_name}/>
      <input type="text" name="last_name" placeholder='Apellido'onChange={handleChange} value={form.last_name}/>
      <input type="text" name="email" placeholder='Correo Electrónico'onChange={handleChange} value={form.email}/>
      <input type="submit" value="Enviar" />
      <input type="reset" value="Limpiar" onClick={handleReset}/>
    </form>
    </div>
      
  )

}
export default CrupForm