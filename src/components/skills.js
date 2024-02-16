import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container , Row , Col } from "react-bootstrap";
import carImg1 from "../img/3.png"
import carImg2 from "../img/4.png"
import carImg3 from "../img/5.png"
import carImg4 from "../img/6.png"
import carBack from "../img/7.png"





const Skills = ()=>{


  // the Carousel bootstrap
  
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
 




      return(

        <section className="theSkills" id="skills">

        <Container>
            <Row>
                <Col>
                <div className="theSkillsUp">
                    <h2>Skills</h2>
                    <p>You Can See My Skills Here</p>
                         <Carousel responsive={responsive} infinite={true} className="theSkillsCar">
                            <div className="carItem">
                            <img src={carImg1}/>
                                <h4>FrontEnd Development</h4>
                            </div>

                            <div className="carItem">
                            <img src={carImg2}/>
                                <h4>Cyber Security</h4>
                            </div>

                            <div className="carItem">
                            <img src={carImg3}/>
                                <h4>Web Development</h4>
                            </div>

                            <div className="carItem">
                            <img src={carImg4}/>
                                <h4>Data Science</h4>
                            </div>
                         </Carousel>
                </div>
                <img className="carBack" src={carBack}/>
                </Col>
            </Row>
        </Container>


        </section>


      )



}

export default Skills