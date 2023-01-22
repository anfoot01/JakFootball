function PujolFunction() {
    document.getElementById("myDropdownPujol").classList.toggle("show");
  }
  
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtnPujol")) {
      let dropdowns = document.getElementsByClassName("dropdown-contentPujol");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
  
  
  