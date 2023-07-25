import React from 'react'

export default function Section5() {
  return (
    <div className='containers container-fluid'>

<div id="iletişim" class="row ">
        <h1  class="baslık text-center fw-bold">İLETİŞİM</h1>
        <div class="section5-h col-md-8">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48472.024530055736!2d43.06676793729852!3d40.596756935017225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40698ed9cd732267%3A0x46d5117e984d216!2sKars%2C%20Kars%20Merkez%2FKars!5e0!3m2!1str!2str!4v1675008266937!5m2!1str!2str" width="600" height="450" style={{border:"0;"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='İletişim Adres' ></iframe>
        </div>
        <div class="section5-i col-md-4 text-center   ">
         <div class="overflow-hidden">
           <form>
             <fieldset>
               <legend class="fs-3  fw-bold text-white">İLETİŞİM</legend>
               <input class="form-control mb-2" type="text" placeholder="Ad-Soyad" required/>
               <input class="form-control mb-2" type="email" placeholder="E-Posta"/>
               <textarea  cols="100%" rows="10" placeholder="Mesajınızı Buraya Giriniz"></textarea>
               <input class="form-control mb-2 bg-danger text-white" type="submit" value="GÖNDER"/>
             </fieldset>
           </form>
         </div>

        </div>
      </div>





    <footer>
      <h6>Musa Nur Yıldırım &copy;2023 Full-Stack Web Developer</h6>
    </footer>

    </div>
  )
}
