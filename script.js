function openPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";
  };

  function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
  }
  function openPopup_medidor() {
    var medidor = document.getElementById("medidor");
    medidor.style.display = "block";
  }
  
  function closePopup_medidor() {
    var medidor = document.getElementById("medidor");
    medidor.style.display = "none";
  }

  function activarAnimacion() {
    var tuerca = document.querySelector('.tuerca');
    tuerca.classList.add('girando');
  }  
