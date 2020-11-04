import React from 'react'
import {Container,Row,Col,Card, Button} from 'react-bootstrap'
import headingImage from '../images/image.jpeg'

const ServicesSection = () => {
    return (
        <>
            <Container className='pt-lg-5 mt-lg-4 '>

                <h2 className='text-center '>Our Services</h2>

            </Container>
            <Container>
                <Row>
                    <Col>
                    
                    <Card className='my-3 p-3 rounded'>
                        <Card.Img  src={headingImage}  alt=''  />
                        <Card.Body>
                            <Card.Title>Magnetic Strength Testing</Card.Title>
                            <Button href="#" class="btn btn-primary">Learn More</ Button>
                        </Card.Body>

                    </Card>
                    </Col>
                    <Col>
                    <Card className='my-3 p-3 rounded border-success mb-3'>
                        <Card.Img  src={headingImage}  alt='' />
                        <Card.Body>
                            <Card.Title>Magnetic Strength Testing</Card.Title>
                            <Button href="#" class="btn btn-primary">Learn More</ Button>
                        </Card.Body>

                    </Card>
                    </Col>
                    <Col>
                    <Card className='my-3 p-3 rounded'>
                        <Card.Img  src={headingImage}  alt='' />
                        <Card.Body>
                            <Card.Title>Magnetic Strength Testing</Card.Title>
                            <Button href="#" class="btn btn-primary">Learn More</ Button>
                        </Card.Body>

                    </Card>
                    </Col>
                    <Col>
                    <Card className='my-3 p-3 rounded'>
                        <Card.Img  src={headingImage}  alt='' />
                        <Card.Body>
                            <Card.Title>Magnetic Strength Testing</Card.Title>                           
                            <Button href="#" class="btn btn-primary">Learn More</ Button>
                        </Card.Body>

                    </Card>
                    </Col>
                    
                </Row>
            </Container>
        </>
    )
}

export default ServicesSection
