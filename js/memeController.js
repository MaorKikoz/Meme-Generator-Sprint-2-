'use strict'

var gElCanvas
var gCtx
var gIsMouseDown = false

function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    resizeCanvas()
    addListeners()
    renderMeme()
    renderGallery(gImgs)
}

function renderMeme() {
    const elImg = new Image()
    const meme = getMeme()
    elImg.src = gImgs[meme.selectedImgId].url
    elImg.onload = () => renderImg(elImg)
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.clientWidth
}


function onSelectPic(picId) {
    const elImg = new Image()
    const pic = getPicById(picId)
    console.log(pic)
    gMeme.selectedImgId = picId
    elImg.src = pic.url
    elImg.onload = () => renderImg(elImg)
    openMain()
}

function renderImg(img) {
    // console.log(img)
    gElCanvas.height = (img.naturalHeight / img.naturalWidth) * gElCanvas.width
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    // render text later
    renderText()
}

function renderText() {
    for (var i = 0; i < gMeme.lines.length; i++) {
        var line = gMeme.lines[i]
        gCtx.font = `${line.size}px Impact`
        gCtx.fillStyle = line.color
        gCtx.strokeStyle = 'black'
        gCtx.lineWidth = 2
        gCtx.textAlign = 'center'
        gCtx.strokeText(line.txt, line.pos.x, line.pos.y)
        gCtx.fillText(line.txt, line.pos.x, line.pos.y)
        //gCtx.margin = 'auto'
    }
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

function onDown(ev) {
    if (gMeme.lines[ev]) {
        const pos = getEvPos(ev)
        gCtx.drawImage(gMeme.lines[ev], pos.x - 25, pos.y - 25, 50, 50)
    } else {
        gIsMouseDown = true
        gStartPos = getEvPos(ev)

        onMove(ev)
    }
}

function onMove(ev) {
    if (!gIsMouseDown) return

    const pos = getEvPos(ev)
    draw(pos.x, pos.y)
    gStartPos = pos
    renderMeme()
}

function onUp() {
    gIsMouseDown = false
}

function getEvPos(ev) {
    const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']

    let pos = {
        x: ev.offsetX,
        y: ev.offsetY,
    }

    if (TOUCH_EVS.includes(ev.type)) {
        ev.preventDefault()
        ev = ev.changedTouches[0]
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
        }
    }
    return pos
}

function onDownloadImg(elLink) {
    const imgContent = gElCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
}

function toggleDisplay() {
    const elMain = document.querySelector('.main-container')
    const elGallery = document.querySelector('.gallery')
    if (elGallery.classList.contains('hidden')) {
        elGallery.classList.remove('hidden')
        elMain.classList.add('hidden')
    } else {
        elMain.classList.remove('hidden')
        elGallery.classList.add('hidden')
    }
}

function openMain() {
    const elMain = document.querySelector('.main-container')
    const elGallery = document.querySelector('.gallery')
    if (elGallery.classList.contains('hidden')) return
    toggleDisplay()
}

function openGallery() {
    const elMain = document.querySelector('.main-container')
    const elGallery = document.querySelector('.gallery')
    if (elMain.classList.contains('hidden')) return
    toggleDisplay()
}