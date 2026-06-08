'use strict'

function onInit() {
    renderMeme()
}

function renderMeme() {
    const container = document.querySelector('.canvas-container')
    const img = gMeme.selectedImgId
    const txt = gMeme.txt
    var memeHTML = ''
    memeHTML += '<img src="meme-imgs/meme-imgs (square)/${img}.jpg" alt="${img}">'

    container.innerHTML = +memeHTML
}