(function() {


    const burgerInit = (event) => {

        const burgerIcon = event.target.closest('.burger-icon');
        const burgerNavLink = event.target.closest('.nav__link');

        if(!burgerIcon && !burgerNavLink) return;

        if(document.documentElement.clientWidth > 900) return;

        if(!document.body.classList.contains('body--opened-menu')){
            document.body.classList.add('body--opened-menu');
        } else {
            document.body.classList.remove('body--opened-menu');
        }

    }

    document.addEventListener('click', burgerInit);

    const buttonModal = document.querySelector('.about__img-button');
    const modal = document.querySelector('.modal');

    const openModal = (event) => {
        console.log(event.target);
        event.preventDefault();
        document.body.classList.toggle('body--opened-modal');
    }

    const closeModal = (event) => {
        event.preventDefault();

        const target  = event.target;

        if(target.closest('.modal__cancel') || target.classList.contains('modal')){
            document.body.classList.remove('body--opened-modal');
        }

    }

    buttonModal.addEventListener('click', openModal);
    modal.addEventListener('click', closeModal);

    document.addEventListener('keydown', event => {
        console.log(event.code);
        if(event.code === "Escape" && document.body.classList.contains('body--opened-modal')){
            document.body.classList.remove('body--opened-modal');
        }
    })

})()