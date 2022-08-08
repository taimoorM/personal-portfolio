const sectionHeading = document.querySelector("#sectionText");

const headingChanger = (el) => {
  const observer = new IntersectionObserver(
    function (entries) {
      if (entries[0].isIntersecting === true) {
        sectionHeading.textContent = el.dataset.heading;
        sectionHeading.style.animationName = "fadeIn";
        sectionHeading.style.animationDuration = "3s";
      } else {
        sectionHeading.style.animation = "none";
      }
    },
    { threshold: [0.4] }
  );

  observer.observe(el);
};

headingChanger(document.querySelector("#home"));
headingChanger(document.querySelector("#skills"));
headingChanger(document.querySelector("#projects"));
headingChanger(document.querySelector("#contact"));
