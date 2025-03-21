import styles from "./Input.module.css";
 
 function Input({ type, text,  name, id, placeholder, value, handleChange }) {
 
   return (
 
     <div className={styles.form_control}>
     <label htmlFor={name}>{text}</label>
       <input
         type={type}
         name={name}
         id={id}
         placeholder={placeholder}
         value={value}
         onChange={handleChange}/>
     </div>
 
   );
 }
 
 export default Input;