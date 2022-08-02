import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";


import {Row, Col,Container} from 'reactstrap';

const Footer = () => {
return (
   <Row className="footer ">
       <div className="col-md-1"></div>
       
  
       
 <Col>   <li className="list-inline-item"><a href="#">Hakkında</a></li>
      <li className="list-inline-item"><a href="#">Reklam</a></li>
   <li className="list-inline-item"><a href="#">İşletme</a></li>
      </Col>
      <Col>  <li className="list-inline-item">2007'den bu yana karbon nötr</li></Col>
      <Col>
      
      <li className="list-inline-item"><a href="#">Gizlilik</a></li>
          <li className="list-inline-item"><a href="#">Şartlar</a></li>
              <li className="list-inline-item"><a href="#">Ayarlar</a></li></Col>
   </Row>
 
);
};
export default Footer;
