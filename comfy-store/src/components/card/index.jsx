import React from "react";

import "./index.css";

const Card = ({data})=>{

     return(
        <>
        <div className="card-wrapper">
             <div className="image">
                <img src={data.image} alt={altname} />
             </div>
             <div className="img-info">
                <h2 className='title'>{data.title}</h2>
                <span className="price">{data.price}</span>
             </div>
        </div>
        </>
     )
}
export default Card