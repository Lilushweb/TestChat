import React from 'react'
import Telegram from './svg/Telegram'
import Robot from './svg/Robot'
import Mail from './svg/Mail'
import './style/ref.css'

export default function Ref() {
    return (
        <div className='refContainer'>
            <span className='ref'>Ссылки</span>
            <span className='flexDefFooter'><Telegram /> Сообщество с телеграм</span>
            <span className='flexDefFooter'><Robot /> Телеграм бот</span>
            <span className='flexDefFooter'><Mail /> email@bothub.chat</span>
        </div>
    )
}
