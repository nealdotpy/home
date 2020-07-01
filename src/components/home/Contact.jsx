import React, { Component} from "react";

class Contact extends React.Component {
 render() {
    return (
      <div id="contact" className="jumbotron jumbotron-fluid bg-transparent m-0">
        <h1 className="display-4 mb-4 text-center">Contact</h1>
            <center>
                <div className=" d-right col-5 p-0 d-lg-block p-0 ml-5 mr-5 mb-0 mt-5">
                    <p className="lead">Do you want to
                        <a href="mailto:nealpatel2021@gmail.com" style={{color: "#cc6600"}}> email me?</a>
                    </p>
                </div>
            </center>
      </div>
    );    
  }
}

export default Contact;
