import React, { useState, useContext } from 'react'
import Menu from './Svg/bars-solid.svg'
import Close from './Svg/times-solid.svg'
import { Link } from 'react-router-dom'
import Cart from './Svg/cart.svg'
import { DataContext } from './DataProvider'

export default function Header() {

    const [menu, setMenu] = useState(false)
    const value = useContext(DataContext)
    const [cart]=value.cart 



    const toggleMenu = () => {
        setMenu(!menu)
    }

    const styleMenu = {
        left: menu ? 0 : "-100%"
    }

    return (<
        div >
        <header>
            <div className="menu" onClick={toggleMenu}>
                <img src={Menu} alt="" width="30" />


            </div>
            <div className="logo">
                <h1><Link to="/products">Just Shoes</Link></h1>



            </div>
            <ul style={styleMenu}>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/login">Login/Register</Link></li>
                <li onClick={toggleMenu}>
                    <img src={Close} alt="" width="30" className="menu" />
                </li>
            </ul>

            <div className="cart-icon">

                <span>{cart.length}</span>

                <Link to="/Cart">

                    <img src={Cart} alt="" width="30" />

                </Link>

            </div>



        </header>

    </div>
    )
}