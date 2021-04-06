import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({identifyBox, imageUrl}) => {
    return(
        <div className='center ma'>
            <div className= 'absolute mt2'>
                <img id = 'inputImage' alt = '' src = {imageUrl} width = '500px' height='auto'/>
                <div className='bounding-box' style = {{top: identifyBox.topRow, right: identifyBox.rightCol, bottom: identifyBox.bottomRow, left: identifyBox.leftCol}}> </div>
            </div>
        </div>
    );
}

export default FaceRecognition;