// src/pages/Gallery.js
import React from 'react';

function Gallery() {
    return (
        <div className="container">
            <h1>Gallery</h1>
            <div className="row">
                <div className="col-md-3">
                    <img src="images/gallery1.jpg" alt="Cat 1" className="img-fluid" />
                </div>
                <div className="col-md-3">
                    <img src="images/gallery2.jpg" alt="Cat 2" className="img-fluid" />
                </div>
                <div className="col-md-3">
                    <img src="images/gallery3.jpg" alt="Cat 3" className="img-fluid" />
                </div>
                <div className="col-md-3">
                    <img src="images/gallery4.jpg" alt="Cat 4" className="img-fluid" />
                </div>
            </div>
        </div>
    );
}

export default Gallery;
