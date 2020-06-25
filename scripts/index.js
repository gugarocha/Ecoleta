function handleModalHide() {
    document.querySelector('#modal').classList.toggle('hide')
}

document
    .querySelector('#page-home main a')
    .addEventListener('click', handleModalHide)

document
    .querySelector('#modal .header a')
    .addEventListener('click', handleModalHide)