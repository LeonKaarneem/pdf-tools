import './Button.css';

export const buttonTypes = {
    "primary": "primary",
    "secondary": "secondary",
}

const Button = (props) => {
    return (
        <div className={`button ${props.type === buttonTypes.primary ? 'primary' : 'secondary'}`}>
            {props.name}
        </div>
    )
}

export default Button;