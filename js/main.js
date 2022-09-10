const sectionHeading = document.querySelector("#sectionText");
const mainHeader = document.querySelector(".mainHeading");

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

function addHoverText(el) {
  const text = el.textContent.trim().split("");
  el.textContent = "";
  text.forEach((letter) => {
    if (letter !== " ") {
      const span = document.createElement("span");
      span.textContent = letter;
      el.append(span);
    } else {
      br = document.createElement("br");
      el.append(br);
    }
  });
}

addHoverText(mainHeader);

function init() {
  headingChanger(document.querySelector("#home"));
  headingChanger(document.querySelector("#skills"));
  headingChanger(document.querySelector("#projects"));
  headingChanger(document.querySelector("#contact"));
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
