import style from './Select.module.css'
 
 function Select({text, name, id, handleChange}){
     return(
         <div className={style.form_control}>
 
             <label htmlFor={name}>{text}</label>
 
             <select name={name} id={id} onChange={handleChange}>
                 <option value=''>Selecione uma categoria</option>
                 <option value=''>Ficcção Cientifica</option>
                 <option value=''>Fantasia Heroica</option>
                 <option value=''>Suspense</option>
                 <option value=''>Terror</option>
             </select>
         </div>
 
     )
 }
 
 export default Select;