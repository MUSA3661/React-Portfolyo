import React from 'react'

export default function Section2() {
  return (
    <div className='containers container-fluid'>
     <div class="row">
          <h1  class="baslık text-center fw-bold">DENEYİM</h1>
          <div class="col-md-12">
             <div class="row">
               <div class="col">
                <h1  class="baslık text-center fw-bold">Beceriler</h1>
                <i class="text-white">HTML</i>
                <div  data-aos-duration="500" class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-bar bg-success" style={{width:" 90%"}}></div>
                </div>
                <i class="text-white">CSS</i>
                <div  data-aos-duration="800" class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-bar bg-info" style={{width:" 80%"}}></div>
                </div>
                <i class="text-white">JAVA SCRİPT</i>
                <div  data-aos-duration="1100" class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-bar bg-warning" style={{width:" 75%"}}></div>
                </div>
                <i class="text-white">PYTHON</i>
                <div  data-aos-duration="1200" class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-bar bg-primary" style={{width:" 40%"}}></div>
                </div>
                <i class="text-white">DJANGO</i>
                <div class="progress" role="progressbar" aria-label="Dark example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-bar bg-dark" style={{width:" 40%"}}></div>
                </div>
                <i class="text-white">REACT JS</i>
                <div  class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-bar bg-success" style={{width:" 65%"}}></div>
                </div>
                <i class="text-white">BOOTSTRAP</i>
                <div  class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-bar bg-warning" style={{width:" 90%"}}></div>
                </div>
               
               </div>
             </div>
          </div>
          
         </div>
    </div>
  )
}
