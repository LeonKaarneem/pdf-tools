
export const buttonTypes = {
    "primary": "primary",
    "secondary": "secondary",
}

const Button = (props) => {
    return (
        <div>
            {props.name}
            {props.type}
        </div>
    )
}

export default Button;