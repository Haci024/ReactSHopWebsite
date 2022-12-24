import React from 'react';
import "../Pages/contact.css";
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { Button, Container, Col, Row, Table} from 'react-bootstrap';
const Contact=()=>{
    const [theme] = useThemeHook();
    return(

        <Container className="py-4 mt-5">
              <div style={{width:"300px",height:"400px", backgroundColor:"red"}}>
       Salam
       </div>
            </Container>
  
    )
        
   
}
export default Contact;
