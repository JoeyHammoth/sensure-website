const newsHeadings = document.querySelectorAll(".top-content-card-title");
const borders = document.querySelectorAll(".top-content-card-news");
const img = document.querySelectorAll(".news-card-right img");

for (let i = 0; i < newsHeadings.length; i++) {
  newsHeadings[i].innerText = `News ${i + 1}`;
  if (i == 0) {
    borders[i].style.backgroundImage =
      "linear-gradient(white, white), linear-gradient(-45deg, #65aec8, #fdc1cc, #aed7e6, #ffa7b7)";
    img[i].src = "../images/img5.jpg";
  } else if (i == 1) {
    borders[i].style.backgroundImage =
      "linear-gradient(white, white), linear-gradient(-45deg, #65aec8, #fff7ad, #65aec8, #fff7ad)";
    img[i].src = "../images/img6.png";
  } else {
    borders[i].style.backgroundImage =
      "linear-gradient(white, white), linear-gradient(-45deg, #fbc2cd, #fff7ad, #ffa7b7, #fff7ad)";
    img[i].src = "../images/img7.png";
  }
}
