import React, { useEffect, useState } from 'react'
import "./Navbar.scss"
import { Turn as Hamburger } from 'hamburger-react'
import { NavLink,Link, useLocation } from 'react-router-dom'

function Navbar() {
    const [isOpen, setOpen] = useState(false)
    let locition = useLocation().pathname
    console.log(locition);
    useEffect(()=>{
        setOpen(false)
    },[locition])
  return (
    
    <React.Fragment>
        <div className='Navbar'>
        <div  className='nav_first_part'>
            <Link to={"/"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="46" viewBox="0 0 35 46" fill="none">
                    <path d="M32.956 22.6957C32.48 21.5635 31.9375 20.2807 31.4107 18.697C30.0282 14.5512 34.4452 10.0292 34.4872 9.98725L32.0127 7.51275C31.7677 7.75775 26.0225 13.5992 28.0892 19.803C28.6597 21.5145 29.2302 22.8655 29.7307 24.0555C30.8986 26.363 31.5049 28.9138 31.5 31.5C31.2949 33.5846 30.4946 35.5662 29.1945 37.2085C27.8944 38.8509 26.1494 40.0847 24.1675 40.7627C24.7936 38.3087 24.7843 35.7356 24.1404 33.2862C23.4965 30.8367 22.2392 28.5917 20.4872 26.7627L18.6602 24.9357L17.6417 27.3105C14.4287 34.8075 10.605 38.08 8.35625 39.445C6.97576 38.5995 5.8157 37.4385 4.97145 36.0572C4.1272 34.676 3.62289 33.1141 3.5 31.5C3.62072 29.297 4.17309 27.1392 5.12575 25.1492C6.25556 22.7504 6.89287 20.1494 7 17.5V14.3885C8.5295 15.0185 10.5 16.6687 10.5 21V25.5552L13.5502 22.1707C18.9962 16.1262 17.8605 8.9285 15.6607 4.13175C17.3329 4.68912 18.7688 5.79297 19.7373 7.26558C20.7058 8.73819 21.1506 10.4939 21 12.25H24.5C24.5 2.56025 16.4867 0 12.25 0H8.75L10.85 2.79825C11.0897 3.122 15.8585 9.6705 13.2177 16.2522C12.6301 14.5983 11.5532 13.1622 10.13 12.1348C8.7069 11.1074 7.00487 10.5372 5.25 10.5H3.5V17.5C3.37928 19.703 2.8269 21.8607 1.87425 23.8507C0.744443 26.2496 0.10713 28.8506 0 31.5C0 38.234 6.69025 45.5 17.5 45.5C28.3097 45.5 35 38.234 35 31.5C35.0026 28.4474 34.3033 25.435 32.956 22.6957ZM11.9612 41.1705C13.6238 39.7943 15.1218 38.2401 16.4305 36.5398C17.6629 34.9387 18.7275 33.2079 19.6035 31.374C20.5678 32.9311 21.1157 34.71 21.1945 36.5398C21.2732 38.3697 20.8802 40.189 20.0532 41.8232C19.2069 41.9371 18.354 41.9962 17.5 42C15.6219 42.013 13.7532 41.7331 11.9612 41.1705Z" fill="#BD00FF"/>
                </svg>
                <span>Animes Online.</span>
            </Link>
        </div> 
        <div className="nav_second_part">
            <ul className='nav__in'>
                <li>
                    <NavLink to={"/"} className={"links"}>Home</NavLink>
                    <i></i>
                </li>
                <li>
                    <NavLink to={"/news"} className={"links"}>News</NavLink>
                    <i></i>
                </li>
                <li>
                    <NavLink to={"/search"} className={"links"}>Search</NavLink>
                    <i></i>
                </li>
            </ul>
            <div className="Serach__Login">
                <div className="search_menu">
                    <div className="inner_serach">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                            <path d="M20 20L15.514 15.506L20 20ZM18 9.5C18 11.7543 17.1045 13.9163 15.5104 15.5104C13.9163 17.1045 11.7543 18 9.5 18C7.24566 18 5.08365 17.1045 3.48959 15.5104C1.89553 13.9163 1 11.7543 1 9.5C1 7.24566 1.89553 5.08365 3.48959 3.48959C5.08365 1.89553 7.24566 1 9.5 1C11.7543 1 13.9163 1.89553 15.5104 3.48959C17.1045 5.08365 18 7.24566 18 9.5V9.5Z" stroke="#E5E5E5" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        <input type="search" placeholder='Search'/>
                    </div>
                </div>
                <div className="Login_buttons">
                    <Link to={"/login"} className='signup'>Sign up</Link>
                    <Link to={"/login"} className='signin'>Sign in</Link>
                </div>
            </div>
            <Hamburger toggled={isOpen} toggle={setOpen} color="white"  />
        </div>
        
    </div>
    <div className={isOpen?"Navbar_Phone open": "Navbar_Phone"}>
        <span className='Phone_menu_text'>
            <p>Menu</p>
            <span onClick={()=>setOpen(false)}><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" class="times svg-inline--fa fa-times"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" class=""></path></svg></span>
        </span>
        <ul className='Phone_nav'>
                <li>
                    <Link to={'/'} className={"links"}>Home</Link>
                    <i></i>
                </li>
                <li>
                    <Link to={'/news'} className={"links"}>News</Link>
                    <i></i>
                </li>
                <li>
                    <Link to={'/search'} className={"links"}>Search</Link>
                    <i></i>
                </li>
            </ul>

            <div className="phone_button">
                <Link to={"/login"} className='phone_signup'>Sign up</Link>
                <Link to={"/login"} className='phone_signin'>Sign in</Link>
            </div>
        
    </div>
    </React.Fragment>
  )
}

export default Navbar