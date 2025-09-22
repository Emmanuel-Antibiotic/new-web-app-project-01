document.querySelector(".primary").addEventListener("click", () => {alert("Booking system coming soon!");
});
document.querySelector(".secondary").addEventListener("click", () => {alert("Video player coming soon!");
});
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const mobileSheet = document.getElementById("mobile-sheet");

menuBtn.addEventListener("click", () => {
  mobileSheet.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  mobileSheet.classList.remove("open");
});

// Close menu when clicking a link
document.querySelectorAll(".mobile-nav a").forEach(link => {
  link.addEventListener("click", () => {
    mobileSheet.classList.remove("open");
  });
});

