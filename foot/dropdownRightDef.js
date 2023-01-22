function CarvajalFunction() {
    document.getElementById("myDropdownCarvajal").classList.toggle("show");
  }
  
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtnCarvajal")) {
      let dropdowns = document.getElementsByClassName("dropdown-contentCarvajal");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
  
  
  