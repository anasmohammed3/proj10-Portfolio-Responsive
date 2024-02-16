import React from "react";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedinIn,faFacebookF,faInstagram} from '@fortawesome/free-brands-svg-icons'
import { Navbar , Container , Nav } from "react-bootstrap";


const Navbar1 = ()=>{

    // this is when i make scroll the background turn to black
    window.addEventListener('scroll', function() {
        var navbar = document.querySelector('.navbar1');
        if (window.scrollY > 0) {
            navbar.classList.add('navbar-black');
        } else {
            navbar.classList.remove('navbar-black');
        }
    });
    

    return (
   

        // bootstrap

    <div className="navbar1">
    <Navbar expand="lg">
    <Container>
    <Navbar.Brand href="#home" className="port"><span>p</span>ortfolio</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" >
        <span className="navbar-toggler-icon"></span>
    </Navbar.Toggle>
    <Navbar.Collapse id="basic-navbar-nav">

    <Nav className="ms-auto">
    <Nav.Link href="#home" className="link" style={{ color: '#fff' }}>Home</Nav.Link>
    <Nav.Link href="#skills" className="link" style={{ color: '#fff' }}>Skills</Nav.Link>
    <Nav.Link href="#projects" className="link" style={{ color: '#fff' }} >Projects</Nav.Link>
    </Nav>


            <span className="navbar-text">
                <div className="socialLinks">
                <a className="socialLink" href="https://www.linkedin.com/in/anas-youssef-258935265" target="_blank">
                    <FontAwesomeIcon className="i" icon={faLinkedinIn} /></a>

                <a className="socialLink" href="https:www.facebook.com/anas.youssif.5?mibextid=2JQ9oc" target="_blank">
                    <FontAwesomeIcon className="i" icon={faFacebookF} />
                </a>
                <a className="socialLink" href="https:www.instagram.com/anas_sx0?igsh=MWc3NGFldGJwY2Jtcg==" target="_blank">
                    <FontAwesomeIcon className="i" icon={faInstagram} />
                </a>
                </div>
             <button>Let's Connect</button>
             </span>
        
    </Navbar.Collapse>
    </Container>
    </Navbar>
    </div>
    )
}

 

export default Navbar1;