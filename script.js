// Actualizar la hora en vivo
function updateTime() {
  const now = new Date();
  document.getElementById('time').textContent = now.toLocaleString();
}
setInterval(updateTime, 1000);
updateTime();