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

function initMap() {
  // The location of Toronto
  const toronto = { lat: 43.65107, lng: -79.347015 };
  // The map, centered at Toronto
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center: toronto,
    disableDefaultUI: true,
    backgroundColor: "transparent",
    styles: [
      {
        featureType: "all",
        elementType: "labels",
        stylers: [
          {
            visibility: "on",
          },
        ],
      },
      {
        featureType: "all",
        elementType: "labels.text.fill",
        stylers: [
          {
            saturation: 36,
          },
          {
            color: "#000000",
          },
          {
            lightness: 40,
          },
        ],
      },
      {
        featureType: "all",
        elementType: "labels.text.stroke",
        stylers: [
          {
            visibility: "on",
          },
          {
            color: "#000000",
          },
          {
            lightness: 16,
          },
        ],
      },
      {
        featureType: "all",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 20,
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 17,
          },
          {
            weight: 1.2,
          },
        ],
      },
      {
        featureType: "administrative.country",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#e5c163",
          },
        ],
      },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#c4c4c4",
          },
        ],
      },
      {
        featureType: "administrative.neighborhood",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#e5c163",
          },
        ],
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 20,
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 21,
          },
          {
            visibility: "on",
          },
        ],
      },
      {
        featureType: "poi.business",
        elementType: "geometry",
        stylers: [
          {
            visibility: "on",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#e5c163",
          },
          {
            lightness: "0",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#e5c163",
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 18,
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#575757",
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#2c2c2c",
          },
        ],
      },
      {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 16,
          },
        ],
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#999999",
          },
        ],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 19,
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 17,
          },
        ],
      },
    ],
  });
  // The marker, positioned at Toronto
  const svgMarker = {
    path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: "#f71735ff",
    fillOpacity: 1,
    strokeWeight: 0,
    rotation: 0,
    scale: 2,
    anchor: new google.maps.Point(15, 30),
  };

  new google.maps.Marker({
    position: map.getCenter(),
    icon: svgMarker,
    map: map,
  });
}

window.initMap = initMap;

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
  const mobileNav = document.querySelector(".navContainer");
  console.log(mobileNav);
  const burger = document.querySelector(".burgerContainer");
  console.log(burger);
  burger.addEventListener("click", function () {
    console.log("click!");
    mobileNav.classList.toggle("menuOpened");
  });

  const mainHeader = document.querySelector(".mainHeading");
  mainHeader.style.display = "block";
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
