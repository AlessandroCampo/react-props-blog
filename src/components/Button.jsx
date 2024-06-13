const Button = () => {
    const buttonStyle = {
        backgroundColor: "#daa521",
        color: "black",
        textTransform: "upppercase",
        border: "0",
        cursor: "pointer",
        paddingBlock: "10px",
        maxWidth: "150px",
        borderRadius: "10px",
        fontWeight: "bold",
        border: "2px solid black"
    }
    return (
        <button style={buttonStyle}>
            Read more
        </button>
    )
};

export default Button;