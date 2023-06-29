function toggleMode() {
  const html = document.documentElement
  
  /* if(html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  pode ser subsituido pelo html.classList abaixo:
  */
  
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
  // se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/assets/avatar-light.png')
  } else {
    // se não tiver light mode, a imagem não muda
    img.setAttribute('src', './assets/assets/avatar.png')
}
}