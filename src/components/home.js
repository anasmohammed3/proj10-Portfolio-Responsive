import React from "react";
import { Container , Row , Col } from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import homeImg from "../img/2.png"
import { useState,useEffect ,useRef  } from "react";




const Home = ()=>{


    // this is the loop number that appear in the screen
    const [loopNum,setLoopNum] = useState(0)

    // This is what says true or false, meaning that the word is written or deleted. We wrote a false because we start writing the word.
    const [isDeleting,setIsDeleting] = useState(false)

    // this is the words that what i want to do with the effect
    const effect = ["Web Developler" , "Web Designer" , "Frontend Developer"]

    // This is because the component knows what text is being displayed
    const [text,setText] = useState("")

    // this for to determine how quickly one letter appears after typing the first letter
    const [delta,setDelta] = useState(300-Math.random()*100)

    // This fixed period indicates the amount of time that elapses between one additional letter being written
    const period = 2000

    

   // This useEffect hook runs when the 'text' state changes and manages the interval for updating the text
useEffect(() => {
    // Set up an interval to call the 'tick' function every 'delta' milliseconds
    var ticker = setInterval(() => {
        tick()
    }, delta)

    // Clean up the interval when the component unmounts or when 'text' changes
    return () => {
        clearInterval(ticker)
    }
}, [text])

// This function updates the text being displayed, adding or removing characters to simulate typing or deleting
    const tick = () => {

    // Get the current word to display based on the 'loopNum' state
    var lo = loopNum % effect.length
    var fullText = effect[lo]
    
    // Update the 'text' state by adding or removing a character
    var updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

    // Update the 'text' state with the new text
    setText(updatedText)

    // Adjust the speed of typing or deleting if needed
    if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2)
    }

    // Check if the typing or deleting is complete, and update states accordingly
    if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true)
        setDelta(period)
    } else if (isDeleting && updatedText === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        setDelta(500)
    }
}



    // ----------------- this is the sentences on the left -----------------
    return (
   
        <section className="theHome" id="home">
            <Container>
                <Row className="align-items-center ">
                    <Col xs={12} md={6} xl={7}>
                         <span className="tagline">Welcome to my Portfolio</span>
                         <h1>Hi! I'm <span className="name">Anas</span> Mohammed Youssef, I'm<span className="wrap"> {text}</span></h1>
                         <p>I'm an Experienced frontend developer proficient in HTML,
                             CSS, Bootstrap,JavaScript and React, with 1 years of 
                             experience. Specializes in creating responsive web
                              applications with a strong emphasis on design. 
                               </p>
                         <button> <a href="#contact">Let's connect </a><FontAwesomeIcon className="theHomeIcon" icon={faArrowRight} /></button>
                    </Col>

                    <Col xs={12} md={6} xl={5}>
                        <img className="theHomeImg" src={homeImg}/>
                     
                    </Col>
                </Row>
            </Container>
        </section>
  

    )
}

 

export default Home;