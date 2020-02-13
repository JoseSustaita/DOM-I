const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Nav

let navLinks = document.querySelectorAll('a');
let navBar = Array.from(navLinks);
navBar[0].textContent = 'Services'
navBar[1].textContent = 'Product'
navBar[2].textContent = 'Vision'
navBar[3].textContent = 'Features'
navBar[4].textContent = 'About'
navBar[5].textContent = 'Contact'

let navigator = document.querySelector('nav');
let home = document.createElement('a');
home.textContent = 'Home'
home.style.color = 'green'
let FAQ = document.createElement('a');
FAQ.textContent = 'FAQ'
FAQ.style.color = 'green'
navigator.prepend(home)
navigator.appendChild(FAQ)

navBar.forEach(i => {
  i.style.color = 'green';
});

// Text and circle img

let ctaContent = document.querySelector('.cta h1');
ctaContent.innerHTML = 'DOM<br>Is<br>Awesome';

let ctaButton = document.querySelector('.cta button');
ctaButton.textContent = "Get Started";

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', 'img/header-img.png')


// Middle section

let middleHeaders = document.querySelectorAll('.text-content h4');
let midHead= Array.from(middleHeaders);
midHead[0].textContent = 'Features'
midHead[1].textContent = 'About'
midHead[2].textContent = 'Services'
midHead[3].textContent = 'Product'
midHead[4].textContent = 'Vision'

let middleContent = document.querySelectorAll('.text-content p');
let middleCont = Array.from(middleContent);
middleCont[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
middleCont[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
middleCont[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
middleCont[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
middleCont[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', 'img/mid-page-accent.jpg')

//Footer

let contact = document.querySelector('.contact h4');
contact.textContent = 'Contact'

let contactContent = document.querySelectorAll('.contact p');
let contactCont = Array.from(contactContent);
contactCont[0].innerHTML = "123 Way 456 Street<br>Somewhere, USA";
contactCont[1].textContent = "1 (888) 888-8888";
contactCont[2].textContent = "sales@greatidea.io";

let footerCont = document.querySelector('footer p');
footerCont.textContent = 'Copyright Great Idea! 2018';

