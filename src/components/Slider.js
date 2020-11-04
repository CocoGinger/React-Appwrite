import React from 'react'
import {Row,Container,Col,ListGroup,ListGroupItem,Image,Button} from 'react-bootstrap'
import headingImage from '../images/image.jpeg'


const Slider = () => {
    return (
        <>
              <Container fluid className=' mt-5 '>
                <Row>
                    <Col md={3} className='m-auto'>
                        <ListGroup variant='flush'>
                            <ListGroupItem  className='font-weight-bolder'>
                                <h2>Quality Calibration Bureau</h2>
                            </ListGroupItem>
                            <ListGroupItem>
                                <p>
                                    kjfkkhoagkjhvehvnhvj hfuifynigcosniochmu ifyguiycosycyug ycuivgncioesuihru uivyngnigunh kuryngunngvyui rugvnugi ynvuygunt uynivvntui uynviyngu unvhnuig
                    </p>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Button type='Button' className="btn btn-success" >
                                    Learn More
                     </Button>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col md={5} className='m-auto d-block'>
                        <Image src={headingImage} alt="" className=''></Image>
                    </Col>
                </Row>
            </Container>

          
        </>
    )
}

export default Slider
