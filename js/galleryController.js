'use strict'

function renderGallery(gallery) {
   	const elGallery = document.querySelector('.gallery')
	const imgs = gallery

	var galleryHtml = ''
	for (var i = 0; i < imgs.length; i++) {
		//const txt = getTxt(txtLength)
        var imgUrl = imgs[i].url
                console.log(imgs[i])
	            galleryHtml += `
                <img onclick="onSelectImg(this)" src="${imgUrl}">`
	}

	elGallery.innerHTML = galleryHtml
}