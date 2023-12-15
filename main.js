const carouselEl = document.getElementById("carousel");
const carouselControlPrevEl = document.getElementById("carousel-control-prev");
const carouselControlNextEl = document.getElementById("carousel-control-next");
const carouselBulletBtnEls = document.querySelectorAll(
  ".carousel-bullets > button"
);

carouselControlNextEl.addEventListener("click", () => {
  // Change image
  const activeItemEl = carouselEl.querySelector(".carousel-item.active");
  const nextItemEl = activeItemEl.nextElementSibling;

  if (nextItemEl) {
    activeItemEl.classList.remove("active");
    nextItemEl.classList.add("active");
  }

  //   Change bullet
  const activeBulletEl = carouselEl.querySelector(
    ".carousel-bullets > button.active"
  );

  const nextBulletEl = activeBulletEl.nextElementSibling;

  if (nextBulletEl) {
    activeBulletEl.classList.remove("active");
    nextBulletEl.classList.add("active");
  }
});

carouselControlPrevEl.addEventListener("click", () => {
  // Change image
  const activeItemEl = carouselEl.querySelector(".carousel-item.active");
  const prevItemEl = activeItemEl.previousElementSibling;

  if (prevItemEl) {
    activeItemEl.classList.remove("active");
    prevItemEl.classList.add("active");
  }

  //   Change bullet
  const activeBulletEl = carouselEl.querySelector(
    ".carousel-bullets > button.active"
  );

  const prevBulletEl = activeBulletEl.previousElementSibling;

  if (prevBulletEl) {
    activeBulletEl.classList.remove("active");
    prevBulletEl.classList.add("active");
  }
});

for (let i = 0; i < carouselBulletBtnEls.length; i++) {
  carouselBulletBtnEls[i].addEventListener("click", () => {
    const index = [...carouselBulletBtnEls[i].parentElement.children].indexOf(
      carouselBulletBtnEls[i]
    );

    const activeItemEl = carouselEl.querySelector(".carousel-item.active");
    const activeBulletEl = carouselEl.querySelector(
      ".carousel-bullets > button.active"
    );

    activeItemEl.classList.remove("active");
    activeBulletEl.classList.remove("active");
    carouselBulletBtnEls[i].classList.add("active");
    activeItemEl.parentElement.children[index].classList.add("active");
  });
}
