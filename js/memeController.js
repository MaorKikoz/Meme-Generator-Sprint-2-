'use strict'

var gElCanvas
var gCtx

function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    resizeCanvas()
    //addListeners()
    renderMeme()
    renderGallery(gImgs)
}

function renderMeme() {
    // const imgId = elImg
    //renderImg(imgId)
    const elImg = new Image()
    elImg.src = gImgs[15].url
    elImg.onload = () => renderImg(elImg)

}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.clientWidth
}


function onSelectPic(picId) {
    const elImg = new Image()
    const pic = getPicById(picId)
    // console.log(pic)
    elImg.src = pic.url
    elImg.onload = () => renderImg(elImg)
}

function renderImg(img) {
    // console.log(img)
    gElCanvas.height = (img.naturalHeight / img.naturalWidth) * gElCanvas.width
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    // render text later
    renderText()
    //renderMeme()
}

function renderText() {
    const line = gMeme.lines[0]
    gCtx.font = `${line.size}px Impact`
    gCtx.fillStyle = line.color
    gCtx.strokeStyle = 'black'
    gCtx.lineWidth = 2
    gCtx.textAlign = 'center'
    gCtx.strokeText(line.txt, gElCanvas.width / 2, line.size + 10)
    gCtx.fillText(line.txt, gElCanvas.width / 2, line.size + 10)
    //gCtx.margin = 'auto'
}




function addListeners() {
    addMouseListeners()
    addTouchListeners()
}

function addMouseListeners() {
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchend', onUp)
}

function onDownloadImg(elLink) {
    const imgContent = gElCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
}