import React from 'react'
import ElementDropDownMenu from './ElementDropDownMenu'
import Aggregator from './svg/Aggregator'
import Business from './svg/Business'
import TelegramDropDown from './svg/TelegramDropDown'


export default function DropDownMenu() {

    return (

        <div className='dropDownMenuBigWidth'>
            <ElementDropDownMenu svgIcons={<Aggregator />} bigText='Агрегатор нейросетей BotHub' minText='ChatGPT на базе 3.5 и 4.0 версии OpenAI' classNameBigText='bigFont' classNameMinText='smallFont' />
            <ElementDropDownMenu svgIcons={<Business />} bigText='Бизнес бот' minText='ChatGPT для эффективного решения бизнес задач' classNameBigText='bigFont' classNameMinText='smallFont' />
            <ElementDropDownMenu svgIcons={<TelegramDropDown />} bigText='Telegram бот' minText='Удобный бот в Telegram который всегда под рукой' classNameBigText='bigFont' classNameMinText='smallFont' />
        </div>
    )
}


