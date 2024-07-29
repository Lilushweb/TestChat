import React, { useEffect, useState } from 'react';

interface MessageProps {
    message: {
        content: string;
        role: string;
    };
}

const TextMessage: React.FC<MessageProps> = ({ message }) => {
    const [displayedText, setDisplayedText] = useState<string>('');

    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            if (index < message.content.length) {
                setDisplayedText(message.content.substring(0, index + 1));
                index++;

            } else {
                clearInterval(interval);
            }

        }, 100);

        return () => clearInterval(interval);
    }, [message.content]);

    return (
        <p
            className={`textMessage ${message.role}`}
            style={{
                borderRight: '2px solid white',
                display: 'inline-block',
                overflow: 'hidden',
            }}
        >
            {displayedText}
        </p>
    );
};

export default TextMessage;