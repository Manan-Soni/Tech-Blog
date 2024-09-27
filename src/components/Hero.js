import React from 'react';
import img1 from 'D:/React/blogwebsite/src/assets/h1.png';
import img2 from 'D:/React/blogwebsite/src/assets/h2.png';
import img3 from 'D:/React/blogwebsite/src/assets/h3.png';

export default function Hero() {
  return (
    <div id='Hero'>
        <div id="carouselExample" class="carousel slide" >
          <div class="carousel-inner" style={{'height':'100vh'}}>
            <div class="carousel-item active">
              <img src={img1} class="d-block w-100" alt="..."  />
            </div>
            <div class="carousel-item"> 
              <img src={img2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={img3} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" style={{'color':'black'}} data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
    </div>
  )
}
