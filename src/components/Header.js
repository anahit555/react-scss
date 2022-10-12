import React from 'react';
import {BiMenuAltRight}  from 'react-icons/bi';
// import {AiOutLineClose}  from 'react-icons/ai';
// import {classes} from './Header.scss';

const Header = ()=> {
    return (
        <header className ='classes.header'>
        <div className='clases.header_content'>
            <h2>navbar</h2>
        </div>
        <nav className='classes.header_content_nav'>
            <ul>
                <li>
                    <a href='/'>Page one</a>
                </li>
                <li>
                    <a href='/'>Page two</a>
                </li>
                <li>
                    <a href='/'>Page three</a>
                </li>
            </ul>
            <button>CTA Pages</button>
        </nav>
        <div className='classes.header_content_toggle'>
            <BiMenuAltRight />

        </div>
    </header>
    )

};

export default Header;



