function WanDejkFunction() {
    document.getElementById("myDropdownWanDejk").classList.toggle("show");
  }
  
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtnWanDejk")) {
      let dropdowns = document.getElementsByClassName("dropdown-contentWanDejk");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };