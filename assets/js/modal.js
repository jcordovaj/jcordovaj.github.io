  function toggleModal() {
  const modal = document.getElementById('myModal');
  modal.style.display = 'block';

  const closeBtn = document.querySelector('.close');
  closeBtn.onclick   
 = function() {
    modal.style.display = 'none';   

  };
}