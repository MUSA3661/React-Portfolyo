import React from 'react'

export default function Section1() {
  return (
    <div className='containers container-fluid'>
        <div class="row">
        <h1  class="baslık text-center fw-bold">HAKKINDA</h1>
        <div class="col-md-4 mb-4">
          <div class="card h-100" style={{width:"100%"}}>
            <div class="card-body">
              <h5 class="card-title mb-4 fs-4">
                <span class="section1-text">Ben</span>,Kimim ?
              </h5>
              <p class="card-text text-capitalize fs-5">
                Genel Olarak...
              </p>
              <p class="card-subtitle mb-2 text-muted ">
               Adım Musa 29 yaşındayım. Kars'ta yaşıyorum mobilya sektörüyle uğraşıyorum ve yazılımı seviyorum kendi çabalarımla birşeyler öğrenmeye çalışıyorum. Yazlım benim için bir bulmaca gibi zevk alıyorum hataları çözmeye çalışırken beni kendine çekiyor ve bende daha profesyonel bir kursa kayıt oldum 6 ay gibi bir eğitim sürecim oldu kendime birşeyler kattığıma inanıyorum . Sevdiğim işi yapmak istiyorum ve kendimi daha ilerilere taşımak istiyorum kısacası öğrenmeye istekli bir kardeşinizim.. :)
              </p>
            
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card h-100" style={{width:"100%"}}>
            <div class="card-body">
              <h5 class="card-title mb-4 fs-4">
                <span class="section1-text">Kişisel</span>-Bilgi
              </h5>
              <ul>
                <li class="mb-2">
                  DOĞUM TARİHİ:<span class="text-muted ms-2">01.11.1993</span>
                </li>
                <li class="mb-2">
                  ÖĞRENİM-DURUMU:<span class="text-muted ms-2">Lise</span>
                </li>
                <li class="mb-2">
                  E-POSTA:<span class="text-muted ms-2"
                    >musanuryildirim@gmail.com</span
                  >
                </li>
                <li class="mb-2">
                  YAŞADIĞI-İL:<span class="text-muted ms-2">İstanbul / Bahçelievler</span>
                </li>
                <li class="mb-2">
                  MEMLEKETİ:<span class="text-muted ms-2">Trabzon</span>
                </li>
                <li class="mb-2">
                  TELEFON:<span class="text-muted ms-2">0553 021 14 16</span>
                </li>
                <li class="mb-2">
                  ADRESS:<span class="text-muted text-capitalize ms-2"
                    >Koca Sinan Mah. Kuşçu Sok. 34186 Erdem Park Evleri B Blok Daire: 18 Bahçelievler/ İstanbul</span
                  >
                </li>
              </ul>
              <div class="d-flex justify-content-evenly mt-5">
                <a class="fs-3 text-danger" href="https://www.facebook.com/profile.php?id=1489832818">
                  <i class="fa-brands fa-facebook"></i
                ></a>
                <a class="fs-3 text-danger" href="https://www.instagram.com/musa_yldrm_/">
                  <i class="fa-brands fa-instagram"></i
                ></a>
                <a class="fs-3 text-danger" href="https://www.linkedin.com/in/musanur-yildirim-516279206/">
                  <i class="fa-brands fa-linkedin"></i
                ></a>
                <a class="fs-3 text-danger" href="https://github.com/MUSA3661">
                  <i class="fa-brands fa-github"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card h-100" style={{width:" 100%"}}>
            <div class="card-body">
              <h5 class="card-title mb-4 fs-4">
                <span class="section1-text">Uzmanlık</span>-Alanları
              </h5>

              <div class="">
                <div class="mb-4 text-center">
                  <i class="fa-brands fa-connectdevelop fs-2 text-danger"></i>
                  <h4>Web-Developer</h4>
                  <p class="text-muted"></p>
                  <hr style={{color:"red",width:"80%"}} class="m-auto "/>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
