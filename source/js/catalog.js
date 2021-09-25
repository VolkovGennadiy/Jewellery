const filterProduct = document.querySelector('.main-filter__field--prodcut');
const filterMat = document.querySelector('.main-filter__field--material');
const filterCol = document.querySelector('.main-filter__field--collection');
const filterPrice = document.querySelector('.main-filter__field--price');
const filtrList = document.querySelector('.main-filter__list--product');
const filtrListProd = document.querySelector('.main-filter__list--product');
const filtrListMat = document.querySelector('.main-filter__list--material');
const filtrListCol = document.querySelector('.main-filter__list--collection');
const filtrListPrice = document.querySelector('.main-filter__range');
const filterBtn = document.querySelector('.main-filter__button--filter');
const filterPopup = document.querySelector('.main-filter--modal');

filterProduct.addEventListener('click', function (evt) {
  filtrListProd.classList.toggle('main-filter__list--hiden');
  filterProduct.classList.toggle('main-filter__field--toggle');
})
  
filterMat.addEventListener('click', function (evt) {
  filtrListMat.classList.toggle('main-filter__list--hiden');
  filterMat.classList.toggle('main-filter__field--toggle');
})
  
filterCol.addEventListener('click', function (evt) {
  filtrListCol.classList.toggle('main-filter__list--hiden');
  filterCol.classList.toggle('main-filter__field--toggle');
})
  
filterPrice.addEventListener('click', function (evt) {
  filtrListPrice.classList.toggle('main-filter__range--hiden');
  filterPrice.classList.toggle('main-filter__field--toggle');
})

filterBtn.addEventListener('click', function evt() {
  filterPopup.classList.add('main-filter--open');
})