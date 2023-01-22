function ZinchenkoFunction() {
    document.getElementById("myDropdownZinchenko").classList.toggle("show");
  }
  
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtnZinchenko")) {
      let dropdowns = document.getElementsByClassName("dropdown-contentZinchenko");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
  
  
  