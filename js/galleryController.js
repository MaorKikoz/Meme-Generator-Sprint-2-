'use strict'

function renderGallery(gallery) {
   	const elGallery = document.querySelector('.gallery')
	const imgs = gallery

	var galleryHtml = ''
	for (var i = 0; i < imgs.length; i++) {
		//const txt = getTxt(txtLength)
                //console.log(imgs[i])
	            galleryHtml += `
                <img src="${imgs[i].url} "onclick="onSelectPic(${imgs[i].id})">`
	}

	elGallery.innerHTML = galleryHtml
}