const menu = document.querySelector(".menu");
const menuInner = menu.querySelector(".menu-inner");
const menuArrow = menu.querySelector(".menu-arrow");
const burger = document.querySelector(".burger");
const overlay = document.querySelector(".overlay");

// Navbar Menu Toggle Function
function toggleMenu() {
   menu.classList.toggle("is-active");
   overlay.classList.toggle("is-active");
}

// Show Mobile Submenu Function
function showSubMenu(children) {
   subMenu = children.querySelector(".submenu");
   subMenu.classList.add("is-active");
   subMenu.style.animation = "slideLeft 0.35s ease forwards";
   const menuTitle = children.querySelector("i").parentNode.childNodes[0]
      .textContent;
   menu.querySelector(".menu-title").textContent = menuTitle;
   menu.querySelector(".menu-header").classList.add("is-active");
}

// Hide Mobile Submenu Function
function hideSubMenu() {
   subMenu.style.animation = "slideRight 0.35s ease forwards";
   setTimeout(() => {
      subMenu.classList.remove("is-active");
   }, 300);

   menu.querySelector(".menu-title").textContent = "";
   menu.querySelector(".menu-header").classList.remove("is-active");
}

// Toggle Mobile Submenu Function
function toggleSubMenu(e) {
   if (!menu.classList.contains("is-active")) {
      return;
   }
   if (e.target.closest(".menu-dropdown")) {
      const children = e.target.closest(".menu-dropdown");
      showSubMenu(children);
   }
}

// Fixed Navbar Menu on Window Resize
window.addEventListener("resize", () => {
   if (window.innerWidth >= 992) {
      if (menu.classList.contains("is-active")) {
         toggleMenu();
      }
   }
});

// Dark and Light Mode with localStorage
// (function () {
//    let darkMode = localStorage.getItem("darkMode");
//    const darkSwitch = document.getElementById("switch");
//    const darkSwitch2 = document.getElementById("switch2");

//    // Enable and Disable Darkmode
//    const enableDarkMode = () => {
//       document.body.classList.add("darkmode");
//       localStorage.setItem("darkMode", "enabled");
//    };

//    const disableDarkMode = () => {
//       document.body.classList.remove("darkmode");
//       localStorage.setItem("darkMode", null);
//    };

//    // User Already Enable Darkmode
//    if (darkMode === "enabled") {
//       enableDarkMode();
//    }

//    // User Clicks the Darkmode Toggle
//    darkSwitch.addEventListener("click", () => {
//       darkMode = localStorage.getItem("darkMode");
//       if (darkMode !== "enabled") {
//          enableDarkMode();
//       } else {
//          disableDarkMode();
//       }
//    });
//    darkSwitch2.addEventListener("click", () => {
//       darkMode = localStorage.getItem("darkMode");
//       if (darkMode !== "enabled") {
//          enableDarkMode();
//       } else {
//          disableDarkMode();
//       }
//    });
// })();

(function () {
   let darkMode = localStorage.getItem("darkMode");
   const darkSwitch = document.getElementById("switch");
   const darkSwitch2 = document.getElementById("switch2");

   // Enable and Disable Darkmode
   const enableDarkMode = () => {
      document.body.classList.add("darkmode");
      localStorage.setItem("darkMode", "enabled");
      // console.log("darkmode on");
   };

   const disableDarkMode = () => {
      document.body.classList.remove("darkmode");
      localStorage.setItem("darkMode", "disabled");
      // console.log("darkmode off");
   };

   // Check dark mode state on page load
   if (darkMode === "enabled") {
      enableDarkMode();
      // console.log("darkmode on");
   } else {
      disableDarkMode();
      // console.log("darkmode off");
   }

   // Toggle dark mode when the switch is clicked
   const toggleDarkMode = () => {
      darkMode = localStorage.getItem("darkMode");
      if (darkMode !== "enabled") {
         enableDarkMode();
         // console.log("darkmode on");
      } else {
         disableDarkMode();
         // console.log("darkmode off");
      }
   };

   // Add event listeners to both switches
   if (darkSwitch) {
      darkSwitch.addEventListener("click", toggleDarkMode);
      // console.log("darkmode on");
   }
   if (darkSwitch2) {
      darkSwitch2.addEventListener("click", toggleDarkMode);
      // console.log("darkmode off");
   }
})();


// Initialize All Event Listeners
burger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);
menuArrow.addEventListener("click", hideSubMenu);
menuInner.addEventListener("click", toggleSubMenu);


$(document).ready(function () {
   var item_num = $('.service-nav li').length + 1;
   var btn_state = true;

   $('.service-nav li').hover(function () {
      $(this).addClass('hover');
   }, function () {
      $(this).removeClass('hover');
   });

   $('.service-nav li').on('click', function () {
      if (btn_state) {
         btn_state = !btn_state;
         $('.service-nav li').removeClass('currentPage');
         $(this).addClass('currentPage');

         var i = $('.service-nav li').index(this);
         $('article').removeClass('show');
         $('article').addClass('hide');
         $('article').eq(i).addClass('show');

         setTimeout(function () {
            btn_state = !btn_state;
         }, 500);
      }
   });
});

// testimonial
$('.testimonial-slide').slick({
   dots: true,
   lazyLoad: 'ondemand',
   slidesToShow: 2,
   slidesToScroll: 1,
   appendDots: $('.slick-slider-dots2'),
   responsive: [{
      breakpoint: 767,
      settings: {
         arrows: true,
         centerMode: true,
         centerPadding: '40px',
         slidesToShow: 1,
         arrows: false,
         // dots: false
      }
   }
   ]
});