import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from 'antd';
import { MailOutlined, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import ButtonDefault from './ButtonDefault';

const Loginpage = () => {
    return (
        <div className='login-page'>

            <div className='logo'>
                <img src={require('../../images/Logo.png')} alt='logo' />
            </div>
            <div className='login-form'>
                <div className='line-top'></div>
                <div className='line-bottom'></div>
                <div className='navigation'>
                    <Link to="">Вход</Link>
                    <Link to="" className='disabled'>Регистрация</Link>
                </div>
                <div className='inputs'>
                    <Input size="large" value="agro@gmail.com" prefix={<i className='fas fa-envelope' />} />
                    <Input.Password
                        size="large"
                        value="agro@gmail.com"
                        prefix={<i className='fas fa-key' />}
                        iconRender={()=><span className='font-poppins'>Показать</span>}
                    />
                    <Checkbox className='remember-me'>Запомнить меня</Checkbox>
                    <ButtonDefault />
                    <Link className='forgot-password'>Забыли пароль?</Link>
                </div>
            </div>

        </div>
    );
};

Loginpage.propTypes = {};

export default Loginpage;