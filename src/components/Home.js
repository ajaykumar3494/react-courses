import React, { useEffect } from "react";
import { Button, Container } from "reactstrap";



const Home = () => {

    useEffect(() => {

        document.title = "Home ";

    }, []);


    return(
      <div className="text-center">
       
           <h1> Learn code with Ajay</h1>
           <p> 
               This is developed by Ajay for learning purpose backened
                is on spring boot
               and frontend and reactjs
           </p>
           <Container>
               <Button color="primary">Start Using</Button>
           </Container>
 
      </div>

    )
}
export default Home;