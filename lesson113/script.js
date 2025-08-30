const btnOpen = document.querySelector('.btn-open');
const modalWrapper = document.querySelector('.modal');
const body = document.body;

const openModal = () => {
    modalWrapper.classList.add('modal--open');
    body.classList.add('body--fixed');
}

const closeModal = () => {
    modalWrapper.classList.remove('modal--open');
    modalWrapper.classList.remove('body--fixed');
}

btnOpen.addEventListener('click', openModal);

modalWrapper.addEventListener('click', event => {
    const target = event.target;
    if(target && target.classList.contains('modal') || target.classList.contains('modal__close-btn')){
        closeModal();
    }
})

document.addEventListener('keydown', event => {
    if(event.code === "Escape" && modalWrapper.classList.contains('modal-open')){
        closeModal();
    }
})