// Importaciones
import {
  contentQR,
  crearBtn,
  imgQR,
  msjAlert,
  sizeQR,
} from "./interfaz.js";
// import { queryAPI } from "./api.js";

// Asignamos las variables de la configuración del QR
let bodyFrameEye = "";
let bodyShapeEye = "";
let body = "";

// Validamos formulario
crearBtn.addEventListener("click", validarFormulario);
//console.log(queryAPI());

// Validamos el formulario
function validarFormulario(e) {
  e.preventDefault();
  // Validamos campos
  if (contentQR.value === "") {
    msjAlert("Rellene los campos obligatorios", "error");
    return;
  }

  const newQR = new QRcode(contentQR.value, sizeQR.value);
  console.log(newQR);
  queryAPI(newQR);
}

// Creamos el QR
class QRcode {
  constructor(contentQR, sizeQR) {
    this.contentQR = contentQR;
    this.sizeQR = sizeQR;
  }
}

// Llamamos a la API de Google
function queryAPI(QR) {
  const { contentQR, sizeQR } = QR;
  fetch(
    `https://chart.googleapis.com/chart?cht=qr&chs=${sizeQR}x${sizeQR}&chl=${contentQR}`
  )
    .then((response) => response)
    .then((response) => {
      let downloadBtn = document.querySelector("#downloadQR");
      downloadBtn.href = response.url;
      imgQR.src = response.url;
      console.log(response);
      console.log(imgQR);
    })
    .catch((err) => console.error(err));
}
