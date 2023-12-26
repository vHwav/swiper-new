const swiperBox = Array.from(document.querySelectorAll(".ad-imgs-box"));

const swiperImage = document.querySelector(".ad-img");
const closeButton = Array.from(document.querySelectorAll(".close"));

// console.log(imgBoxStyles);

function handleClick(e) {
  let targetImg = e.target.closest(".swiper-slide");
  let targetIndex = targetImg.dataset.swiperSlideIndex;
  console.log(targetIndex);
  if (!targetImg) return;

  for (let i = 0; i < swiperBox.length; i++) {
    if (targetIndex == i) {
      swiperBox[i].classList.add("is-active");
    }
  }
}
function handleClose() {
  swiperBox.forEach((item) => {
    return item.classList.remove("is-active");
  });
}

swiperImage.addEventListener("click", handleClick);

closeButton.forEach((item) => {
  item.addEventListener("click", handleClose);
});
