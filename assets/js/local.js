 /*     Script: Limpia el formulario de correo     */
            const form = document.querySelector('form');
            const cancelButton = document.querySelector('.contact__button__cancel');
            cancelButton.addEventListener('click', () => {
                form.reset();
            });

