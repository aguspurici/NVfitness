// contacto

// document
//   .getElementById("contact-form")
//   .addEventListener("submit", function (event) {
//     event.preventDefault(); // Evita el comportamiento por defecto del formulario
//     var form = event.target;

//     // Realiza el envío del formulario usando fetch
//     fetch(form.action, {
//       method: form.method,
//       body: new FormData(form),
//       headers: {
//         Accept: "application/json",
//       },
//     })
//       .then(function (response) {
//         if (response.ok) {
//           form.reset();
//           // Oculta el formulario
//           document.getElementById("form-container").classList.add("hidden");
//           // Muestra el mensaje de agradecimiento
//           document.getElementById("thank-you-message").style.display = "block";
//         } else {
//           alert("Hubo un problema con el envío del formulario.");
//         }
//       })
//       .catch(function (error) {
//         alert("Hubo un problema con el envío del formulario.");
//       });
//   });



document.getElementById("texto").addEventListener("click", function (event) {
  var seleccion = window.getSelection();
  var rango = document.createRange();
  rango.selectNodeContents(event.target);
  seleccion.removeAllRanges();
  seleccion.addRange(rango);

  document.execCommand("copy");
  alert("Se copió " + seleccion.toString());
  seleccion.removeAllRanges();
});

document.getElementById("toggle-button").addEventListener("click", function () {
  var hiddenText = document.getElementById("hidden-text");
  if (hiddenText.style.display === "none" || hiddenText.style.display === "") {
    hiddenText.style.display = "block";
    this.textContent = "Ver menos";
  } else {
    hiddenText.style.display = "none";
    this.textContent = "Ver más";
  }
});

import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js";

// carrusel ------------------------------

