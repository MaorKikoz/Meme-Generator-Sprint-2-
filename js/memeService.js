'use strict'

var gImgs = [{ id: 0, url: 'meme-imgs/meme-imgs (square)/1.jpg' },
{ id: 1, url: 'meme-imgs/meme-imgs (square)/2.jpg' },
{ id: 2, url: 'meme-imgs/meme-imgs (square)/3.jpg' },
{ id: 3, url: 'meme-imgs/meme-imgs (square)/4.jpg' },
{ id: 4, url: 'meme-imgs/meme-imgs (square)/5.jpg' },
{ id: 5, url: 'meme-imgs/meme-imgs (square)/6.jpg' },
{ id: 6, url: 'meme-imgs/meme-imgs (square)/7.jpg' },
{ id: 7, url: 'meme-imgs/meme-imgs (square)/8.jpg' },
{ id: 8, url: 'meme-imgs/meme-imgs (square)/9.jpg' },
{ id: 9, url: 'meme-imgs/meme-imgs (square)/10.jpg' },
{ id: 10, url: 'meme-imgs/meme-imgs (square)/11.jpg' },
{ id: 11, url: 'meme-imgs/meme-imgs (square)/12.jpg' },
{ id: 12, url: 'meme-imgs/meme-imgs (square)/13.jpg' },
{ id: 13, url: 'meme-imgs/meme-imgs (square)/14.jpg' },
{ id: 14, url: 'meme-imgs/meme-imgs (square)/15.jpg' },
{ id: 15, url: 'meme-imgs/meme-imgs (square)/16.jpg' }
]

function getImgs() {
    return gImgs
}

var gMeme = {
    selectedImgId: 15,
    selectedLineIdx: 0,
    selectedLine: 0,
    lines: [
        {
            txt: 'Eating delicious hot schmoes!',
            size: 25,
            color: 'white',
            pos: { x: 200, y: 50 },
            isHighlighted: true
        }, {
            txt: 'Buzz, they\'re called smores.',
            size: 25,
            color: 'white',
            pos: { x: 200, y: 350 },
            isHighlighted: false
        }
    ]
}
var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

//keywords: ['funny', 'cat']

function getMeme() {
    return gMeme
}

function setLineTxt(elTxt) {
    gMeme.lines[gMeme.selectedLine].txt = elTxt.value
    console.log(gMeme.selectedImgId);
    renderMeme()
}

function getPicById(picId) {
    return gImgs.find(pic => picId === pic.id)
}

function onSetColor(color) {
    for (var i = 0; i < gMeme.lines.length; i++) {
        gMeme.lines[i].color = color
    }
    renderMeme()
}

function increaseTextSize() {
    for (var i = 0; i < gMeme.lines.length; i++) {
        gMeme.lines[i].size += 2
    }
    renderMeme()
}

function decreaseTextSize() {
    for (var i = 0; i < gMeme.lines.length; i++) {
        gMeme.lines[i].size -= 2
    }
    renderMeme()
}

function addLine() {
    gMeme.lines.push({
        txt: 'New line',
        size: 25,
        color: 'white',
        pos: { x: 200, y: 200 }
    }
    )
    console.log(gMeme.lines);
    renderMeme()
}

function switchLine() {
    gMeme.selectedLine += 1
    if (gMeme.selectedLine > gMeme.lines.length - 1) {
        gMeme.selectedLine = 0
    }
    console.log(gMeme.selectedLine);
    renderMeme()
}



