function IscoFunction() {
    document.getElementById("myDropdownIsco").classList.toggle("show");
  }
  
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtnIsco")) {
      let dropdowns = document.getElementsByClassName("dropdown-contentIsco");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
  
  
  