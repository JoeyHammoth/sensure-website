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
