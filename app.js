const minusPlus = document.querySelectorAll('.plus-minus');
const number = document.querySelector('.num');
const items = document.querySelector('.items');

let count = 1;

minusPlus.forEach((minPlus)=>{
    minPlus.addEventListener('click', (e)=>{
        if(minPlus.classList.contains('plus')){
            count++
            number.textContent = count
        }else if(minPlus.classList.contains('minus')){
            if(count > 0){
                count--
                number.textContent = count
            }else{
                count = 1
                number.textContent = 1
            }
        }
    })
})
// Adding to cart button
const addCartBtn = document.querySelector('.add-cart');
addCartBtn.addEventListener('click', (e)=>{  
    if(count > 0){
        const product = document.querySelector('.produit')
        product.classList.remove('hidden')
        const quantityPrice = document.querySelector('.quantityPrice');
        quantityPrice.textContent = '125.00 x ' + count
        const total = document.querySelector('.total')
        total.textContent = '$' + 125.00 * count + '.00'
        const deleted = document.querySelector('.deleted');
        deleted.addEventListener('click', (e)=>{
            product.classList.add('hidden')
        })
    }
})
// List of items added to the cart
const list = document.querySelector('.list');

list.addEventListener('click', (e)=>{
    items.classList.toggle('show')
})

// changing pictures
const pictures = document.querySelectorAll('.pictures');
const bigPictures = document.querySelector('.bigpics-cont');
const extraPics = document.querySelector('.extra-pictures2')

const pics = ["image-product-1.jpg", "image-product-2.jpg", "image-product-3.jpg", "image-product-4.jpg"]

pictures.forEach((picture)=>{
    picture.addEventListener('click', (e)=>{
        if(picture.classList.contains('pic5')){
            bigPictures.style.backgroundImage = `url(images/${pics[0]})`
            pictures.forEach(picture => picture.classList.remove('opacity'));
            picture.classList.add('opacity')
        }else if(picture.classList.contains('pic6')){
            bigPictures.style.backgroundImage = `url(images/${pics[1]})`
            pictures.forEach(picture => picture.classList.remove('opacity'));
            picture.classList.add('opacity')
        }else if(picture.classList.contains('pic7')){
            bigPictures.style.backgroundImage = `url(images/${pics[2]})`
            pictures.forEach(picture => picture.classList.remove('opacity'));
            picture.classList.add('opacity')
        }else if(picture.classList.contains('pic8')){
            bigPictures.style.backgroundImage = `url(images/${pics[3]})`
            pictures.forEach(picture => picture.classList.remove('opacity'));
            picture.classList.add('opacity')
        }
    })
})
const imags = document.querySelectorAll('.small-pictures2')
bigPictures.addEventListener('click', (e)=>{
    const fullPic = document.createElement('div');
    fullPic.classList.add('lightbox');
    fullPic.style.backgroundImage = bigPictures.style.backgroundImage

    const div = document.createElement('div');
    div.classList.add('extra')
    fullPic.appendChild(div);
    const img1 = document.createElement('img');
    img1.classList.add('small')
    img1.src = 'images/image-product-1-thumbnail.jpg'
    const img2 = document.createElement('img');
    img2.classList.add('small')
    img2.src = 'images/image-product-2-thumbnail.jpg'
    const img3 = document.createElement('img');
    img3.classList.add('small')
    img3.src = 'images/image-product-3-thumbnail.jpg'
    const img4 = document.createElement('img');
    img4.classList.add('small')
    img4.src = 'images/image-product-4-thumbnail.jpg'

    div.appendChild(img1)
    div.appendChild(img2)
    div.appendChild(img3)
    div.appendChild(img4)

    img1.addEventListener('click', (e)=>{
        fullPic.style.backgroundImage = `url(images/${pics[0]})`
    })
    img2.addEventListener('click', (e)=>{
        fullPic.style.backgroundImage = `url(images/${pics[1]})`
    })
    img3.addEventListener('click', (e)=>{
        fullPic.style.backgroundImage = `url(images/${pics[2]})`
    })
    img4.addEventListener('click', (e)=>{
        fullPic.style.backgroundImage = `url(images/${pics[3]})`
    })

    const darken = document.createElement('div')
    darken.classList.add('darken')

    document.body.appendChild(fullPic);
    document.body.appendChild(darken);

    darken.addEventListener('click', function() {
        document.body.removeChild(fullPic);
        document.body.removeChild(darken);
    });

    const span1 = document.createElement('span');
    span1.classList.add('material-symbols-outlined')
    span1.classList.add('arrow1')
    span1.textContent = 'arrow_back_ios'
    fullPic.appendChild(span1);
    const span2 = document.createElement('span');
    span2.classList.add('material-symbols-outlined')
    span2.classList.add('arrow2')
    span2.textContent = 'arrow_forward_ios'
    fullPic.appendChild(span2);

    span2.addEventListener('click', (e)=>{
        count++
        fullPic.style.backgroundImage = `url(images/${pics[count]})`
        if(count > pics.length - 1){
            count = 0
            fullPic.style.backgroundImage = `url(images/${pics[count]})`
        }
    })
    span1.addEventListener('click', (e)=>{
        count--
        fullPic.style.backgroundImage = `url(images/${pics[count]})`
        if(count < 0){
            count = pics.length -1
            fullPic.style.backgroundImage = `url(images/${pics[count]})`
        }
    })

    const closeBtn = document.createElement('span')
    closeBtn.classList.add('close')
    closeBtn.classList.add('material-symbols-outlined')
    closeBtn.textContent = ' close '
    fullPic.appendChild(closeBtn);

    closeBtn.addEventListener('click', function() {
        document.body.removeChild(fullPic);
        document.body.removeChild(darken);
    });
})

