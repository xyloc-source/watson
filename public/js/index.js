AOS.init({ startEvent: "load" });
window.addEventListener("load", AOS.refresh);

document.querySelectorAll(".header-lang-active").forEach(function (element) {
  element.addEventListener("click", function () {
    const parent = this.closest(".header__lang");
    if (parent) {
      parent.classList.toggle("active");
    }
  });
});

document.querySelectorAll(".header-lang-list a").forEach((item) => {
  item.addEventListener("click", () => {
    const langWrap = document.querySelector(".header__lang");
    if (langWrap) {
      langWrap.classList.remove("active");
    }
  });
});

function handleScrollResize() {
  if (window.scrollY > 0) {
    document.querySelectorAll(".header").forEach(function (el) {
      el.classList.add("scrolldown");
    });
  } else {
    document.querySelectorAll(".header").forEach(function (el) {
      el.classList.remove("scrolldown");
    });
  }
}

window.addEventListener("scroll", handleScrollResize);
window.addEventListener("resize", handleScrollResize);

document.addEventListener("click", function (event) {
  const containers = document.querySelectorAll(".header__lang");

  containers.forEach(function (container) {
    if (!container.contains(event.target)) {
      container.classList.remove("active");
    }
  });
});

var swiper1 = new Swiper("#swiper-1", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

var swiper2 = new Swiper("#swiper-2", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

var swiper3 = new Swiper("#swiper-3", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

var swiper4 = new Swiper("#swiper-4", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

var swiper5 = new Swiper("#swiper-5", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});