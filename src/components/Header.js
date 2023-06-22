import React from "react";

export default function Header() {
  return (
    <div>
      <header className="header container-fluid">
        
        <div className="row h-100">
          <div className="left col-md-6 d-flex justify-content-center align-items-center">
            <div
             
              className="resim position-absolute mt-1"
            >
             <img src="img/musa.jpg" alt="resim" />

            </div>
            <div className="circle1 d-flex justify-content-center align-items-center">
              <div className="circle2"></div>
            </div>
          </div>
          <div className="right col-md-6">
            <div className="icon d-flex justify-content-center column-gap-5 fs-3">
              <a href="https://www.facebook.com/profile.php?id=1489832818">
                {" "}
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/musa_yldrm_/">
                {" "}
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/musanur-yildirim-516279206/">
                {" "}
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/MUSA3661">
                {" "}
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
            <div className="text h-100 w-100 d-flex flex-column justify-content-center align-items-center">
              <h3 className="text-white fs-2">Merhaba,Ben</h3>
              <h1 className="text-white fs-1 fw-bold mb-4">Musa Nur Yıldırım</h1>
              <h5 className="text-anime">Full-Stack Web Developer_</h5>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
