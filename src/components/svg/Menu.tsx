import React from 'react'

export default function Menu() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="38"
            fill="none"
            viewBox="0 0 38 38"
        >
            <g filter="url(#filter0_i_5555_876)">
                <rect width="38" height="38" fill="#1C64F2" rx="8"></rect>
                <path
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M12 14.5h14M12 18.5h14M12 22.5h14"
                ></path>
            </g>
            <defs>
                <filter
                    id="filter0_i_5555_876"
                    width="38"
                    height="39"
                    x="0"
                    y="0"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    ></feBlend>
                    <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dy="1"></feOffset>
                    <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                    <feComposite
                        in2="hardAlpha"
                        k2="-1"
                        k3="1"
                        operator="arithmetic"
                    ></feComposite>
                    <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"></feColorMatrix>
                    <feBlend in2="shape" result="effect1_innerShadow_5555_876"></feBlend>
                </filter>
            </defs>
        </svg>
    )
}
