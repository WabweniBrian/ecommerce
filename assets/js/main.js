// FUNCTION:: Get elements by id
const _ = (elm) => document.getElementById(elm);
// FUNCTION:: Get elements by queryselector
const qs = (elm) => document.querySelector(elm);
// FUNCTION:: Get elements by queryselectorAll
const qsa = (elm) => document.querySelectorAll(elm);

// Get all DOM elements
const [
  categoriesLinks,
  menuIcon,
  menuModal,
  menuDialog,
  closeIcon,
  gridIcon,
  categoryModal,
  categoryDialog,
  iconClose,
] = [
  qsa(".categories ul li"),
  qs(".menu-icon"),
  qs(".bottom-nav"),
  qs(".bottom-nav ul"),
  qs(".close-icon"),
  qs(".grid-icon"),
  qs(".categories-modal"),
  qs(".category-dialog"),
  qs(".cat-close-icon"),
];

categoriesLinks.forEach((link) => {
  link.addEventListener("click", () => {
    removeHeight();
    let submenu = link.lastElementChild;
    let icon = submenu.previousElementSibling;
    if (submenu.style.maxHeight) {
      submenu.style.maxHeight = null;
      submenu.style.borderTop = "none";
      icon.innerHTML = `<i class="feather-plus right"></i>`;
    } else {
      submenu.style.maxHeight = submenu.scrollHeight + "px";
      submenu.style.borderTop = "1px  solid rgba(62, 62, 62, 0.116)";
      icon.innerHTML = `<i class="feather-minus right"></i>`;
    }
  });
});

function removeHeight() {
  qsa(".submenu").forEach((menu) => {
    let icon = menu.previousElementSibling;
    menu.style.maxHeight = null;
    menu.style.borderTop = "none";
    icon.innerHTML = `<i class="feather-plus right"></i>`;
  });
}

var swiper = new Swiper(".banner-slider", {
  pagination: ".swiper-pagination",
  paginationClickable: true,
  loop: true,
  autoplay: 3000,
  slidesPerView: 1,
  spaceBetween: 10,
});

var swiper = new Swiper(".categories-slider", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 10,
  autoplay: 2500,
  autoplayDisableOnInteraction: false,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
    1128: {
      slidesPerView: 3,
    },
  },
});

function handleModal(triggerIcon, modal, modalDialog, closeTrigger) {
  // Launch the modal by adding the open class
  triggerIcon.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("open");
    modalDialog.classList.add("open");
  });

  // FUNCTION: Close the modal by removing the open class
  function closeModal(element) {
    element.addEventListener("click", (e) => {
      modal.classList.remove("open");
      modalDialog.classList.remove("open");
    });
  }

  closeModal(closeTrigger);

  // Close the modal when user clicks outside the modal dialog
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("open");
      modalDialog.classList.remove("open");
    }
  });
}

handleModal(menuIcon, menuModal, menuDialog, closeIcon);
handleModal(gridIcon, categoryModal, categoryDialog, iconClose);
