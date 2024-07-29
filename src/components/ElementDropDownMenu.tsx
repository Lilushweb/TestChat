import React, { ReactNode } from 'react'

interface elementDropDownMenuProps {
    svgIcons: ReactNode
    bigText: string,
    minText: string,
    classNameBigText?: string,
    classNameMinText?: string,
}

export default function ElementDropDownMenu({ svgIcons, bigText, minText, classNameBigText = "bigText", classNameMinText = "minText" }: elementDropDownMenuProps) {
    return (
        <div className='elDropDownMenu'>
            {svgIcons}
            <div className='flexColum'>
                <span className={classNameBigText}>{bigText}</span>
                <span className={classNameMinText}>{minText}</span>
            </div>
        </div>
    )
}
