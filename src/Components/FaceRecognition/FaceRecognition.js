import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({identifyBox, imageUrl}) => {
    return(
        <div className='center ma'>
            <div className= 'absolute mt2'>
                <img id = 'inputImage' alt = '' src = {imageUrl} width = '500px' height='auto'/>
                {
                    identifyBox.map((box, i) => {
                        const {topRow, rightCol, bottomRow, leftCol} = box;
                        return (<div key = {i} id = "face" className='bounding-box' style = {{top: topRow, right: rightCol, bottom: bottomRow, left: leftCol}}></div>)
                    })
                }
            </div>
        </div>
    );
}

export default FaceRecognition;