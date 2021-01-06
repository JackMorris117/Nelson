import React from 'react'
import '../../App.css'
import GallerySection from '../GallerySection'


function Gallery () {

    return (
        <>
            <GallerySection/>

            <div className="gallery__container">
            <div className="gallery__items">
                <img src='desert2.jpg' alt="cake" width="100%"  />
                <img src='cupcake3.jpg' alt="cake2" width="100%"  />
                <img src='tart6.jpg' alt="cake3"  width="100%"  />

            </div>
            <div className="gallery__items">
                <img src='cake-wedding.jpg' alt="cake3" width="100%"  />
                <img src='cake-wedding3.jpg' alt="cake4" width="100%"  />
                <img src='tart.jpg' alt="cake4" width="100%"  />

            </div>
            <div className="gallery__items">
                <img src='cake5.jpg' alt="cake5" width="100%"  />
                <img src='cake6.jpg' alt="cake6" width="100%"  />
            </div>

            </div>

           
        </>
    )
}
export default Gallery