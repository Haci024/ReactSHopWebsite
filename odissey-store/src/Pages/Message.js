import React from 'react';

import { useThemeHook } from '../GlobalComponents/ThemeProvider';

import 'bootstrap/dist/css/bootstrap.min.css';

import emailjs from "emailjs-com";
import './Message.css';



const MyAccount = () => {
    const [theme] = useThemeHook();
    function SendEmail(e){
      e.preventDefault();
      emailjs.sendForm(
     "service_400l19d",
      "template_0etlah6",
      e.target,
      'dsfS01F4sz-Wi_uRj'
      ).then(res=>{console.log(res)}).catch(err=>{console.log(err)})
     }

    return (
        <section id="contact">
  
  <h1 className="section-header">Mesaj göndər</h1>
        
        <div className="contact-wrapper">
        
     
          
          <form id="contact-form" className="form-horizontal" role="form" onSubmit={SendEmail}>
             
            <div className="form-group">
              <div className="col-sm-12">
                <input type="text" className="form-control" id="name" placeholder="NAME" name="name"   />
              </div>
            </div>
      
            <div className="form-group">
              <div className="col-sm-12">
                <input type="email" className="form-control" id="email" placeholder="EMAIL" name="user_mail"  />
              </div>
            </div>
      
            <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message" ></textarea>
            
            <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
              <div className="alt-send-button">
                <i className="fa fa-paper-plane"></i><span className="send-text">SEND</span>
              </div>
            
            </button>
            
          </form>
          
    
          
        
      
            
      
        
          
        </div>
        
      </section>  
        
    )
};

export default MyAccount;