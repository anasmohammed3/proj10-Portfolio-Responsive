import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedinIn,faFacebookF,faInstagram} from '@fortawesome/free-brands-svg-icons'





const Footer = ()=>{

  return(


    <section className="footer">


      <h2><span>p</span>ortfolio</h2>
    
      <div className="socialLinkss">

        <div className="soc">
            
        <a className="socialLink" href="https://www.linkedin.com/in/anas-youssef-258935265" target="_blank">
          <FontAwesomeIcon className="i" icon={faLinkedinIn} />
        </a>
        <a className="socialLink" href="https://www.facebook.com/anas.youssif.5?mibextid=2JQ9oc" target="_blank">
          <FontAwesomeIcon className="i" icon={faFacebookF} />
        </a>
        <a className="socialLink" href="https://www.instagram.com/anas_sx0?igsh=MWc3NGFldGJwY2Jtcg==" target="_blank">
          <FontAwesomeIcon className="i" icon={faInstagram} />
        </a>

        </div>
       
            <div className="words">
            <h4>--Copyright 2024-- All Rights Reserved Here By Anas Mohammed</h4>
            </div>

      
      </div>
      
    

        










    </section>




  )



}

export default Footer