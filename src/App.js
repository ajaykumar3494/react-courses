import React, { Fragment } from "react";
import logo from './logo.svg';
import './App.css';
import { Button, Col, Container, Row } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import Header from './components/Header';
import Home from './components/Home';
import Course from './components/Course';
import Allcourses from './components/Allcourses';
import AddCourse from './components/AddCourse';
import Menus from './components/Menus';
import { BrowserRouter as Router, Route,  Routes} from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';




function App() {

      const btnHandle = () => {
       toast.error("done", {
         position: "top-center",
       });
      };

  return (
    <div>
      
     <Router>
     <Container>
       <Header />
       <Row>
         <Col md={4}>
         <Menus />
         </Col>


         <Col md={8}>

         <Fragment>
         
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/add-course" element={<AddCourse />} />
            <Route exact path="/view-courses" element={<Allcourses />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            
          </Routes>
        </Fragment>
         </Col>
       </Row>
     </Container>
     </Router>
    </div>
  );
}
export default App;
