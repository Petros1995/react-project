import React from 'react';
import {Carousel, Container, Card, CardDeck, Button } from 'react-bootstrap';
export default class Home extends React.Component {
    render() {
        return (
          <>
            <Carousel>
  <Carousel.Item>
    <img
    width={500}
    height={500}
      className="d-block w-100"
      src="https://miro.medium.com/max/900/1*q3fj68JNOx8BR1bTOVzz7Q.jpeg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    width={500}
    height={500}
      className="d-block w-100"
      src="https://i0.wp.com/medialist.info/wp-content/uploads/2018/05/2018_05_29_medialist_startup-team.jpg?fit=1280%2C612&ssl=1"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    width={500}
    height={500}
      className="d-block w-100"
      src="https://www.metasource.co/wp-content/uploads/2017/11/Startup-tech-team2-800x400.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<Container>
  <h2 className="text-center m-4">Our Team</h2>
          <CardDeck>
          <Card >
  <Card.Img variant="top" src="https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
<Card >
  <Card.Img variant="top" src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
<Card >
  <Card.Img variant="top" src="https://images.pexels.com/photos/3931512/pexels-photo-3931512.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
          </CardDeck>
</Container>
</>

        )
    }
}