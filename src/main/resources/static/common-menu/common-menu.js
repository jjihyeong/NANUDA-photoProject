const menuBtn = document.querySelector(".menuBtn");
const logoBox = document.querySelector(".logo_box")
const SHOW_CLASSNAME = "menu_show";

function slideMenu() {
  document.querySelectorAll("section").forEach((obj) => {
    if(obj.classList == "menu_none"){
      logoBox.classList.add("clickBtn");
      obj.classList.add(SHOW_CLASSNAME);
    }else {
      obj.classList.remove(SHOW_CLASSNAME);
      logoBox.classList.remove("clickBtn");
    }
  });
}

menuBtn.addEventListener("click", slideMenu);