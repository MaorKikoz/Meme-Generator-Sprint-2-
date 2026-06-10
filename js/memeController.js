'use strict'

var gElCanvas
var gCtx

function onInit() {
    gElCanvas = document.querySelector('canvas')
	gCtx = gElCanvas.getContext('2d')
    resizeCanvas()
    //addListeners()
    renderMeme()
}

function renderMeme() {
    const imgId = gImgs[15].id
    renderImg(imgId)
}

function resizeCanvas() {
	const elContainer = document.querySelector('.canvas-container')
	gElCanvas.width = elContainer.clientWidth
}


function onSelectPic(picId) {
	const elImg = new Image()
	const pic = getPicById(picId)

	elImg.src = pic.data
	elImg.onload = () => renderImg(elImg)
}

function renderImg(img) {
	gElCanvas.height = (img.naturalHeight / img.naturalWidth) * gElCanvas.width
	gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
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
