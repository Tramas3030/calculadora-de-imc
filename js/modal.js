export const Modal = {
    wrapper: document.querySelector('.modalWrapper'),
    message: document.querySelector('.modal .title span'),
    buttonClose: document.querySelector('.modal button.close'),

    open() {
        Modal.wrapper.classList.add('open');
    },
    close() {
        Modal.wrapper.classList.remove('open');
    }
}


Modal.buttonClose.onclick = () => {
    Modal.close();
}

window.addEventListener('keydown', function(event) {
    if(event.key === 'Escape') {
        Modal.close();
    }
})