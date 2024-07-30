import React from 'react'
import './style/main.css'
import BgGrid from './svg/Bg-grid'
import Chat from './Chat'
import OurCapabilities from './OurCapabilities'

function Main() {
    return (
        <main>

            <BgGrid />
            <div className='titleBlock'>
                <div className='textGpt'>
                    <h2 className='gpt'>ChatGPT: ваш умный
                        помощник
                    </h2>
                    <span className='gptInfo'>
                        Экспериментируйте с ChatGPT-4, Midjourney и Claude в одном месте.
                        Без VPN и абонентской платы. Создавайте контент,
                        обрабатывайте данные и получайте ответы на вопросы через
                        удобный интерфейс!
                    </span>
                    <button className='start'>Начать работу</button>

                </div>
                <Chat />
            </div>
            <span className='OurCapabilities'>Возможности ChatGPT</span>
            <div className='possibilities'>
                <OurCapabilities />
            </div>
            <div className='photoAiContainer'>
                <img className='imgAi' src='https://bothub.chat/_next/static/media/image.801bc7af.webp' alt='генерация фотографий от Ai'></img>
                <div className="containerTextAi">
                    <h2 className='hAiPhoto'>Генерация Изображений Через Midjourney </h2>
                    <span className='midJourneyText'>MidJourney - инструмент для создания уникальных изображений. Наши алгоритмы помогут вам воплотить в жизнь вашу идею. Начните генерировать изображения с MidJourney прямо сейчас! Кликните на кнопку ниже, чтобы начать творить.</span>
                    <button className='midJourneyBtn'>Попробовать Midjourney</button>
                </div>
            </div>
        </main>
    )
}

export default Main
