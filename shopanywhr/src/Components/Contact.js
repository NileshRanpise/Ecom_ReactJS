import React from "react";
import { Card, Button, Container, Row, Col,Form,FloatingLabel } from "react-bootstrap";
import "../Styles/Card.css"

const Contact = () => {
  return (
    <>
      <>
        <Container>
       
        <div className="row my-3">
            <div className="col-sm-6 offset-sm-3">
                {/* <h3 className="maintitle"> Contact Us </h3> */}
                <hr></hr>

                <form  className="shadow p-5">
                <h3 className="maintitle"> Contact Us </h3>
                  <hr></hr>

                    <div className="mb-3">
                        <label className="form-label" for="name" placeholder="Enter Name"> Name :</label>
                        <input type="text" className="form-control" name="name" required />
                    </div>

                    <div className="mb-3">
                        <label for="email" className="form-label" placeholder="Enter email" >Email Id :</label>
                        <input type="email" name="email" className="form-control" required />
                    </div>

                    <div className="mb-3">
                        <label for="phone" className="form-label" placeholder="Enter Phone no." >Phone no :</label>
                        <input type="number" name="phone" className="form-control" required />
                    </div>
                    <div >
                        <button type="submit" id="btn" className="btn btn-danger">Submit</button>
                    </div>
                    <br></br>
                   

                </form>
               
            </div>
        </div>
    


        </Container>
      </>
    </>
  );
};

export default Contact;
