function MessiFunction() {
    document.getElementById("myDropdownMessi").classList.toggle("show");
  }
  
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtnMessi")) {
      let dropdowns = document.getElementsByClassName("dropdown-contentMessi");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };