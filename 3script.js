function openSidebar() {
    document.getElementById("sidebar").style.width = "365px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

  }
  
  function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
    document.body.style.backgroundColor = "white";

  }
  
  
  function toggleSubMenu(subMenuId) {
    var subMenu = document.getElementById(subMenuId);
    var mainMenu = document.getElementById("main-menu");
    var subMenuHeading = document.getElementById("sub-menu-heading");
    var parentMenu = subMenu.parentNode;
    var firstClass = document.getElementsByClassName("first")[0];
  
    if (subMenu.style.display === "none") {
      subMenu.style.display = "block";
      mainMenu.style.display = "none";
      subMenuHeading.style.display = "block";
      parentMenu.classList.add("hide-parent");
      firstClass.style.display = "none";
    } else {
      subMenu.style.display = "none";
      mainMenu.style.display = "block";
      subMenuHeading.style.display = "none";
      parentMenu.classList.remove("hide-parent");
      firstClass.style.display = "block";
    }
  }
  