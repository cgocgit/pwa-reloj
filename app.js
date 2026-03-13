// Actualiza la hora cada segundo
function updateClock(){

  const clockElement = document.getElementById("clock");
  const now = new Date();

  const hours = String(now.getHours()).padStart(2,'0');
  const minutes = String(now.getMinutes()).padStart(2,'0');
  const seconds = String(now.getSeconds()).padStart(2,'0');

  const currentTime = `${hours}:${minutes}:${seconds}`;

  clockElement.textContent = currentTime;
}

// Ejecutar cada segundo
setInterval(updateClock, 1000);
updateClock();


// Registro del Service Worker
if ('serviceWorker' in navigator){

  window.addEventListener('load', () => {

    navigator.serviceWorker.register('./service-worker.js')
      .then(registration => {
        console.log('Service Worker registrado correctamente');
      })
      .catch(error => {
        console.log('Error al registrar Service Worker:', error);
      });

  });

}