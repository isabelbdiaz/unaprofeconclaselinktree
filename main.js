document.addEventListener("DOMContentLoaded", function () {
    const galeria = document.querySelector(".galeria");
    const btnIzq = document.getElementById("flecha-izq");
    const btnDer = document.getElementById("flecha-der");

    const scrollStep = 300; // cantidad de píxeles que se desplaza por clic

    btnIzq.addEventListener("click", () => {
      galeria.scrollBy({ left: -scrollStep, behavior: "smooth" });
    });

    btnDer.addEventListener("click", () => {
      galeria.scrollBy({ left: scrollStep, behavior: "smooth" });
    });
  });