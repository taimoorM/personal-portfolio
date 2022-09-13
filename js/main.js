const sectionHeadings = document.querySelectorAll(".sectionHeading h2");
const mainHeader = document.querySelector(".mainHeading");

const animateHeading = (el) => {
  const observer = new IntersectionObserver(
    function (entries) {
      if (entries[0].isIntersecting) {
        el.style.opacity = "1";
        el.classList.add("animate__animated", "animate__fadeInLeft");
      }
    },
    { threshold: [0.8] }
  );

  observer.observe(el);
};

const addObserver = () => {
  sectionHeadings.forEach((heading) => {
    animateHeading(heading);
  });
};

function addSpans(el) {
  const text = el.textContent.trim().split("");
  el.textContent = "";
  let delay = 0.1;
  text.forEach((letter) => {
    if (letter !== " ") {
      const span = document.createElement("span");
      span.classList.add("animate__animated", "animate__fadeIn");
      span.style.animationDelay = `${delay}s`;
      span.textContent = letter;
      el.append(span);

      delay += 0.1;
    } else {
      br = document.createElement("br");
      el.append(br);
    }
  });
}

function init() {
  window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );

  addSpans(mainHeader);
  addObserver();
  emailjs.init("pL8SFMP2vhPfXz36W");
}

window.onload = function () {
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      document.querySelector(".lds-ring").style.display = "inline-block";
      document.querySelector("#formButton span").textContent = "";
      document.querySelector("#formButton").setAttribute("disabled", true);
      document.querySelectorAll("#contactForm input").forEach((input) => {
        input.setAttribute("disabled", true);
      });
      document
        .querySelector("#contactForm textarea")
        .setAttribute("disabled", true);
      // generate a five digit number for the contact_number variable
      this.contact_number.value = (Math.random() * 100000) | 0;
      // these IDs from the previous steps
      emailjs.sendForm("service_y66l0um", "template_y47te0k", this).then(
        function () {
          document.querySelector(".lds-ring").style.display = "none";
          document.querySelector("#formButton span").textContent = "✔️";
          document.querySelectorAll("#contactForm input").forEach((input) => {
            input.removeAttribute("disabled");
            input.value = "";
          });
          document
            .querySelector("#contactForm textarea")
            .removeAttribute("disabled");
          document.querySelector("#contactForm textarea").value = "";

          setTimeout(function () {
            document.querySelector("#formButton").removeAttribute("disabled");
            document.querySelector("#formButton span").textContent = "Submit";
          }, 1500);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
};

init();
