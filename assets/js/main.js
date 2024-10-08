/*     FUNCIÓN: Mostrar Menu por elemento     */ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*     FUNCIÓN: Ajustar Menu para Móviles     */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*     FUNCIÓN: Recorre secciones activa link     */
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    /* deprecated const scrollY = window.pageYOffset */
    const scrollY = window.scrollY
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

/*     FUNCIÓN: Muestra animación al recorrer las secciones (Librería ScrollReveal)   */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.home__title', {})
sr.reveal('.home__scroll', {delay: 200})
sr.reveal('.home__img', {origin:'right', delay: 400})

/*SCROLL ABOUT*/
sr.reveal('.about__img', {delay: 500})
sr.reveal('.about__subtitle', {delay: 300})
sr.reveal('.about__profession', {delay: 400})
sr.reveal('.about__text', {delay: 500})
sr.reveal('.about__social-icon', {delay: 600, interval: 200})

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {})
/* REEMPL SKILLS__TEXT sr.reveal('.skills__name', {distance: '20px', delay: 50, interval: 100})*/
sr.reveal('.skills__text', {delay: 400})
sr.reveal('.skills__img', {delay: 500})
sr.reveal('.MultiCarousel', {delay: 600}) /* Librería usada para mostrar las credenciales*/

/*SCROLL PORTAFOLIO*/
sr.reveal('.proyectos__subtitle.proyectos__bordes', {interval: 200})
sr.reveal('.proyectos__text.proyectos__bordes', {interval: 400})
sr.reveal('.media.service-box', {interval: 600})
sr.reveal('.portfolio__img', {interval: 800})

/*SCROLL PUBLICACIONES*/
sr.reveal('.pubs__subtitle', {interval: 200})
/*sr.reveal('.pubs__text.pad__parrafo', {distance: '40px', delay: 50, interval: 150})*/
sr.reveal('.pubs__text', {interval: 400}) /*reemplaza para testear aparición por párrafo*/
sr.reveal('.card.card-block.pad__cards', {interval: 600})

/*SCROLL TIMELINE*/
sr.reveal('.news-content', {distance: '50px', delay: 50, interval: 100})

/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', {interval: 200})
sr.reveal('.contact__input', {delay: 400})
sr.reveal('.contact__button', {delay: 500})
sr.reveal('.contact__button__cancel', {delay: 600})
sr.reveal('.contact__map', {delay: 500})