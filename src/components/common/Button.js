import './Button.css';
import {useRef} from "react";

export const buttonTypes = {
    "primary": "primary",
    "secondary": "secondary",
}

const Button = (props) => {
    const inputRef = useRef(null);

    const handleClick = () => {
        if (props.inputType === "file") {
            inputRef.current.click()
        } else {
            props.onClick();
        }
    }

    const handleFileSelect = (event) => {
        props.onClick(event);
    }

    return (
        <div onClick={handleClick} className={`button ${props.buttonType === buttonTypes.primary ? 'primary' : 'secondary'}`}>
            {props.name}
            <input accept="application/pdf" onChange={handleFileSelect} type="file" ref={inputRef} />
        </div>
    )
}

export default Button;