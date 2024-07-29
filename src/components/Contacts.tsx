import React from 'react'
import Telegram from './svg/Telegram'
import Habr from './svg/Habr'
import Blog from './svg/Blog'
import './style/contacts.css'

export default function Contacts() {
    return (
        <div className='contactsContainer'>
            <span className='blog'>Блог</span>
            <span className='flexDefFooter'><Blog />Наш блог</span>
            <span className='flexDefFooter'><Habr />Habr</span>
            <span className='flexDefFooter'><Telegram />Телеграм</span>
        </div>
    )
}
