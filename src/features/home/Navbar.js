import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Sidebar = styled.div`
    background: #101223;
    width: 215px;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
`
const NavLink = styled(Link)`

`

const Navbar = () => {
    return (
        <Sidebar>
            <NavLink>Мои поля</NavLink>
            <NavLink>Диагностика</NavLink>
            <NavLink>Рекомендации</NavLink>
            <NavLink>Заметки</NavLink>
        </Sidebar>
    );
};

Navbar.propTypes = {};

export default Navbar;