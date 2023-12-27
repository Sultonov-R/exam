import React from "react";
import "./index.css";

const DirectLinks = (props)=> {

    const{href, title, classname, linkComponent}=props;


    return(

        <>
        <div className="direct-link" >
            <a className={classname} href={href}>{title}</a>
            {linkComponent}
        </div>
        </>
    )
}

export default DirectLinks