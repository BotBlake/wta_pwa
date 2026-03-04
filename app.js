// --------------------
// Click Counter
// --------------------
let clicks = 0

const clickLabel = document.getElementById("clickCount")
const clickBtn = document.getElementById("clickBtn")

clickBtn.addEventListener("click", () => {
  clicks++
  clickLabel.textContent = clicks
})



// --------------------
// Visit Counter
// --------------------
let visits = localStorage.getItem("visits")

if (visits) {
  visits = Number(visits) + 1
} else {
  visits = 1
}
localStorage.setItem("visits", visits)
document.getElementById("visitCount").textContent = visits



// --------------------
// Internet Status
// --------------------
const inetStatus = document.getElementById("statusTextInet")
function updateInternetStatus() {
  if (navigator.onLine) {
    inetStatus.textContent = "Online"
    inetStatus.style.color = "green"
  } else {
    inetStatus.textContent = "Offline"
    inetStatus.style.color = "red"
  }
}
updateInternetStatus()

addEventListener("online", updateInternetStatus)
addEventListener("offline", updateInternetStatus)

setInterval(updateInternetStatus, 5000)



// --------------------
// PWA Server Status
// --------------------
const pwaStatus = document.getElementById("statusTextPWA")
async function checkPWAServer() {
  try {
    // try to fetch the manifest with no cache to check if the server is reachable
    const response = await fetch(`/manifest.json?ts=${Date.now()}`, {
      method: "GET",
      cache: "no-store"
    })

    if (response.ok) {
      pwaStatus.textContent = "Server reachable"
      pwaStatus.style.color = "green"
    } else {
      pwaStatus.textContent = "Server error"
      pwaStatus.style.color = "orange"
    }

  } catch {
    pwaStatus.textContent = "Server unreachable"
    pwaStatus.style.color = "red"
  }
}

checkPWAServer()
setInterval(checkPWAServer, 10000)



// --------------------
// Service Worker
// --------------------

if ("serviceWorker" in navigator) {
  try {
    navigator.serviceWorker.register("service-worker.js")
    console.log("Service Worker registered")
  } catch (error) {
    console.error("Service Worker registration failed:", error)
  }
}