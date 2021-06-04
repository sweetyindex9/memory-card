import React from 'react';
import '../styles/Header.css';


const Header = (props) => {

    return (
        <div className='header-container'>
            <div className="header-container-left">
                <h1>Pokemon memory game</h1>
            </div>
            <div className="header-container-right">
                <p className="score">Score: {props.score}</p>
                <p className="score">High Score: {props.highScore}</p>
            </div>
        </div>
    );
}

export default Header;