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
              Bilgisayar başında uzun vakit geçirmeyi ve sürekli yeni şeyler öğrenmeği seven biriyim. İlgimi çeken konuların , öğrendiğim bilgilerin beni yazılım eksenine kaydırdığını farkettiğim anda kendimi  kod yazarken buldum. Bunun üzerine , bir yıl boyunca Udemy ve Youtube gibi platformlardan yazılımla ilgili eğitimler almaya başladım .Daha sonrasında bu hobimin işim olmasına karar verdim.  Daha profesyonel bir başlangıç için Neos Yazılım Eğitim ve Akademi bünyesindeki , FullStack Web Developer Kursuna katıldım. Bu süreçte araştırma, yazılım geliştirme ve sorunlara pratik çözümler üretebilme yeteneklerini edindim .  Yeni şeyler öğrenmeyi, yeteneklerimi geliştirmeyi çok önemsiyor, bu amaçla insan ilişkilerinin öğreticiliğinden faydalanmak gerektiğini düşünüyorum. Bu iş pozisyonunda yeteneklerim ve çalışma disiplinim ile katkı sağlayabileceğim noktasında şüphem yok.
   CV mi incelemeye vakit ayırdığınız için teşekkür ederim.
Yakın zamanda sizden olumlu haberler almayı diliyorum.
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
