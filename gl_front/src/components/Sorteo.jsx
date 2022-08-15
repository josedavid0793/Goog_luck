import React from "react";
import moto from "../images/moto.jpg";
import money from "../images/money.jpg";
import xbox from "../images/xbox.jpg";
import auto from "../images/auto.jpg";
import vacaciones from "../images/vacaciones.jpg";

const Sorteo = () => {
  return (
    <div className="container mt-10 mb-10">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="cards-wrapper card-f">
              <div class="card card-w">
                <img
                  src={xbox}
                  class="d-block w-100 img-st card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cerd's content</p>
                  <a href="#" class="btn btn-primary btn-m">Go somewhere</a>
                </div>
              </div>
              <div class="card card-w">
              <img src={money} class="d-block w-100 img-st card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cerd's content</p>
                  <a href="#" class="btn btn-primary btn-m">Go somewhere</a>
                </div>
              </div>
              <div class="card card-w">
              <img src={moto} class="d-block w-100 img-st card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cerd's content</p>
                  <a href="#" class="btn btn-primary btn-m">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="cards-wrapper card-f">
            <div class="card card-w">
                <img
                  src={auto}
                  class="d-block w-100 img-st card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cerd's content</p>
                  <a href="#" class="btn btn-primary btn-m">Go somewhere</a>
                </div>
              </div>
              <div class="card card-w">
              <img src={vacaciones} class="d-block w-100 img-st card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cerd's content</p>
                  <a href="#" class="btn btn-primary btn-m">Go somewhere</a>
                </div>
              </div>
              <div class="card card-w">
              <img src={moto} class="d-block w-100 img-st card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cerd's content</p>
                  <a href="#" class="btn btn-primary btn-m">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Sorteo;
