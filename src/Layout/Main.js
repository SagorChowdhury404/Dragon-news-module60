import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

// import Home from '../Pages/Home/Home/Home';
import Footer from '../Pages/Shared/Footer/Footer';
import LeftSide from '../Pages/Shared/LeftSide/LeftSide';
import RightSide from '../Pages/Shared/RightSide/RightSide';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>

                    <Col lg='2'>
                        <LeftSide></LeftSide>
                    </Col>

                    <Col lg='7'>
                        {/* <Home></Home> */}
                        <Outlet></Outlet>
                    </Col>

                    <Col lg='3'>
                        <RightSide></RightSide>
                    </Col>

                </Row>
                <Footer></Footer>
            </Container>

        </div>
    );
};

export default Main;