import React, {useState} from 'react'
import '../styles/components/Header.css'

import {Link } from 'react-router-dom'

import {FaSearch, FaBars} from 'react-icons/fa'
import {GrClose} from 'react-icons/gr'

export default function Header () {
    const [menuVisible, setMenuVisible] = useState(false)

    return (
        <div className="header">
            <div className="header-content">
                <div className="logo">Logo</div>

                <div className="menu">
                    <ul>
                        <li>
                            <Link to="/form">
                                Cadastrar notícias
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Exibir notícias
                            </Link>
                        </li>
                    </ul>
                    <div className="search">
                        <input type="text"/>
                        <FaSearch />
                    </div>
                </div>

                <div className="toggle-menu">
                    <FaBars className={`toggle-icon ${menuVisible ? 'visible' : ''}`} onClick={() => setMenuVisible(!menuVisible)}/>
                    {!!menuVisible ? (
                        <GrClose className="toggle-icon" 
                            onClick={() => setMenuVisible(!menuVisible)}/>
                    ) : null}
                    
                    <div className={`menu-content ${menuVisible ? 'visible' : ''}`}>
                        <div className="search">
                            <input type="text"/>
                            <FaSearch />
                        </div>

                        <ul>
                            <li>
                                <Link to="/form">
                                    Cadastrar notícias
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Exibir notícias
                                </Link>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}