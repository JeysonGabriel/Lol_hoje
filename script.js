function moveButton(x) {
  marginX = Math.floor(Math.random()*300)
  marginY = Math.floor(Math.random()*600)

  x.style.margin = marginY.toString() + 'px ' + marginX.toString() + 'px'
}