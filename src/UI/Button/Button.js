import './Button.css';

function Button({onClick, value, color}) {
    const bStyle = {
        backgroundColor: color,
    };

    return (
        <>
            <div className="button-component">
                <button className="boton" onClick={onClick} style={bStyle}>
                    {value}
                </button>
            </div>
        </>
    );
}

export default Button;