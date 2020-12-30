import React from 'react'
import '../../App.css'


function Gallery () {

    return (
        <>
            <div className="gallery__container">
            <div className="gallery__items">
                <img src='cake1.jpg' alt="cake" width="50%"/>
                <img src='cake2.jpg' alt="cake2" width="50%"/>
            </div>
            <div className="gallery__items">
                <img src='cake3.jpg' alt="cake3" width="50%"/>
                <img src='cake4.jpg' alt="cake4" width="50%"/>
            </div>
            <div className="gallery__items">
                <img src='cake5.jpg' alt="cake5" width="50%"/>
                <img src='cake6.jpg' alt="cake6" width="50%"/>
            </div>

            </div>

           
        </>
    )
}
export default Gallery