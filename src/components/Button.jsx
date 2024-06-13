const Button = () => {
    const buttonStyle = {
        backgroundColor: "#daa521",
        color: "white",
        textTransform: "upppercase",
        border: "0",
        cursor: "pointer",
        paddingBlock: "10px",
        maxWidth: "150px"
    }
    return (
        <button style={buttonStyle}>
            Read more
        </button>
    )
};

export default Button;