import './Button.css';

function Button({onClick, value, color}) {
    const bStyle = {
        backgroundColor: color,
    };

    return (
        <>
            <button className="boton" onClick={onClick} style={bStyle}>
                {value}
            </button>
        </>
    );
}

export default Button;