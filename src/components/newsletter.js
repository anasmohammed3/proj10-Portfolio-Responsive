import React from "react";
import { useState } from "react";
import {Row, Col } from "react-bootstrap";




const Newsletter = () => {

    const [email, setEmail] = useState("");
    
    const handleSumbitClick = () => {
        if (!email.includes("@")) {
          alert("Invalid email address");
        }
      
        setEmail("");
        window.location.reload();
      };




    return(


        <section className="news">

        <Col lg={12}>
        
        <div className="theBox">
            <Row>

                <Col lg={12} md={6} xl={5}>
            <h3>see my projects at once & leave here your e-mail address</h3>
                </Col>

                <Col md={6} xl={7}>

                    <form>
                        <div className="theBoxEmail">

                        <input
                    type="text"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                    <button type="button" onClick={handleSumbitClick}>
                    sumbit
                  </button>

                        </div>
                    </form>
                </Col>
            </Row>
        </div>
        </Col>
        </section>
    )

}


export default Newsletter