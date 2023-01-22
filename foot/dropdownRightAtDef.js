function VerratiFunction() {
    document.getElementById("myDropdownVerrati").classList.toggle("show");
  }
  
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtnVerrati")) {
      let dropdowns = document.getElementsByClassName("dropdown-contentVerrati");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
  
  
  