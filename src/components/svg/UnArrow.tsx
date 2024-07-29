import React from 'react'
import "../../index.css";

export default function UnArrow() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
        >
            <path
                fill="#FFF"
                fillOpacity="1"
                fillRule="nonzero"
                d="M2.4 9.22l-.03-.01c-.44.35-.51.97-.16 1.41.35.44.97.51 1.41.16v-.03L2.4 9.22zm9.97 1.53v.03c.44.35 1.06.28 1.41-.16a.993.993 0 00-.16-1.41l-.03.01-1.22 1.53z"
            ></path>
            <path
                stroke="#FFF"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeOpacity="1"
                strokeWidth="2"
                d="M3 10l5-4 5 4"
            ></path>
        </svg>
    )
}
