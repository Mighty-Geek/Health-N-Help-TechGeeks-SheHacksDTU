const modal = document.querySelector('.modal');
const button = document.querySelector('.redeem');

function openModal() {
    console.info('Opening modal');
    if (modal.matches('.open')) {
        console.info('Modal already open');
        return;
    }
    modal.classList.add('open');
}
function closeModal() {
    modal.classList.remove('open');
}

function handleClickOutside(e) {
    if (e.target === e.currentTarget) {
        closeModal();
    }
}
// TODO: condition for coupons

// modal.addEventListener('click', handleClickOutside);
function show() {
    openModal();
}
button.addEventListener('click', show)