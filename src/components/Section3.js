import React from 'react'

export default function Section3() {
  return (
    <div className='containers container-fluid'>
          <div id="projeler" class="row ">
          <h1  class="baslık text-center fw-bold">Projeler</h1>
          <div class="section3-responsive col-md-6 mb-5 ">
            <div class="section3-kart mx-auto">
              <img src="img/exxen-tv-klon.jpg" alt="exxen-klon"/>
              <div class="overlay">
                <div class="overlay-text">
                  <h2>EXXEN-KLON</h2>
                  <p>HTML-CSS-BOOTSTRAP kullanırak yaptığım proje</p>
                  <a href="#bos">PROJEYE GİT<i class="fa-sharp fa-solid fa-arrow-right-to-bracket"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="section3-responsive col-md-6 mb-5 m">
            <div class="section3-kart mx-auto">
              <img src="img/netflix-klon.jpg" alt="netflix-klon"/>
              <div class="overlay">
                <div class="overlay-text">
                  <h2>NETFLİX-KLON</h2>
                  <p>HTML-CSS-BOOTSTRAP kullanırak yaptığım proje</p>
                  <a href="#bos">PROJEYE GİT<i class="fa-sharp fa-solid fa-arrow-right-to-bracket"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div class="row">
        <div class="section3-responsive col-md-6 mb-5 ">
          <div class="section3-kart mx-auto">
            <img src="img/Rondom-web-site.jpg" alt="şirket-klon"/>
            <div class="overlay">
              <div class="overlay-text">
                <h2>ŞİRKET-KLON</h2>
                <p>HTML-CSS kullanırak yaptığım proje</p>
                <a href="#bos">PROJEYE GİT<i class="fa-sharp fa-solid fa-arrow-right-to-bracket"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="section3-responsive col-md-6 mb-5 ">
          <div class="section3-kart mx-auto">
            <img src="img/yemek-sitesi-klon.jpg" alt="yemek-klon"/>
            <div class="overlay">
              <div class="overlay-text">
                <h2>YEMEK-KLON</h2>
                <p>HTML-CSS kullanırak yaptığım proje</p>
                <a href="#bos">PROJEYE GİT<i class="fa-sharp fa-solid fa-arrow-right-to-bracket"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
