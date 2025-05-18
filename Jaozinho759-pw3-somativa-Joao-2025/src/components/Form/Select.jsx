import style from './Select.module.css'
 
 function Select({text, name, id, handleChange}){
     return(
         <div className={style.form_control}>
 
             <label htmlFor={name}>{text}</label>
 
             <select name={name} id={id} onChange={handleChange}>
                 <option value=''>Selecione uma categoria</option>
                 <option value='Ficcção Cientifica'>Ficcção Cientifica</option>
                 <option value='Fantasia Heroica'>Fantasia Heroica</option>
                 <option value='Suspense'>Suspense</option>
                 <option value='Terror'>Terror</option>
             </select>
         </div>
 
     )
 }
 
 export default Select;