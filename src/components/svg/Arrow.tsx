import React from 'react'

interface ArrowProps {
    classNameEl: string
}

export default function Arrow({ classNameEl }: ArrowProps) {
    return (
        <svg
            className={classNameEl}
            xmlns="http://www.w3.org/2000/svg"
            width="12.008"
            height="6.004"
            fill="none"
            viewBox="0 0 12.008 6.004"
        >
            <path
                fill="#FFF"
                fillOpacity="1"
                fillRule="nonzero"
                d="M.4 1.78H.37A1 1 0 01.22.37a.99.99 0 011.4-.15l.01.03L.4 1.78zM10.37.25V.22a1 1 0 011.41.15c.35.44.28 1.06-.16 1.41h-.02L10.37.25z"
            ></path>
            <path
                stroke="#FFF"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeOpacity="1"
                strokeWidth="2"
                d="M1 1l5 4 5-4"
            ></path>
        </svg>
    )
}
