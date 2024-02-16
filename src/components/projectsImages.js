import React from "react";
import { Col } from "react-bootstrap";

const projectImages =({title,description,imageUrl}) =>{


    return(

        <Col sm={6} md={4}>
            <div className="projImg">
                <img src={imageUrl}/>
                <div className="projText">
                <h4>{title}</h4>
                <span>{description}</span>
                </div>
            </div>
        </Col>
    )

}


export default projectImages