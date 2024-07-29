import React, { FC, useState } from 'react'
import SendChatSvg from './svg/SendChatSvg'
import './style/chat.css'
import { useCreateChatCompletionMutation } from '../store/Server/ApiOpenAi';
import Gemin from './svg/Gemin';
import Users from './svg/Users';
import TextMessage from './TextMessage';

interface Message {
    role: 'user' | 'ai';
    content: string;
}

const Chat: FC = () => {

    const [createChatCompletion, { data, isLoading, error }] = useCreateChatCompletionMutation();
    const [messages, setMessages] = useState<Message[]>([]);
    const [textInput, setTextInput] = useState<string>('');
    const handleSendMessage = async () => {
        if (textInput.trim() === '') return;

        setMessages(prevMessages => [
            ...prevMessages,
            { role: 'user', content: textInput }
        ]);
        try {
            setTextInput('');
            const response = await createChatCompletion({
                messages: [{ role: "user", content: textInput }],
                model: "gemini-pro"
            });


            if (response.data && response.data.choices && response.data.choices.length > 0) {
                setMessages(prevMessages => [
                    ...prevMessages,
                    { role: 'ai', content: response.data.choices[0].message.content }
                ]);
            }
        } catch (err) {
            console.error('Ошибка при отправке сообщения:', err);
        }
    };




    return (
        <div className='chat'>

            <div className='headChat'>
                <img className='robot' alt="bothub" sizes="40px" src="https://bothub.chat/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-128x128.986912ab.png&w=828&q=75"></img>
                <div className='infoBot'>
                    <span className='nameBot'>BotHub: ChatGPT & Midjourney</span>
                    <span className='whatBot'>bot</span>
                </div>

                <div className='checkboxSave'>
                    <span className='saveContext'>Сохранить контекст</span>
                    <input type='checkbox'></input>
                </div>

            </div>
            <div className='message'>
                {messages.map((message, index) => (
                    <div key={index} className={`chat-message${message.role}`}>
                        {message.role === "user" ? <Users /> : <Gemin />}
                        <TextMessage message={message} />
                    </div>
                ))}
            </div>

            <input type='text'
                className='chatInput'
                placeholder="Спроси о чем-нибудь..."
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
            ></input>
            <button className='send' onClick={handleSendMessage}><SendChatSvg /></button>
            <div className='ellipseContener'>

            </div>


        </div >
    )
}

export default Chat
