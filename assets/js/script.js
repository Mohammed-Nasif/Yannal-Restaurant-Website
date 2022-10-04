/* Change The Number Of Items In Cart Dynamically*/
const addProductBtn = document.querySelectorAll('.addToCart');
const shopCart = document.getElementById('cart');
addProductBtn.forEach((btn) => {
    btn.onclick = () => {
        shopCart.dataset.count++;
    }
})


/*Scroll To Top Btn Functionality*/
const btn = document.getElementById('popup_btn');
window.onscroll = () => {
	if (window.scrollY > 300) {
		btn.classList.add('show');
	} else {
		btn.classList.remove('show');
	}
};
btn.onclick = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
};
