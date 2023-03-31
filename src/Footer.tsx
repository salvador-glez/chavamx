import React from 'react'
import './Footer.css'
import getFullYear from './date-utils'

function Footer() {
    return (
        <div id="footer">
            <p>Copyright © {getFullYear()} Chava MX</p>
        </div>
    )
}

export default Footer
