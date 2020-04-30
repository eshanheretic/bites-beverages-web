import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
class Restaurants extends Component {
    render() {
        return (
            <div className='res-cards'>
                <CardGroup>

                    <Card>
                        <Card.Img variant="top"
                         src="https://www.madhurasrecipe.com/media/Marathi-Recipe-Thali-1.jpg" />
                        <Card.Body>
                            <Card.Title>Amchi Bhojan</Card.Title>
                            <Card.Text>
                                This Restaurant speacializes in traditional Marathi food as well as the famous 
                                Mumbai street food.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <button class="btn  btn-outline-dark">Order Now!</button>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top"
                         src="https://www.madhurasrecipe.com/media/Marathi-Recipe-Thali-1.jpg" />
                        <Card.Body>
                            <Card.Title>Amchi Bhojan</Card.Title>
                            <Card.Text>
                                This Restaurant speacializes in traditional Marathi food as well as the famous 
                                Mumbai street food.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <button class="btn  btn-outline-dark">Order Now!</button>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top"
                         src="https://www.madhurasrecipe.com/media/Marathi-Recipe-Thali-1.jpg" />
                        <Card.Body>
                            <Card.Title>Amchi Bhojan</Card.Title>
                            <Card.Text>
                                This Restaurant speacializes in traditional Marathi food as well as the famous 
                                Mumbai street food.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <button class="btn  btn-outline-dark">Order Now!</button>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div>
        )
    }
}
export default Restaurants;