import React from 'react'
import './style/block.css'

interface BlockProps {
    h: string,
    text: string,
}

export default function Block({ h, text }: BlockProps) {
    return (
        <div className='block'>
            <h2 className='h'>{h}</h2>
            <span className='blockText'>{text}</span>
        </div>
    )
}
