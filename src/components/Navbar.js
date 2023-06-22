import React from 'react'

export default function Navbar() {
  
  

  window.onscroll=()=>{
    navFunction();
  }

  const navFunction=()=>{
    if(document.documentElement.scrollTop>100 && document.documentElement.scrollTop<1000){
      document.getElementById("anasayfa").className="secilen"
    }else{
      document.getElementById("anasayfa").className=""
    }
    if(document.documentElement.scrollTop>1000 && document.documentElement.scrollTop<1700){
      document.getElementById("hakkımda").className="secilen"
    }else{
      document.getElementById("hakkımda").className=""
    }
   
    if(document.documentElement.scrollTop>1700 && document.documentElement.scrollTop<2700){
      document.getElementById("deneyim").className="secilen";
   }else{
      document.getElementById("deneyim").className=" ";
   }
   if(document.documentElement.scrollTop>2700 && document.documentElement.scrollTop<3800){
      document.getElementById("projeler").className="secilen";
   }else{
      document.getElementById("projeler").className=" ";
   }
   if(document.documentElement.scrollTop>3800 && document.documentElement.scrollTop<5000){
      document.getElementById("cssAnime").className="secilen";
   }else{
      document.getElementById("cssAnime").className=" ";
   }
   if(document.documentElement.scrollTop>5000 ){
      document.getElementById("iletisim").className="secilen";
   }else{
      document.getElementById("iletisim").className=" ";
   }
  }


  return (
    <>
        <nav id="hakkında" className="navbar navbar-expand-md navbar-dark position-sticky top-0 z-1">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav d-flex column-gap-5 fs-5">
            <li ><a id="anasayfa" className="secilen" href="#anasayfa">Ana Sayfa</a></li>
            <li><a id="hakkımda" href="#hakkında">Hakkında</a></li>
            <li><a  id="deneyim" href="#deneyim">Deneyim</a></li>
          </ul>
          <div className="nav-center mx-auto">
            <img className="nav-resim  " src="img/m.profil.jpg" alt="" />
          </div>
          <ul className="navbar-nav d-flex column-gap-5 fs-5 me-5">
            <li><a id="projeler" href="#projeler">Projelerim</a></li>
            <li><a id="cssAnime" href="#css-anime">CSS-Anime</a></li>
            <li><a id="iletisim" href="#iletişim">İletişim</a></li>
          </ul>
        </div>
      </div>
    </nav>
    
    </>
  )
}
