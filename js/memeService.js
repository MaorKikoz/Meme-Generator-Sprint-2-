'use strict'

var gImgs = [{ id: 1, url: 'meme-imgs/meme-imgs (square)/1.jpg' },
{ id: 2, url: 'meme-imgs/meme-imgs (square)/2.jpg' },
{ id: 3, url: 'meme-imgs/meme-imgs (square)/3.jpg' },
{ id: 4, url: 'meme-imgs/meme-imgs (square)/4.jpg' },
{ id: 5, url: 'meme-imgs/meme-imgs (square)/5.jpg' },
{ id: 6, url: 'meme-imgs/meme-imgs (square)/6.jpg' },
{ id: 7, url: 'meme-imgs/meme-imgs (square)/7.jpg' },
{ id: 8, url: 'meme-imgs/meme-imgs (square)/8.jpg' },
{ id: 9, url: 'meme-imgs/meme-imgs (square)/9.jpg' },
{ id: 10, url: 'meme-imgs/meme-imgs (square)/10.jpg' },
{ id: 11, url: 'meme-imgs/meme-imgs (square)/11.jpg' },
{ id: 12, url: 'meme-imgs/meme-imgs (square)/12.jpg' },
{ id: 13, url: 'meme-imgs/meme-imgs (square)/13.jpg' },
{ id: 14, url: 'meme-imgs/meme-imgs (square)/14.jpg' },
{ id: 15, url: 'meme-imgs/meme-imgs (square)/15.jpg' },
{ id: 16, url: 'meme-imgs/meme-imgs (square)/16.jpg' },
]
var gMeme = {
    selectedImgId: 16,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'In just a few hours, you will be sitting around a campire with Andy, eating delicious hot schmoes!',
            size: 20,
            color: 'red'
        }
    ]
}
var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

//keywords: ['funny', 'cat']