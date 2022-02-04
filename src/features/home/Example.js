import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Navbar = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    height: 100%;
    position: absolute;
    width: 223px;
    background: radial-gradient(209.86% 47.01% at -23.54% 100%, rgba(255, 246, 35, 0.102) 0%, rgba(255, 243, 35, 0) 100%), #131529;
    background-blend-mode: color-dodge, normal;
    box-shadow: 0px 4px 119px rgba(0, 0, 0, 0.16);
`

const Logo = styled.img`
    width: 124.97px;
    height: 25px;
    margin-top: 48px;
`

const NavLink = styled(Link)`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.4px;
    color: #7E7BA2;
    text-decoration: none;
    width: 100%;
    padding: 9px 20px !important;
    display: block;
`

const Icon = styled.i`
    color: #7E7BA2;
    margin-right: 10px;
`

const List = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
`
const ListItem = styled.li`
    text-align: left;
    width: 100%;
    &:hover{
        a,i{
            color: #FFFFFF;
            text-decoration: none !important;
        }
    }

    &.selected{
        border-right: 1px solid #FFF323;
        background: linear-gradient(270deg, #FFF323 -473.83%, rgba(255, 243, 35, 0) 83.89%);
        a,i{
            color: #ffffff;
        }
    }
`



const Example = () => {

    const [current, setcurrent] = useState(0);
    const router = useSelector(state => state.router);
    useEffect(() => {
        switch (router.location.hash) {
            case '#chart': setcurrent(1);
                break;
            case '#ring': setcurrent(2);
                break;
            case '#note': setcurrent(3);
                break;
            default: setcurrent(0)
        }
        console.log(router.location.hash);


    }, [router]);
    return (
        <Navbar>
            <Logo src={require('../../images/Logo.png')} />
            <List>
                <ListItem className={current == 0 ? 'selected' : ''}>
                    <NavLink to="#map"><Icon className='fas fa-map' />Мои поля</NavLink>
                </ListItem>
                <ListItem className={current == 1 ? 'selected' : ''}>
                    <NavLink to="#chart"><Icon className='fas fa-chart-line' />Диагностика</NavLink>
                </ListItem>
                <ListItem className={current == 2 ? 'selected' : ''}>
                    <NavLink to="#ring"><Icon className='fas fa-life-ring' />Рекомендации</NavLink>
                </ListItem>
                <ListItem className={current == 3 ? 'selected' : ''}>
                    <NavLink to="#note"><Icon className='fas fa-sticky-note' />Заметки</NavLink>
                </ListItem>
            </List>
        </Navbar>
    );
};

Example.propTypes = {};

export default Example;