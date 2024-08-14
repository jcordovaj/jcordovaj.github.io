/*  function toggleModal() {
  const modal = document.getElementById('myModal');
  modal.style.display = 'block';

  const closeBtn = document.querySelector('.close');
  closeBtn.onclick   
 = function() {
    modal.style.display = 'none';   

  };
}
*/

function toggleModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'block';

  const closeBtn = modal.querySelector('.close');
  closeBtn.onclick = function() {
    modal.style.display = 'none';
  };
}