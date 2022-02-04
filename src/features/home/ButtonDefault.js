import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';

const ButtonDefault = ({text = "Войти"}) => {
    return (
        <Button className='btn-default'>{text}</Button>
    );
};

ButtonDefault.propTypes = {};

export default ButtonDefault;