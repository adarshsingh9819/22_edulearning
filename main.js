// change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)

})


// show/hide faq answer

const faqs = document.querySelectorAll('.faqs');

faqs.forEach(faqs => {
    faqs.addEventListener('click', () => {
        faqs.classList.toggle('open');
    })
})