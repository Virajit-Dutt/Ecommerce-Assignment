// Open sidebar
document.querySelector('#menu-icon').addEventListener('click', showSideBar => {
    const sideBar = document.querySelector('.sidebar');
    sideBar.style.display = 'flex';
});

// Close sidebar
document.querySelector('#close-icon').addEventListener('click', hideSideBar => {
    const sideBar = document.querySelector('.sidebar');
    sideBar.style.display = 'none';
});

// Substract quantity from product
document.querySelector('#minus').addEventListener('click', subQuantity => {
    const inventory = document.querySelector('.prod-quantity')
    const quantity = inventory.innerHTML
    if (quantity <= 0){
        inventory.innerHTML = 0
    }
    else{
        inventory.innerHTML = parseInt(quantity) - 1
    }
});

// Add quantity to product
document.querySelector('#plus').addEventListener('click', addQuantity => {
    const inventory = document.querySelector('.prod-quantity')
    const quantity = inventory.innerHTML
    inventory.innerHTML = parseInt(quantity) + 1
});

// Cart Display
document.querySelector('.cart-icon').addEventListener('click', showHideCart => {
    const cart = document.querySelector('.cart');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const screenWidth = window.innerWidth;

    if (cart.style.display === 'block'){
        cart.style.display = 'none';
        if (screenWidth <= 810){
            prev.style.display = 'flex';
            next.style.display = 'flex';
        }
    }
    else{
        if (screenWidth <= 810){   
            prev.style.display = 'none';
            next.style.display = 'none';
        }
        cart.style.display = 'block';
    }
});

// Previous button for product images
document.querySelector('.prev').addEventListener('click', showPrev => {
    const mainImage = document.querySelector('.main-img');
    const number = mainImage.src.split('product-')[1].split('.')[0];
    if (parseInt(number) === 1){
        mainImage.src = mainImage.src.replace('product-1', 'product-4');
    }
    else{
        mainImage.src = mainImage.src.replace('product-'+parseInt(number), 'product-'+(parseInt(number) - 1));
    }
});

// Next button for product images
document.querySelector('.next').addEventListener('click', showNext => {
    const mainImage = document.querySelector('.main-img');
    const number = mainImage.src.split('product-')[1].split('.')[0];
    if (parseInt(number) === 4){
        mainImage.src = mainImage.src.replace('product-4', 'product-1');
    }
    else{
        mainImage.src = mainImage.src.replace('product-'+parseInt(number), 'product-'+(parseInt(number) + 1));
    }
});

// Check if any thumbnail class is clicked
document.querySelectorAll('.product .prod-img .thumbnail-img .th-img .thumbnail-image').forEach(item => {
    item.addEventListener('click', function(){
        const mainImage = document.querySelector('.product .prod-img .main-img-div .main-img');
        item.src = item.src.replace('-thumbnail', '');
        mainImage.src = item.src;

        // Change border color of clicked thumbnail
        document.querySelectorAll('.product .prod-img .thumbnail-img .th-img .thumbnail-image').forEach(item => {
            item.parentElement.style.border = 'none';
            item.style.opacity = '1';
            item.parentElement.classList.remove('th-clicked');
        });
        item.parentElement.style.border = '3px solid hsl(26, 100%, 55%)'; // DONT REMOVE THIS
        item.style.opacity = '0.5'; // DONT REMOVE THIS
        item.parentElement.classList.add('th-clicked');
    });

    // make temporary border color of thumbnail when mouse enters
    item.addEventListener('mouseenter', function(){
        item.parentElement.style.border = '3px solid hsl(26, 100%, 55%)';
        item.style.opacity = '0.5';
    });

    // Remove border color of thumbnail when mouse leaves
    item.addEventListener('mouseleave', function(){
        if (item.parentElement.classList.contains('th-clicked')){
            return
        }
        item.parentElement.style.border = 'none';
        item.style.opacity = '1';
    });
});

// Show LightBox when main image is clicked
document.querySelector('.product .prod-img .main-img-div .main-img').addEventListener('click', showLightBox => {
    // Check if window width is less than 810px
    const screenWidth = window.innerWidth;
    if (screenWidth > 810){
        const lightBox = document.querySelector('.lightBox');
        const mainLightBoxImage = document.querySelector('.lightBox .prod-img .main-img-div .main-img');
        const mainImage = document.querySelector('.product .prod-img .main-img-div .main-img');
        mainLightBoxImage.src = mainImage.src;
        lightBox.style.display = 'flex';
    }
    else{
        return;
    }
});

// Hide lightBox
document.querySelector('.lclose').addEventListener('click', hideLightBox => {
    const lightBox = document.querySelector('.lightBox');
    // remove th-clicked class from thumbnail
    document.querySelectorAll('.lightBox .prod-img .thumbnail-img .th-img .thumbnail-image').forEach(item => {
        item.parentElement.style.border = 'none';
        item.style.opacity = '1';
        item.parentElement.classList.remove('th-clicked');
    });
    lightBox.style.display = 'none';
});

