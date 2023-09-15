import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './header.scss'
const logo = require('../../images/logo.svg')
const fav = require('../../images/fav.svg')
const person = require('../../images/person.svg')

const Header: React.FC = () => {
    return (
        <div className='header'>
            <div className='header__container container'>
                <div className='header__logo'>
                    <Link to='/'>
                        <img src={logo.default} alt='Logo' />
                    </Link>
                </div>
                <ul className='header__list'>
                    <NavLink to='/about' className={({ isActive }) => (isActive ? 'header__item header__item--active' : 'header__item')}>Мужское</NavLink>
                    <NavLink to='/about' className={({ isActive }) => (isActive ? 'header__item header__item--active' : 'header__item')}>Женское</NavLink>
                    <NavLink to='/about' className={({ isActive }) => (isActive ? 'header__item header__item--active' : 'header__item')}>Унисекс</NavLink>
                    <NavLink to='/about' className={({ isActive }) => (isActive ? 'header__item header__item--active' : 'header__item')}>Sale</NavLink>
                    <NavLink to='/FAQ' className={({ isActive }) => (isActive ? 'header__item header__item--active' : 'header__item')}>FAQ</NavLink>
                    <NavLink to='/about' className={({ isActive }) => (isActive ? 'header__item header__item--active' : 'header__item')}>Безопасная сделка</NavLink>
                    <NavLink to='/about' className={({ isActive }) => (isActive ? 'header__item header__item--active' : 'header__item')}>Правила пользования</NavLink>
                </ul>
                <ul className='header__info info'>
                    <li className='info__item'>
                        <img src={fav.default} alt='Fav' />
                    </li>
                    <li className='info__item'>
                        <img src={person.default} alt='Person' />
                    </li>
                    <li className='info__item'>
                        <a className='info__btn btn' href='##'>Подать</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header