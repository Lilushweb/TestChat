import React, { useState } from 'react'
import "./style/heder.css"
import Earth from './svg/Earth'
import Arrow from './svg/Arrow'
import Menu from './svg/Menu'
import ElementDropDownMenu from './ElementDropDownMenu'
import Aggregator from './svg/Aggregator'
import Business from './svg/Business'
import TelegramDropDown from './svg/TelegramDropDown'
import UnArrow from './svg/UnArrow'
import Close from './svg/Close'
import DropDownMenu from './DropDownMenu'

export default function Heder() {
    const [dropDownMenu1, setDropDownMenu1] = useState(false)
    const [dropDownMenu2, setDropDownMenu2] = useState(false)
    const [arrowFlag, setArrowFlag] = useState(false)
    const [closeAndMenu, setCloseAndMenu] = useState(false)
    return (
        <header>
            {dropDownMenu1 &&
                <div className='dropMenuSmallWidth'>
                    <div className='productsDropDown' onClick={() => {
                        setDropDownMenu2(!dropDownMenu2)
                        setArrowFlag(!arrowFlag)
                    }}>
                        <button className='dropDownEl' >Продукты</button>
                        {arrowFlag ? <UnArrow /> : <Arrow classNameEl='none' />}
                    </div>
                    {dropDownMenu2 &&
                        <div className='bgFlexContainer'>
                            <ElementDropDownMenu svgIcons={<Aggregator />} bigText='Агрегатор нейросетей BotHub' minText='ChatGPT на базе 3.5 и 4.0 версии OpenAI' />
                            <ElementDropDownMenu svgIcons={<Business />} bigText='Бизнес бот' minText='ChatGPT для эффективного решения бизнес задач' />
                            <ElementDropDownMenu svgIcons={<TelegramDropDown />} bigText='Telegram бот' minText='Удобный бот в Telegram который всегда под рукой' />
                        </div>
                    }
                    <button className='dropDownEl'>Пакеты</button>
                    <button className='dropDownEl'>API</button>
                    <button className='dropDownEl'>Модели</button>
                    <button className='dropDownEl'>Академия</button>
                </div >
            }
            <nav>
                <span className='bot'>Bot</span>
                <span className='hub'>hub</span>
                <div className='delimiter'></div>
                <div>
                    <button className='dropDownMenuProducts' onClick={() => setCloseAndMenu(!closeAndMenu)}>Продукты</button>
                    {closeAndMenu ? <UnArrow /> : <Arrow classNameEl='productsArrow' />}
                    {closeAndMenu &&
                        <DropDownMenu />
                    }
                    <button className='package'>Пакеты</button>
                    <button className='api'>API</button>
                    <button className='blogBtn'>Блог</button>
                </div>


            </nav>
            <div className='rightNav'>
                <Earth />
                <span className='languageSelection'>RU</span>
                <Arrow classNameEl='none' />
                <button className='authorization'>Авторизация</button>

                <button className='dropDownMenuBtn' onClick={() => {
                    setDropDownMenu1(!dropDownMenu1)
                    setCloseAndMenu(!closeAndMenu)
                }}>
                    {closeAndMenu ? <Close /> : <Menu />}
                </button>



            </div>

        </header >
    )
}
