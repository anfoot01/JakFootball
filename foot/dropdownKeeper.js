function TerSchtegenFunction() {
    document.getElementById("myDropdownTerSchtegen").classList.toggle("show");
  }
  
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtnTerSchtegen")) {
      let dropdowns = document.getElementsByClassName("dropdown-contentTerSchtegen");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
  
  
  