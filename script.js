const navbarToggle = document.querySelector(".responsive-toggle");

navbarToggle.addEventListener("click", () => {
  const links = document.querySelector(".links");
  links.classList.toggle("nav-toggle");
});

const scrollElement = document.querySelector(".scrollToTop");
window.addEventListener("scroll", () => {
  scrollElement.style.display = "block";
  window.pageYOffset > 300
    ? (scrollElement.style.display = "block")
    : (scrollElement.style.display = "none");
});

scrollElement.addEventListener("click", () => {
  window.scrollTo({ top: 0 });
});

const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
});

sr.reveal(
  `nav, .starter,
  .services,
  .destination,
  .next-trip,
  .testimonials,
  .brands,
  .subscribe,
  footer
  `,
  {
    interval: 200,
  }
);
function openModal(imageSrc, captionText) {
  var modal = document.getElementById("imageModal");
  var modalImg = document.getElementById("modalImage");
  var caption = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = imageSrc;
  caption.innerHTML = captionText;
}

// Close the modal when clicking on the close button
function closeModal() {
  var modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

// Close the modal when clicking outside the image
window.onclick = function(event) {
  var modal = document.getElementById("imageModal");
  if (event.target == modal) {
      closeModal();
  }
}




