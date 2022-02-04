import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navbar from './Navbar';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
`

const MainArea = styled.div`
    margin-left: 215px;
    width: 100%;
    background-color: #ff0000;
`

const Dashboard = () => {
    return (
        <Container>
            <Navbar />
            <MainArea>
                123
            </MainArea>
        </Container>
    );
};

Dashboard.propTypes = {};

export default Dashboard;