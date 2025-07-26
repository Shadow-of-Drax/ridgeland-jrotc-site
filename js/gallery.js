// Define galleries for each team
const galleries = {
  colorguard: [
    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg"
  ],
  raider: [
    "raider1.jpg",
    "raider2.jpg"
  ]
  // Add more teams here
};

// Function to load gallery dynamically
function loadGallery(team) {
  const container = document.getElementById(`${team}-gallery`);
  if (!container) return; // Skip if page doesn't have this gallery

  galleries[team].forEach(photo => {
    const img = document.createElement("img");
    img.src = `images/teams/${team}/${photo}`;
    img.alt = `${team} team photo`;
    img.classList.add("gallery-photo");

    // Add click-to-enlarge (lightbox)
    img.addEventListener("click", () => openLightbox(img.src));

    container.appendChild(img);
  });
}

// Lightbox overlay
function openLightbox(src) {
  const overlay = document.createElement("div");
  overlay.className = "lightbox";
  overlay.innerHTML = `<img src="${src}" alt="Enlarged Photo">`;
  overlay.addEventListener("click", () => document.body.removeChild(overlay));
  document.body.appendChild(overlay);
}

// Load the correct gallery when page loads
window.addEventListener("DOMContentLoaded", () => {
  loadGallery("colorguard"); // Change to match each team page
});