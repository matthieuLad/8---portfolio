const openModal1 = function (e) {
    e.preventDefault();
    const target = document.getElementById("modal1");
    target.style.display = "flex";
    target.addEventListener("click", closeModal1);
    target
      .querySelector(".js-modal-stop")
      .addEventListener("click", stopPropagation);
    target.querySelector(".modal-close").addEventListener("click", closeModal1);
  };
  
  const closeModal1 = function (e) {
    e.preventDefault();
    const target = document.getElementById("modal1");
    target.style.display = "none";
    target.removeEventListener("click", closeModal1);
    backToModalOne(e);
  };
  
  const stopPropagation = function (e) {
    e.stopPropagation();
  };
  
  document.getElementById("js-modal1").addEventListener("click", openModal1); 