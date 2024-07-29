import React from 'react'
import './style/footer.css'
import Legally from './Legally'
import Info from './Info'
import Products from './Products'
import Ref from './Ref'
import Contacts from './Contacts'


export default function Footer() {
    return (
        <footer>
            <div className="containerFooter">
                <Legally />
                <Info />
                <Products />
                <Ref />
                <Contacts />
                <div></div>
            </div >
        </footer >
    )
}
