function toggleModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'block';

  const closeBtn = modal.querySelector('.close');
  closeBtn.onclick = function() {
    modal.style.display = 'none';
  };
}