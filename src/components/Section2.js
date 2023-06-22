import React from 'react'

export default function Section2() {
  return (
    <div className='containers container-fluid'>
     <div class="row">
          <h1  class="baslık text-center fw-bold">DENEYİM</h1>
          <div class="col-md-4">
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
          <div class="col-md-8">
            <div class="row">
              <h1  class="baslık text-center fw-bold">Yazılımsal-Sözler</h1>
              <div class=" col-4 section2-right mb-5">
                 <div class="kart ">
                  <div class="on-taraf kutu text-center text-white fs-5 fw-bold">
                    <img src="img/Bill Gates.jpg" alt="Bill Gates"/>
                    <p>BİLL GATES</p>
                  </div>
                  <div class="arka-taraf kutu">
                    <div class="bilgi">
                      <h3>Yazılım, sanat ve mühendislik arasında harika bir kombinasyondur.</h3>
                    </div>
                  </div>
                 </div>
              </div>
              <div class=" col-4 section2-right mb-5">
                 <div class="kart ">
                  <div class="on-taraf kutu text-center text-white fs-5 fw-bold">
                    <img src="img/Steve Jobs.jpg" alt="STEVE JOBS"/>
                    <p>STEVE JOBS</p>
                  </div>
                  <div class="arka-taraf kutu">
                    <div class="bilgi">
                      <h3>Başladığımızda yazılımı nasıl heceleyeceğimizi bilmiyorduk.</h3>
                    </div>
                  </div>
                 </div>
              </div>
              <div class=" col-4 section2-right mb-5">
                 <div class="kart ">
                  <div class="on-taraf kutu text-center text-white fs-5 fw-bold">
                    <img src="img/Jessica-Gaston.jpg" alt="JESSİCA GASTON"/>
                    <p>JESSİCA GASTON</p>
                  </div>
                  <div class="arka-taraf kutu">
                    <div class="bilgi">
                      <h3>Bir adamın berbat yazılımı, diğerinin tam zamanlı işidir.</h3>
                    </div>
                  </div>
                 </div>
              </div>
              <div class=" col-4 section2-right mb-5">
                 <div class="kart ">
                  <div class="on-taraf kutu text-center text-white fs-5 fw-bold">
                    <img src="img/Joel-Spolsky.jpg" alt="JOEL SPOLSKY"/>
                    <p>JOEL SPOLSKY</p>
                  </div>
                  <div class="arka-taraf kutu">
                    <div class="bilgi">
                      <h3>Şarap gibi iyi bir yazılım zaman alır.</h3>
                    </div>
                  </div>
                 </div>
              </div>
              <div class=" col-4 section2-right mb-5">
                 <div class="kart ">
                  <div class="on-taraf kutu text-center text-white fs-5 fw-bold">
                    <img src="img/ERDEM_HOCA.jpg" alt="ERDEM SABRİ BEŞİK"/>
                    <p>ERDEM SABRİ BEŞİK</p>
                  </div>
                  <div class="arka-taraf kutu">
                    <div class="bilgi">
                      <h3>Yazdığın kod çalışıyorsa,fazla kurcalama. :):)</h3>
                    </div>
                  </div>
                 </div>
              </div>
              <div  class=" col-4 section2-right mb-5">
             
                 <div class="kart ">
                  <div class="on-taraf kutu text-center text-white fs-5 fw-bold">
                    <img src="img/Alan-Perlis.jpg" alt="ALAN PERLİS"/>
                    <p>ALAN PERLİS</p>
                  </div>
                  <div class="arka-taraf kutu">
                    <div class="bilgi">
                      <h3>Hatasız program yazmanın iki yolu vardır; sadece üçüncüsü çalışıyor.</h3>
                    </div>
                  </div>
                 </div>
              </div>
            </div>
          </div>
         </div>
    </div>
  )
}
