import { useState } from "react";


function Card({id, Info, name, image, price, removeTour})
{
    const [readMore, setReadmore] = useState(false);
    const description = Info ? (readMore ? Info : `${Info.substring(0, 190)}....`) : '';

    function readMoreHandler()
    {
        setReadmore(!readMore);
    }
    
    return (
        <div className="card">
            <img src={image} className="image" alt="ImHelloage"></img>
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹ {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>

                <div className="description">
                    {description}
                    <span className="read-more" onClick={readMoreHandler}>
                        {readMore ? `Show Less`:`Read More`}
                    </span>
                </div>
            </div>
            <button className="btn-red" onClick={() => removeTour(id)}>
                Not Interested
            </button>
        </div>
    );
}

export default Card;