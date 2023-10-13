const mengetik = new Typed(".typing", {
  strings : ["Official Wattpad Group on WhatsApp"],
  typeSpeed : 70,
  backSpeed : 50,
  loop : true
});
const scriptURL = 'https://script.google.com/macros/s/AKfycbyZ5RLeHOVatLhrLE7nSoL22kEB5s9OTgyOIezKEJIvpYE2ROsYf35UBJMJ2D88WkknhQ/exec';
const form = document.forms['submit-to-google-sheet'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAllert = document.querySelector('.my-alert');
form.addEventListener('submit', e => {
  e.preventDefault();
  btnLoading.classList.toggle('d-none');
  btnKirim.classList.toggle('d-none');
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
       btnLoading.classList.toggle('d-none');
       btnKirim.classList.toggle('d-none');
       myAllert.classList.toggle('d-none');
       form.reset();
       console.log('Success!', response);
    })
    .catch(error => console.error('Error!', error.message));
  
});