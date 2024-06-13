import Button from "./Button";



const Card = ({ title, content, image }) => {
    return (
        <>
            <div className="card">
                <figure>
                    <img src={image} alt="post-image" />
                </figure>
                <div className="card-bottom">
                    <h2 style={{ marginTop: "1.5rem" }}>
                        {title}
                    </h2>
                    <p>
                        {content}
                    </p>
                    <Button />
                </div>

            </div>

        </>
    )
};


export default Card;