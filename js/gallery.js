// Define galleries for each team
const galleries = {
  colorguard: [
      "colorguard-groundbreaking-1.JPEG",
    "colorguard-groundbreaking-2.JPEG",
    "colorguard-groundbreaking-3.JPEG",
    "colorguard-groundbreaking-4.JPEG",
    "colorguard-groundbreaking-5.JPEG",
    "colorguard-groundbreaking-6.JPEG",
    "colorguard-groundbreaking-7.JPEG",
    "colorguard-groundbreaking-8.JPEG",
    "colorguard-groundbreaking-9.JPEG",
    "colorguard-groundbreaking-10.JPEG",
    "colorguard-practice-1.JPEG",
    "colorguard-practice-2.JPEG",
    "colorguard-practice-mov1.MOV",
    "colorguard-practice-mov2.MOV"
  ],
  raider: [
    "raider-practice-1.JPEG",
    "raider-practice-2.JPEG",
    "raider-practice-3.JPEG",
    "raider-practice-4.JPEG",
    "raider-practice-5.JPEG",
    "raider-practice-6.JPEG",
    "raider-practice-7.JPEG",
    "raider-practice-8.JPEG",
    "raider-practice-9.JPEG",
    "raider-practice-10.JPEG",
    "raider-practice-11.JPEG",
    "raider-practice-12.JPEG",
    "raider-practice-13.JPEG",
    "raider-practice-14.JPEG",
    "raider-practice-15.JPEG",
    "raider-practice-16.JPEG",
    "raider-practice-17.JPEG",
    "raider-practice-18.JPEG",
    "raider-practice-19.JPEG",
    "raider-practice-20.JPEG",
    "raider-practice-21.JPEG",
    "raider-practice-22.JPEG",
    "raider-practice-23.JPEG",
    "raider-practice-24.JPEG",
    "raider-practice-25.JPEG",
    "raider-practice-26.JPEG",
    "raider-practice-27.JPEG",
    "raider-practice-28.JPEG",
    "raider-practice-29.JPEG",
    "raider-practice-30.JPEG",
    "raider-practice-31.JPEG",
    "raider-practice-32.JPEG",
    "raider-practice-33.JPEG",
    "raider-practice-34.JPEG",
    "raider-practice-35.JPEG",
    "raider-practice-36.JPEG",
    "raider-practice-37.JPEG",
    "raider-practice-38.JPEG",
    "raider-practice-39.JPEG",
    "raider-practice-mov1.MOV",
    "raider-practice-mov2.MOV",
    "raider-practice-mov3.MOV",
    "raider-practice-mov4.MOV",
    "raider-practice-mov5.MOV",
    "raider-practice-mov6.MOV",
    "raider-practice-mov7.MOV",
    "raider-practice-mov8.MOV",
    "raider-practice-mov9.MOV",
    "raider-practice-mov10.MOV",
    "raider-practice-mov11.MOV",
    "raider-practice-mov12.MOV",
    "raider-practice-mov13.MOV",
    "raider-practice-mov14.MOV",
    "raider-practice-mov15.MOV",
    "raider-practice-mov16.MOV",
    "raider-practice-mov17.MOV"
  ],
    drill: [],
    fitness: [],
    rifle: [
        "rifle-event-1.JPEG",
        "rifle-event-2.JPEG",
        "rifle-event-3.JPEG",
        "rifle-event-4.JPEG",
        "rifle-event-5.JPEG",
        "rifle-event-6.JPEG",
        "rifle-event-7.JPEG",
        "rifle-event-8.JPEG",
        "rifle-event-9.JPEG",
        "rifle-event-10.JPEG",
        "rifle-event-11.JPEG"
    ],
  // Add more teams here
};

// Function to load gallery dynamically
function loadGallery(team) {
  const container = document.getElementById(`${team}-gallery`);
  if (!container) return;

  galleries[team].forEach(file => {
    const fileExt = file.split('.').pop().toLowerCase();

    if (fileExt === 'mov' || fileExt === 'mp4') {
      // Create video element
      const video = document.createElement("video");
      video.src = `images/teams/${team}/${file}`;
      video.controls = true; // Adds play/pause controls
      video.classList.add("gallery-media");
      container.appendChild(video);
    } else {
      // Create image element
      const img = document.createElement("img");
      img.src = `images/teams/${team}/${file}`;
      img.alt = `${team} media`;
      img.classList.add("gallery-media");
      img.addEventListener("click", () => openLightbox(img.src));
      container.appendChild(img);
    }
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