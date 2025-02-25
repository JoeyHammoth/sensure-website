// Scrolling fade-in animation functionality
document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".fade");
  const triggerHeight = window.innerHeight / 1.3; // Adjust trigger point

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerHeight) {
      section.classList.add("visible");
    } else {
      section.classList.remove("visible");
    }
  });
});

// Intro logo animation functionality
const introPanel = document.querySelector(".intro");
if (!sessionStorage.getItem("animationPlayed")) {
  document.body.style.position = "fixed";
  setTimeout(function () {
    document.body.style.position = "";
    introPanel.style.opacity = 0;
    setTimeout(function () {
      introPanel.style.zIndex = -1;
    }, 1000);
  }, 3000);
  sessionStorage.setItem("animationPlayed", "true");
} else {
  document.body.style.position = "";
  introPanel.style.opacity = 0;
  introPanel.style.zIndex = -1;
}

// Sliding card functionality
const slideImg = document.querySelector(".slide-img-one");
const imgButtons = document.querySelectorAll(".sliding-card-dots div");

imgButtons[0].addEventListener("click", function () {
  // src property returns an absolute URL, not the relative path
  if (slideImg.getAttribute("src") != "./images/img8.jpg") {
    imgButtons[0].style.backgroundColor = "grey";
    imgButtons[1].style.backgroundColor = "white";
    imgButtons[2].style.backgroundColor = "white";
    slideImg.classList.add("img-fade-out");
    setTimeout(function () {
      slideImg.src = "./images/img8.jpg";
      slideImg.classList.remove("img-fade-out");
    }, 250);
  }
});

imgButtons[1].addEventListener("click", function () {
  if (slideImg.getAttribute("src") != "./images/img9.jpg") {
    imgButtons[0].style.backgroundColor = "white";
    imgButtons[1].style.backgroundColor = "grey";
    imgButtons[2].style.backgroundColor = "white";
    slideImg.classList.add("img-fade-out");
    setTimeout(function () {
      slideImg.src = "./images/img9.jpg";
      slideImg.classList.remove("img-fade-out");
    }, 250);
  }
});

imgButtons[2].addEventListener("click", function () {
  if (slideImg.getAttribute("src") != "./images/img10.avif") {
    imgButtons[0].style.backgroundColor = "white";
    imgButtons[1].style.backgroundColor = "white";
    imgButtons[2].style.backgroundColor = "grey";
    slideImg.classList.add("img-fade-out");
    setTimeout(function () {
      slideImg.src = "./images/img10.avif";
      slideImg.classList.remove("img-fade-out");
    }, 250);
  }
});
