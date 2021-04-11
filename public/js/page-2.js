const modal = document.querySelector('.modal');
const button = document.querySelector('.challenge');
const chooseButtons = document.querySelectorAll('.choose-friend');

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

function showFriends() {
    // if (!e) {
    //     console.log('no friends to show');
    //     return;
    // }
    // console.log(e);
    openModal();
}
button.addEventListener('click', showFriends)

function select(e) {
    e.classList.toggle('selected');
}
chooseButtons.forEach(button => button.addEventListener('click', e => select(e.currentTarget)));