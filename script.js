document.querySelector(".primary").addEventListener("click", () => {alert("Booking system coming soon!");
});
document.querySelector(".secondary").addEventListener("click", () => {alert("Video player coming soon!");
});
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const mobileNav = document.getElementById("mobileNav");

menuBtn.addEventListener("click", () => {
  mobileNav.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  mobileNav.classList.remove("active");
});

// Close mobile nav when clicking a link
document.querySelectorAll(".mobile-links a").forEach(link => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("active");
  });
});
