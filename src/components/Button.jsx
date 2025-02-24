import style from "./Button.module.css"
import { RiInformation2Line as Details } from "react-icons/ri";

function Button({label}) {

    return (
        <div className={style.buttonContainer}>
            <button><Details className={style.iconDetails} />{label}</button>
        </div>
    )
}

export default Button;