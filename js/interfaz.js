
// Seleccionamos los QS
export const formConfig = document.querySelector('#formConfig');
export const type = document.querySelector('#type');
export const contentQR = document.querySelector('#contentQR');
export const colorBg = document.querySelector('#colorBackground');
export const colorFrameEyes = document.querySelector('#colorFrameEyes');
export const colorEye = document.querySelector('#colorEyes');
export const colorQr = document.querySelector('#colorQR');
export const logoQr = document.querySelector('#logoQR');
export const crearBtn = document.querySelector('#crearQr');
export const imgQR = document.querySelector('#imgQr');
export const sizeQR = document.querySelector('#sizeQR');
export const optionsQR = document.querySelectorAll('input[type="radio"]');
export const messageAlerts = document.querySelector('#alerts');



// document.getElementById('#logoQR').onchange = function () {
//     console.log(this.value);
//     document.getElementById('fichero').innerHTML = document.getElementById('image1').files[0].name;
//   }

// Creamos alertas
export function msjAlert(msj, alert) {
    
    
    if(msj) {
        
        console.log(messageAlerts);
        messageAlerts.classList.add('alert', 'text-center', 'm-2', 'gap-2');

        if(alert === 'error') {
            messageAlerts.classList.add('alert-danger');
        } else {
            messageAlerts.classList.add('alert-success');
        }

        messageAlerts.textContent = msj;
        formConfig.appendChild(messageAlerts);

        setTimeout(() => {
            messageAlerts.remove();
        }, 3000);
    }
}



