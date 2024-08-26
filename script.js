const container = document.querySelector(".container")

const youtuber = ['Felps', 'Cellbit', 'Alanzoka']
let youtuberIndex = 0
let caracteresIndex = 0

rodar()

function rodar() {
  caracteresIndex++
  container.innerHTML = `<h1>Youtubers Favoritos: ${youtuber[youtuberIndex].slice(0,caracteresIndex)}</h1>`
  if (youtuber[youtuberIndex].length === caracteresIndex) {
    youtuberIndex++
    caracteresIndex = 0
  }
  if (youtuber.length === youtuberIndex) {
    youtuberIndex = 0
  }
  setTimeout(rodar, 400)
}