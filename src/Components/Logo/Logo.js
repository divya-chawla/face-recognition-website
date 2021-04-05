import React from "react";
import Tilt from "react-tilt/dist/tilt";
import "./Logo.css";
import face from "./logo.png";

const Logo = () => {
    return(
        <div className='mar4 mt0'>
            <Tilt className="Tilt shadow-2" options={{ max : 55 }} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner pa1 "> <img style = {{ paddingTop :1}} alt = 'logo' src = {face} />
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;