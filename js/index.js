const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
//Nav
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let ServicesNavLink = document.body.getElementsByTagName("a")[0];
ServicesNavLink.textContent = siteContent["nav"]["nav-item-1"];

let productNavLink = document.body.getElementsByTagName("a")[1];
productNavLink.textContent = siteContent["nav"]["nav-item-2"];

let visionNavLink = document.body.getElementsByTagName("a")[2];
visionNavLink.textContent = siteContent["nav"]["nav-item-3"];

let featuresNavLink = document.body.getElementsByTagName("a")[3];
featuresNavLink.textContent = siteContent["nav"]["nav-item-4"];

let aboutNavLink = document.body.getElementsByTagName("a")[4];
aboutNavLink.textContent = siteContent["nav"]["nav-item-5"];

let contactNavLink = document.body.getElementsByTagName("a")[5];
contactNavLink.textContent = siteContent["nav"]["nav-item-6"];

// Header
let headerImage = document.getElementById("cta-img");
headerImage.setAttribute("src", siteContent["cta"]["img-src"]);

let headerHeading = document.querySelector("h1");
headerHeading.textContent = siteContent["cta"]["h1"];

let headerButton = document.querySelector("button");
headerButton.textContent = siteContent["cta"]["button"];

//main content top-content
let featuresHeading = document.querySelectorAll("h4", ".text-content")[0];
featuresHeading.textContent = siteContent["main-content"]["features-h4"];

let featuresContent = document.querySelectorAll("p", ".text-content")[0];
featuresContent.textContent = siteContent["main-content"]["features-content"];

let aboutHeading = document.querySelectorAll("h4", ".text-content")[1];
aboutHeading.textContent = siteContent["main-content"]["about-h4"];

let aboutContent = document.querySelectorAll("p", ".text-content")[1];
aboutContent.textContent = siteContent["main-content"]["about-content"];

let middleImage = document.getElementById("middle-img");
middleImage.src = siteContent["main-content"]["middle-img-src"];

// bottom-content
let servicesHeading = document.querySelectorAll("h4", ".text-content")[2];
servicesHeading.textContent = siteContent["main-content"]["services-h4"];

let servicesContent = document.querySelectorAll("p", ".text-content")[2];
servicesContent.textContent = siteContent["main-content"]["services-content"];

let productHeading = document.querySelectorAll("h4", ".text-content")[3];
productHeading.textContent = siteContent["main-content"]["product-h4"];

let productContent = document.querySelectorAll("p", ".text-content")[3];
productContent.textContent = siteContent["main-content"]["product-content"];

let visionHeading = document.querySelectorAll("h4", ".text-content")[4];
visionHeading.textContent = siteContent["main-content"]["vision-h4"];

let visionContent = document.querySelectorAll("p", ".text-content")[4];
visionContent.textContent = siteContent["main-content"]["vision-content"];

// contact
let contactHeading = document.querySelector(".contact h4");
contactHeading.textContent = siteContent["contact"]["contact-h4"];

let address = document.querySelectorAll(".contact p")[0];
address.textContent = siteContent["contact"]["address"];

let phone = document.querySelectorAll(".contact  p")[1];
phone.textContent = siteContent["contact"]["phone"];

let email = document.querySelectorAll(".contact  p")[2];
email.textContent = siteContent["contact"]["email"];

//footer
let footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];

// add new content
//change nav color
let navLink = document.body.getElementsByTagName("a");

for(let i = navLink.length - 1; i >= 0; i--) {
  navLink[i].style.color = 'green';
}

let newNavLink = document.createElement('a');
newNavLink.href = '#';
const newNavLinkTextNode = document.createTextNode('Home');
newNavLink.appendChild(newNavLinkTextNode);
newNavLink.style.color = 'green';

const nav = document.querySelector('nav');
nav.prepend(newNavLink);
