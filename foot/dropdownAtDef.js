function ReusFunction() {
    document.getElementById("myDropdownReus").classList.toggle("show");
  }
  
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtnReus")) {
      let dropdowns = document.getElementsByClassName("dropdown-contentReus");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
  
  
  