// Check if any thumbnail class is clicked for lightBox
document.querySelectorAll('.lightBox .prod-img .thumbnail-img .th-img .thumbnail-image').forEach(item => {
    item.addEventListener('click', function(){
        const mainImage = document.querySelector('.lightBox .prod-img .main-img-div .main-img');
        item.src = item.src.replace('-thumbnail', '');
        mainImage.src = item.src;

        // Change border color of clicked thumbnail
        document.querySelectorAll('.lightBox .prod-img .thumbnail-img .th-img .thumbnail-image').forEach(item => {
            item.parentElement.style.border = 'none';
            item.style.opacity = '1';
            item.parentElement.classList.remove('th-clicked');
        });
        item.parentElement.style.border = '3px solid hsl(26, 100%, 55%)';
        item.style.opacity = '0.5';
        item.parentElement.classList.add('th-clicked');
    });

    // make temporary border color of thumbnail when mouse enters
    item.addEventListener('mouseenter', function(){
        item.parentElement.style.border = '3px solid hsl(26, 100%, 55%)';
        item.style.opacity = '0.5';
    });

    // Remove border color of thumbnail when mouse leaves
    item.addEventListener('mouseleave', function(){
        if (item.parentElement.classList.contains('th-clicked')){
            return
        }
        item.parentElement.style.border = 'none';
        item.style.opacity = '1';
    });
});

// Previous button for lightBox
document.querySelector('.lprev').addEventListener('click', showPrev => {
    const mainImage = document.querySelector('.lightBox .prod-img .main-img-div .main-img');
    const number = mainImage.src.split('product-')[1].split('.')[0];
    if (parseInt(number) === 1){
        mainImage.src = mainImage.src.replace('product-1', 'product-4');
    }
    else{
        mainImage.src = mainImage.src.replace('product-'+parseInt(number), 'product-'+(parseInt(number) - 1));
    }
});

// Next button for lightBox
document.querySelector('.lnext').addEventListener('click', showNext => {
    const mainImage = document.querySelector('.lightBox .prod-img .main-img-div .main-img');
    const number = mainImage.src.split('product-')[1].split('.')[0];
    if (parseInt(number) === 4){
        mainImage.src = mainImage.src.replace('product-4', 'product-1');
    }
    else{
        mainImage.src = mainImage.src.replace('product-'+parseInt(number), 'product-'+(parseInt(number) + 1));
    }
});

// Hide sidebar when clicked outside
document.addEventListener('click', e => {
    const sideBar = document.querySelector('.sidebar');
    if (event.target.closest('.sidebar') || event.target.closest('#menu-icon')){
        return;
    }
    sideBar.style.display = 'none';
});

// Hide cart when clicked outside
document.addEventListener('click', e => {
    const cart = document.querySelector('.cart');
    if (event.target.closest('.cart') || event.target.closest('.cart-icon')){
        return;
    }
    cart.style.display = 'none';

    if (window.innerWidth <= 810){
        const prev = document.querySelector('.prev');
        const next = document.querySelector('.next');
        prev.style.display = 'flex';
        next.style.display = 'flex';
    }

    if (window.innerWidth > 810){
        const prev = document.querySelector('.prev');
        const next = document.querySelector('.next');
        prev.style.display = 'none';
        next.style.display = 'none';
    }
});

// Add to cart button
document.querySelector('.prod-cart-btn').addEventListener('click', addToCart => {
    const quantity = document.querySelector('.prod-quantity').innerHTML;
    const price = document.querySelector('.item-price').innerHTML;
    
    const dispQuantity = document.querySelectorAll('.cart-quantity');
    const dispPrice = document.querySelector('.product-price');
    const dispAmount = document.querySelector('.cart-total-amount');
    
    dispQuantity[0].innerHTML = parseInt(dispQuantity[0].innerHTML) + parseInt(quantity);
    dispQuantity[1].innerHTML = parseInt(dispQuantity[1].innerHTML) + parseInt(quantity);
    dispPrice.innerHTML = price;
    dispAmount.innerHTML = (parseInt(dispAmount.innerHTML) + (parseInt(price) * parseInt(quantity)));
    
    document.querySelector('.prod-quantity').innerHTML = 0;

    if (parseInt(dispQuantity[0].innerHTML) > 0){
        dispQuantity[0].style.display = 'block';
        const cartFilled = document.querySelector('.cart-filled');
        cartFilled.style.display = 'block';
        const cartEmpty = document.querySelector('.cart-empty');
        cartEmpty.style.display = 'none';
    }
    else{
        dispQuantity[0].style.display = 'none';
        const cartFilled = document.querySelector('.cart-filled');
        cartFilled.style.display = 'none';
        const cartEmpty = document.querySelector('.cart-empty');
        cartEmpty.style.display = 'flex';
    }
});

// Remove from cart button
document.querySelector('#delete-item').addEventListener('click', removeFromCart => {
    const dispQuantity = document.querySelectorAll('.cart-quantity');
    const dispPrice = document.querySelector('.product-price');
    const dispAmount = document.querySelector('.cart-total-amount');
    
    dispQuantity[0].innerHTML = 0;
    dispQuantity[1].innerHTML = 0;
    dispPrice.innerHTML = 0;
    dispAmount.innerHTML = 0;

    dispQuantity[0].style.display = 'none';
    const cartFilled = document.querySelector('.cart-filled');
    cartFilled.style.display = 'none';
    const cartEmpty = document.querySelector('.cart-empty');
    cartEmpty.style.display = 'flex';

});

// Hide elements when width is greater than 810px automatically
window.addEventListener('resize', e => {
    const screenWidth = window.innerWidth;
    const sideBar = document.querySelector('.sidebar');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    if (screenWidth > 810){
        sideBar.style.display = 'none';
        prev.style.display = 'none';
        next.style.display = 'none';
    }
    else{
        prev.style.display = 'flex';
        next.style.display = 'flex';
    }
});