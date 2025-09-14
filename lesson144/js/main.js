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
    });


    const toggleTab = (e) =>{
        const tabControl = e.target.closest('.tab-controls__link');
        const tabContent = document.querySelector(tabControl.getAttribute('href'));
        const activeContent = document.querySelector('.tab-content--show');
        const activeControl = document.querySelector('.tab-controls__link--active');

        if (!tabControl) return;

        e.preventDefault();

        if (tabControl.classList.contains('tab-controls__link--active')) return;

        if(activeControl) {
            activeControl.classList.remove('tab-controls__link--active');
        }

        if(activeContent) {
            activeContent.classList.remove('tab-content--show');
        }

        tabContent.classList.add('tab-content--show');
        tabControl.classList.add('tab-controls__link--active');        
    }

    const tabControls = document.querySelector('.tab-controls');

    tabControls.addEventListener('click', toggleTab);

    //accordeon

    const accordionLists = document.querySelectorAll('.accordion-list__control');
    
    accordionLists.forEach(el => {
        el.addEventListener('click', (e) => {
            const accordionControl = e.target.closest('.accordion-list__control');

            if(!accordionLists) return;

            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;
            const accordionOpenedItem = document.querySelector('.accordion-list__item--opened');

            if (accordionOpenedItem && accordionOpenedItem != accordionItem){
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedItem.querySelector('.accordion-list__content').style.maxHeight = null;
            }

            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')){
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }
        })
    })
    

})()