function MbappeFunction() {
    document.getElementById("myDropdownMbappe").classList.toggle("show");
  }
  
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtnMbappe")) {
      let dropdowns = document.getElementsByClassName("dropdown-contentMbappe");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };