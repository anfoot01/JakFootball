function RonaldoFunction() {
    document.getElementById("myDropdownRonaldo").classList.toggle("show");
  }
  
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtnRonaldo")) {
      let dropdowns = document.getElementsByClassName("dropdown-contentRonaldo");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
  
  
  