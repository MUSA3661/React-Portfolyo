import React from 'react'

export default function Section4() {
  return (
    <div className='containers container-fluid'>
         <div id="css-anime" class="row ">
        <h1  class="baslık text-center fw-bold">CSS-ANİME</h1>
        <div class="section4 col-md-6 mb-5">
         <div class="text-center ">
           <iframe width="600" height="600" src="https://www.youtube.com/embed/1Aq9OJuS3ok" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
         </div>
        </div>
        <div class="section4 col-md-6 mb-5">
          <div class="containers2">
            <div class="ring"></div>
            <div class="ring"></div>
            <div class="ring"></div>
            <p>Loading...</p>
          </div>
        </div>
      </div>
      <div class="row">
      
         <div class="section4-2-2 col-md-6 mb-5">
          <div class="cube">
            <div class="top"></div>
            <div>
                {/* <span  style="--i:0;"></span>
                <span  style="--i:1;"></span>
                <span  style="--i:2;"></span>
                <span  style="--i:3;"></span> */}
            </div>
        </div>

         </div>    
         <div class="section4-2 col-md-6 mb-5">
            <div class="text-center">
               <iframe width="600" height="600" src="https://www.youtube.com/embed/nOdDtnHWaDo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
         </div>    
      </div>
    </div>
  )
}
