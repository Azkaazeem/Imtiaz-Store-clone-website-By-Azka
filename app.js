// =========================== NAVBAR LOGO IMAGES ===========================

window.addEventListener("scroll", function () {
    let first = document.querySelector(".first-logo");
    let second = document.querySelector(".second-logo");

    if (window.scrollY > 50) {
        first.classList.add("hide");
        second.classList.add("show");
    } else {
        first.classList.remove("hide");
        second.classList.remove("show");
    }
});



// =========================== NAVBAR  ===========================

window.addEventListener("scroll", function () {
    let nav = document.querySelector("#navbar");

    if (window.scrollY > 50) {
    nav.classList.add("white");
    nav.classList.remove("transparent");
} else {
    nav.classList.add("transparent");
    nav.classList.remove("white");
}
});



// =========================== NAVBAR LINKS COLOR ===========================

window.addEventListener("scroll", function () {
  let navLinks = document.querySelectorAll(".link");

  if (window.scrollY > 50) {
    navLinks.forEach(link => link.classList.add("gray"));
  } else {
    navLinks.forEach(link => link.classList.remove("gray"));
  }
});



// =========================== HAMBURGER COLOR ==============================

window.addEventListener("scroll", function () {
  let hamBtn = document.getElementById("btn");

  if (window.scrollY > 50) {
    hamBtn.classList.add("scrolledY");
  } else {
    hamBtn.classList.remove("scrolledY");
  }
});
          