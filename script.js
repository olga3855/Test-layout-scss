// $(".phone_mask").mask("+7(999)999-99-99");

document.querySelector('.burger').addEventListener('click', (e) => {
    const nav = document.querySelector('.navigation ul');
    e.currentTarget.classList.toggle('burger-menu__active');
    nav.classList.toggle('hidden');
});

function toggle() {
    const nav = document.querySelector('.navigation ul');
    document.querySelector('.burger').classList.toggle('burger-menu__active');
    nav.classList.toggle('hidden');
}

document.querySelectorAll('.navigation__link').forEach((el) => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        toggle(e);
    });
});