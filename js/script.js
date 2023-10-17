$(document).ready(function() {
    $('.slider').slick({
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3
});
});
$(document).ready(function() {
    $('.slider__for_pl').slick({
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 2
    })
})
$(document).ready(function() {
    $('.slider__for_mb').slick({
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
    })
})
$(document).ready(function() {
    $('.main__slider').slick({
        arrows: true,
});
});
$(document).ready(function() {
    $('.masters__slider').slick({
        arrows: true,
});
});



const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.add('active')
})

const removeClass = (DeleteStyleTrigger) => {
    const trigger = document.querySelector(DeleteStyleTrigger);

    trigger.addEventListener('click', () => {
        menu.classList.remove('active')
    })
}

removeClass('.menu__close');
removeClass('.menu__overlay');



const phoneInput = document.querySelector('input[type="tel"]');
const btn = document.querySelector(".footer__btn");
const nameInput = document.querySelector('input[name="name"]');
const textarea = document.querySelector('textarea')

const mask = new IMask(phoneInput, {
    mask: '+{375}-(00)-000-00-00'
});


textarea.addEventListener('input', (e) => {
    if (e.target.value.length > 20 && nameInput.value.length > 2) {
        btn.classList.add('footer__btn-active')
    }
})

btn.addEventListener("click", (e) => {
    e.preventDefault();
    const elem = document.createElement('div');
    const elemText = document.createTextNode('спасибо, скоро мы с вами свяжемся');
    elem.appendChild(elemText);

    elem.classList.add('footer__abs')
    setTimeout(() => {
        elem.style.display = "none"
    }, 5000)
    document.querySelector('.footer__wrapper').appendChild(elem);
    document.querySelectorAll('input[data-inputs]').forEach(item => {
        item.value = '';
    })
    textarea.value = '';
    btn.classList.remove('footer__btn-active');
})





//modules
const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });

        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    const menuDetails = (menuLinkDet, identifier) => {
        const menuLink = document.getElementById(menuLinkDet)
        menuLink.addEventListener('click', () => {
            hideTabContent();
            showTabContent(identifier);
        })
    }

    function showTabContent(i = 0) {
        content[i].style.display = 'flex';
        tab[i].classList.add(activeClass);
        menuDetails('det', 1);
        menuDetails('promo_det', 1);
        menuDetails('promo_pasting', 0);
        menuDetails('pasting', 0);
        // menuLink.addEventListener('click', () => {
        //     hideTabContent();
        //     showTabContent(1);
        // })
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
        e.preventDefault()
        const target = e.target;
        if (target &&
            (target.classList.contains(tabSelector.replace(/\./, "")) || 
        target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
};

tabs('.services__services', '.services__item', '.services__contant', 'fade');



const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]');

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                windows.forEach(item => {
                    item.style.display = 'none';
                });
    
                modal.style.display = "block";
                modal.classList.add('opacity')
                document.body.style.overflow = "hidden";
                // document.body.classList.add('modal-open');
            });
        });

        close.addEventListener('click', () => {
            windows.forEach(item => {
                modal.classList.remove('opacity');
                modal.style.display = "none";
            });
            modal.style.display = "none";
            modal.classList.remove('opacity');
            document.body.style.overflow = "";
            // document.body.classList.remove('modal-open');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                windows.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = "none";
                document.body.style.overflow = "";
                // document.body.style.overflow = "hidden"; 
                // document.body.classList.remove('modal-open');
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(function() {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = "hidden";
        }, time);
    }
    bindModal('#promo__gallery', '#popup__gallery', '.popup__area')
    bindModal('#footer__gallery', '#popup__gallery', '.popup__area')

    // showModalByTime('.popup', 60000);
};
modals();


function detailedBtns(triggerSel, servicesCard, elemClass, text) {
    const trigger = document.querySelector(triggerSel);
    const card = document.querySelector(servicesCard);
    const elemText = document.createTextNode(text);
    const elem = document.createElement('div');


    trigger.addEventListener('click', () => {
        elem.style.display = "block";
        elem.appendChild(elemText);
        card.classList.remove('minusHeight');
        card.classList.add('plusHeight')
        elem.classList.add(elemClass);
        elem.classList.add('opacity');
        card.appendChild(elem);
        trigger.style.display = "none";
    });

    elem.addEventListener('click', () => {
        trigger.style.display = "inline-block";
        elem.style.display = "none";
        card.classList.remove('plusHeight');
        card.classList.add('minusHeight');
    });
}

detailedBtns('#films', '#firstCard', 'services__details', 'Защитные пленки на окна различной степени защиты спасут Ваши окна от недоброжелателей, так же широко применяется для усиления перегородок и витрин.');
detailedBtns('#colorFilms', '#secondCard', 'services__details', 'Предназначена для оклейки стеклянных поверхностей внутри и снаружи. Также применяется в декоративных или тонировочных целях, для офисных помещений.');
detailedBtns('#design', '#thirdCard', 'services__details', 'Разработка концепции дизайн проекта со снятием размеров автомобиля и адаптацией макета.');
detailedBtns('#secondPastic', '#fourthCard', 'services__details', 'Предлагаем услугу по реставрации и декорированию пластиковых элементов салона путем нанесения специальных виниловых пленок.');
detailedBtns('#compWashing', '#fifthCard', 'services__details', 'Комплексная мойка включает в себя следующие виды работ: Бесконтактная мойка кузова автомобиля, мойка ковриков и пороги.');
detailedBtns('#polishing', '#sixthCard', 'services__details', 'Деликатная полировка авто в Витебске. Придадим блеск и насыщенный цвет вашему автомобилю. Мягкая или восстановительная полировка на выбор.');
detailedBtns('#degreasing', '#seventhCard', 'services__details', 'Процесс обработки кузова автомобиля, целью которого является удаление водонерастворимых соединений органического происхождения.');
detailedBtns('#universal', '#lastCard', 'services__details', 'У нас вы можете приобрести Универсальная мойка в Минск - широкий ассортимент, доставка по стране.');








