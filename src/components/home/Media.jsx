import React, {Component} from "react";
import ProjectCard from "./ProjectCard";
import Card from "react-bootstrap/Card"
import CardDeck from "react-bootstrap/CardDeck"
import Button from "react-bootstrap/Button"
import TradeBotPic from "../../editable-stuff/trade_bot_pic.jpg";
import MLCamPic from "../../editable-stuff/ml_cam_pic.jpg";



class Media extends React.Component {


 render() {
    return (
      <div id="media" className="jumbotron jumbotron-fluid bg-transparent m-0">
        <div className="container container-fluid p-5">
        <h1 className="display-4 pb-5">Media Room</h1>
        <CardDeck> 
              <Card>
                <Card.Img class="articlepic" variant="top" src={TradeBotPic} />
                <Card.Body>
                  <Card.Title>If I Can’t Make Money, My Python Trading Bot Will…</Card.Title>
                  <Card.Text>
                    When I was a student in my first year at University, my classes bore me. 
                    I wanted to learn how to make money to get paid to go to the classes I didn’t like.
                    Like everyone that has seen <i>The Wolf</i>...
                  </Card.Text>
                  <Button href="https://medium.com/@nealdotpy/if-i-cant-make-money-my-python-trading-bot-will-368a592b3c6d" variant="dark">Continue Reading</Button>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={MLCamPic} />
                <Card.Body>
                  <Card.Title>I Couldn’t Decided What Camera To Buy So I Made One With A Brain</Card.Title>
                  <Card.Text>
                    Recently, I’ve taken up uploading videos to YouTube that combine various passions of mine including: 
                    coding and comedy. I’ve been trying to decide what kind of camera I want to get, and while it may 
                    not be an urgent problem to solve, I ended up researching cameras for longer than I’d like to admit.
                    <p></p>
                    While researching, I had an idea to build a camera. I had built a computer many times before, so I 
                    figured why not look into it...
                  </Card.Text>
                  <Button href="https://medium.com/@nealdotpy/i-couldnt-decided-what-camera-to-buy-so-i-made-one-with-a-brain-c3e7a83faa0e" variant="dark">Continue Reading</Button>
                
                </Card.Body>
              </Card>
          </CardDeck>
          </div> 
      </div>
    );    
  }
}


export default Media;
