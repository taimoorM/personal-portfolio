const onScroll = (el, cb, threshold) => {
  const observer = new IntersectionObserver(
    function (entries) {
      if (entries[0].isIntersecting) {
        cb();
      }
    },
    { threshold: [threshold] }
  );

  observer.observe(el);
};

const addObserver = () => {
  const sectionHeadings = document.querySelectorAll(".sectionHeading h2");
  sectionHeadings.forEach((heading) => {
    onScroll(
      heading,
      () => {
        heading.style.opacity = "1";
        heading.classList.add("animate__animated", "animate__fadeInLeft");
      },
      0.3
    );
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

function animateGrid() {
  const gridCells = document.querySelectorAll(".skillGrid li");
  let delay = 0.1;
  gridCells.forEach((cell) => {
    onScroll(
      cell,
      () => {
        cell.style.opacity = "1";
        cell.classList.add("animate__animated", "animate__fadeInUp");
        cell.style.animationDelay = `${delay}s`;
        delay += 0.1;
      },
      0.1
    );
  });
}

// function initMap() {
//   // The location of Uluru
//   const uluru = { lat: -25.344, lng: 131.031 };
//   // The map, centered at Uluru
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 4,
//     center: uluru,
//   });
//   // The marker, positioned at Uluru
//   const marker = new google.maps.Marker({
//     position: uluru,
//     map: map,
//   });
// }

// window.initMap = initMap;

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
  const mainHeader = document.querySelector(".mainHeading");
  addSpans(mainHeader);
  addObserver();
  const grid = document.querySelector(".skillGrid");
  animateCSSGrid.wrapGrid(grid, { duration: 300 });
  animateGrid();
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
