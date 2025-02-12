function initModal(){
    const modal = document.getElementById("modalBox");
    const modalList = document.querySelectorAll(".modal-link");
    const close = document.getElementsByClassName("close")[0];
  
  function activeModal(){
    modal.style.display = "block";
  };
  
  close.onclick = function() {
    modal.style.display = "none";
  };
  window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
  };
  
    modalList.forEach((item) => {
    item.addEventListener("click", activeModal)
    });
  }   
  
  initModal()