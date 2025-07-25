
function updateDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const date = String(now.getDate()).padStart(2, '0');
  const hour = String(now.getHours()).padStart(2, '0');
  const minute = String(now.getMinutes()).padStart(2, '0');
  const second = String(now.getSeconds()).padStart(2, '0');

  document.getElementById("date").textContent = `${year}년 ${month}월 ${date}일`;
  document.getElementById("time").textContent = `${hour}:${minute}:${second}`;
}

setInterval(updateDateTime, 1000);
updateDateTime();
