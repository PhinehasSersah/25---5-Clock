import React from "react";
import './header.css';

export const Header = () => {
    return(
        <header className="header">
            <h1>Phine's 25 + 5 Clock</h1>
             <nav>
                 <ul>
                     <a rel='' href="https://github.com/Phine1" target='_top'><li>GitHub</li></a>
                     <a  rel='' href="https://phinehas.netlify.app/" target='_top'><li> Portfolio</li></a>
                    <a  rel='' href="https://twitter.com/Phine_Essel" target='_top'> <li>Twitter</li></a>
                 </ul>
             </nav>

        </header>
    )
}