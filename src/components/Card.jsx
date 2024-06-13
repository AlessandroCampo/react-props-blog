import Button from "./Button";
import placeholder from '../assets/placeholder.jpg'
import Chip from "./Chip";
import selectColor from "../utils";





const Card = ({ title, content, image, tags }) => {
    return (
        <>
            <div className="card bg-zinc-300">
                <figure>
                    <img src={image || placeholder} alt="post-image" />
                </figure>
                <div className="card-bottom">
                    <h2 className="font-bold my-2 text-2xl">
                        {title}
                    </h2>
                    <p>
                        {content}
                    </p>
                    <Button />
                    <div className="tags-container flex items-center gap-3 my-2">
                        {
                            tags.map((t, i) => (
                                <Chip content={t} color={selectColor(t)} key={i} />
                            ))
                        }
                    </div>


                </div>

            </div>

        </>
    )
};


export default Card;