/* =========================================================
   HOME PAGE: 3-card sliders (safe on other pages)
   ========================================================= */

// Home: Land card (#landImage)
const landImages = [
  "image/Land Activities/Archery.jpg",
  "image/Land Activities/Archery_2.jpg",
  "image/Land Activities/Axe_2.jpg",
  "image/Land Activities/Hillwalking.jpg",
  "image/Land Activities/Hillwalking_2.jpg",
  "image/Land Activities/Hillwalking_3.jpg",
  "image/Land Activities/Orienteering.jpg",
  "image/Land Activities/Orienteering_2.jpg"
];
let landIndex = 0;

function nextLandImage() {
  const el = document.getElementById("landImage");
  if (!el) return;
  landIndex = (landIndex + 1) % landImages.length;
  el.src = landImages[landIndex];
}
function prevLandImage() {
  const el = document.getElementById("landImage");
  if (!el) return;
  landIndex = (landIndex - 1 + landImages.length) % landImages.length;
  el.src = landImages[landIndex];
}
setInterval(nextLandImage, 4000);


// Home: Water card (#waterImage)
const waterImages = [
  "image/Water Activities/Kayaking.jpg",
  "image/Water Activities/Kayaking_2.jpg",
  "image/Water Activities/Kayaking_3.jpg",
  "image/Water Activities/Kayaking_4.jpg",
  "image/Water Activities/Powerboating.jpg",
  "image/Water Activities/Powerboating_2.jpg"
];
let waterIndex = 0;

function nextWaterImage() {
  const el = document.getElementById("waterImage");
  if (!el) return;
  waterIndex = (waterIndex + 1) % waterImages.length;
  el.src = waterImages[waterIndex];
}
function prevWaterImage() {
  const el = document.getElementById("waterImage");
  if (!el) return;
  waterIndex = (waterIndex - 1 + waterImages.length) % waterImages.length;
  el.src = waterImages[waterIndex];
}
setInterval(nextWaterImage, 4000);


// Home: Rope card (#ropeImage)
const ropeImages = [
  "image/Rope Activities/Abseiling.jpg",
  "image/Rope Activities/Abseiling_2.jpg",
  "image/Rope Activities/Climbing.jpg",
  "image/Rope Activities/Climbing_2.jpg",
  "image/Rope Activities/Climbing_3.jpg",
  "image/Rope Activities/Pole Climb.jpg",
  "image/Rope Activities/Pole Climb_2.jpg"
];
let ropeIndex = 0;

function nextRopeImage() {
  const el = document.getElementById("ropeImage");
  if (!el) return;
  ropeIndex = (ropeIndex + 1) % ropeImages.length;
  el.src = ropeImages[ropeIndex];
}
function prevRopeImage() {
  const el = document.getElementById("ropeImage");
  if (!el) return;
  ropeIndex = (ropeIndex - 1 + ropeImages.length) % ropeImages.length;
  el.src = ropeImages[ropeIndex];
}
setInterval(nextRopeImage, 4000);


/* =========================================================
   LAND BASED PAGE: 4 boxes
   Hillwalking (3), Archery (2), Orienteering (2)
   Axe throwing = 1 image (no buttons, no slider)
   ========================================================= */

// Hillwalking (#hillImage)
const hillImages = [
  "image/Land Activities/Hillwalking.jpg",
  "image/Land Activities/Hillwalking_2.jpg",
  "image/Land Activities/Hillwalking_3.jpg"
];
let hillIndex = 0;

function nextHillImage() {
  const el = document.getElementById("hillImage");
  if (!el) return;
  hillIndex = (hillIndex + 1) % hillImages.length;
  el.src = hillImages[hillIndex];
}
function prevHillImage() {
  const el = document.getElementById("hillImage");
  if (!el) return;
  hillIndex = (hillIndex - 1 + hillImages.length) % hillImages.length;
  el.src = hillImages[hillIndex];
}
setInterval(nextHillImage, 4000);


// Archery (#archeryImage)
const archeryImages = [
  "image/Land Activities/Archery.jpg",
  "image/Land Activities/Archery_2.jpg"
];
let archeryIndex = 0;

function nextArcheryImage() {
  const el = document.getElementById("archeryImage");
  if (!el) return;
  archeryIndex = (archeryIndex + 1) % archeryImages.length;
  el.src = archeryImages[archeryIndex];
}
function prevArcheryImage() {
  const el = document.getElementById("archeryImage");
  if (!el) return;
  archeryIndex = (archeryIndex - 1 + archeryImages.length) % archeryImages.length;
  el.src = archeryImages[archeryIndex];
}
setInterval(nextArcheryImage, 4000);


// Orienteering (#orientImage)
const orientImages = [
  "image/Land Activities/Orienteering.jpg",
  "image/Land Activities/Orienteering_2.jpg"
];
let orientIndex = 0;

function nextOrientImage() {
  const el = document.getElementById("orientImage");
  if (!el) return;
  orientIndex = (orientIndex + 1) % orientImages.length;
  el.src = orientImages[orientIndex];
}
function prevOrientImage() {
  const el = document.getElementById("orientImage");
  if (!el) return;
  orientIndex = (orientIndex - 1 + orientImages.length) % orientImages.length;
  el.src = orientImages[orientIndex];
}
setInterval(nextOrientImage, 4000);


/* =========================================================
   FOOTER: Seamless horizontal scrolling comments
   ========================================================= */
(function setupReviewMarquee() {
  const track = document.getElementById("reviewsTrack");
  if (!track) return;

  const reviews = [
    { text: "We had a great time and loved all the different activities that we did", author: "8th Gourock Guides" },
    { text: "The Scouts loved every second of it, especially the powerboating", author: "Martin Bainbridge, Scout Leader" },
    { text: "I would definitely come back", author: "Kelly, aged 9" },
    { text: "Thank you to all the staff who worked so hard, in awful weather, to make sure that all the pupils had an amazing experience", author: "Mrs Kahn, Hillend Primary School" },
    { text: "Five stars, it was great", author: "Joe, aged 14" },
    { text: "I was really scared about the abseiling but the instructor Mike was really encouraging and helped me do it, thanks Mike", author: "Sophie, aged 10" },
    { text: "The archery was brilliant, but not as good as axe throwing, I never thought we’d be allowed to do that! I got one of my axes right in the middle of the target", author: "Scott, aged 13" },
    { text: "The kids had a ball and didn’t want to leave", author: "Mr Evans, PE teacher" }
  ];

  function makeBubble(r) {
    const div = document.createElement("div");
    div.className = "review-bubble";
    div.textContent = `“${r.text}” — ${r.author}`;
    return div;
  }

  const firstSet = reviews.map(makeBubble);
  firstSet.forEach(b => track.appendChild(b));
  firstSet.forEach(b => track.appendChild(b.cloneNode(true)));

  const gapPx = 16; // must match CSS gap
  requestAnimationFrame(() => {
    let firstWidth = 0;
    for (let i = 0; i < firstSet.length; i++) {
      firstWidth += firstSet[i].getBoundingClientRect().width;
    }
    firstWidth += (firstSet.length - 1) * gapPx;

    track.style.setProperty("--scroll-distance", firstWidth + "px");

    const pxPerSecond = 90;
    const duration = Math.max(18, firstWidth / pxPerSecond);
    track.style.setProperty("--scroll-duration", duration + "s");
  });
})();


/* =========================================================
   BOOKING MODAL
   ========================================================= */
(function setupBookingModal() {
  const openBtn = document.getElementById("openBooking");
  const modal = document.getElementById("bookingModal");
  const closeBtn = document.getElementById("closeBookingBtn");
  const overlay = document.getElementById("closeBookingOverlay");
  const form = document.getElementById("bookingForm");

  if (!openBtn || !modal || !closeBtn || !overlay || !form) return;

  function openModal() {
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    const first = document.getElementById("firstName");
    if (first) first.focus();
  }

  function closeModal() {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    openBtn.focus();
  }

  openBtn.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("show")) closeModal();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstName = document.getElementById("firstName")?.value.trim();
    const phone = document.getElementById("phoneNumber")?.value.trim();
    const time = document.getElementById("bookingTime")?.value;
    const activity = document.getElementById("activity")?.value;
    const email = document.getElementById("email")?.value.trim();

    if (!firstName || !phone || !time || !activity || !email) {
      alert("Please complete all fields.");
      return;
    }

    alert(
      "Booking received!\n\n" +
      "Name: " + firstName + "\n" +
      "Phone: " + phone + "\n" +
      "Date/Time: " + time + "\n" +
      "Activity: " + activity + "\n" +
      "Email: " + email
    );

    form.reset();
    closeModal();
  });
})();


/* -------------------------
   Water Based page sliders
-------------------------- */

// Kayaking (4 images)
const kayakImages = [
  "image/Water Activities/Kayaking.jpg",
  "image/Water Activities/Kayaking_2.jpg",
  "image/Water Activities/Kayaking_3.jpg",
  "image/Water Activities/Kayaking_4.jpg"
];

let kayakIndex = 0;

function nextKayakImage(){
  const el = document.getElementById("kayakImage");
  if (!el) return;
  kayakIndex = (kayakIndex + 1) % kayakImages.length;
  el.src = kayakImages[kayakIndex];
}

function prevKayakImage(){
  const el = document.getElementById("kayakImage");
  if (!el) return;
  kayakIndex = (kayakIndex - 1 + kayakImages.length) % kayakImages.length;
  el.src = kayakImages[kayakIndex];
}

setInterval(nextKayakImage, 4000);


// Powerboating (2 images)
const powerImages = [
  "image/Water Activities/Powerboating.jpg",
  "image/Water Activities/Powerboating_2.jpg"
];

let powerIndex = 0;

function nextPowerImage(){
  const el = document.getElementById("powerImage");
  if (!el) return;
  powerIndex = (powerIndex + 1) % powerImages.length;
  el.src = powerImages[powerIndex];
}

function prevPowerImage(){
  const el = document.getElementById("powerImage");
  if (!el) return;
  powerIndex = (powerIndex - 1 + powerImages.length) % powerImages.length;
  el.src = powerImages[powerIndex];
}

setInterval(nextPowerImage, 4000);

/* -------------------------
   Rope Based page sliders
-------------------------- */

// Climbing (3 images)
const climbImages = [
  "image/Rope Activities/Climbing.jpg",
  "image/Rope Activities/Climbing_2.jpg",
  "image/Rope Activities/Climbing_3.jpg"
];
let climbIndex = 0;

function nextClimbImage(){
  const el = document.getElementById("climbImage");
  if (!el) return;
  climbIndex = (climbIndex + 1) % climbImages.length;
  el.src = climbImages[climbIndex];
}

function prevClimbImage(){
  const el = document.getElementById("climbImage");
  if (!el) return;
  climbIndex = (climbIndex - 1 + climbImages.length) % climbImages.length;
  el.src = climbImages[climbIndex];
}

setInterval(nextClimbImage, 4000);


// Abseiling (2 images)
const abseilImages = [
  "image/Rope Activities/Abseiling.jpg",
  "image/Rope Activities/Abseiling_2.jpg"
];
let abseilIndex = 0;

function nextAbseilImage(){
  const el = document.getElementById("abseilImage");
  if (!el) return;
  abseilIndex = (abseilIndex + 1) % abseilImages.length;
  el.src = abseilImages[abseilIndex];
}

function prevAbseilImage(){
  const el = document.getElementById("abseilImage");
  if (!el) return;
  abseilIndex = (abseilIndex - 1 + abseilImages.length) % abseilImages.length;
  el.src = abseilImages[abseilIndex];
}

setInterval(nextAbseilImage, 4000);


// Pole climbing (2 images)
const poleImages = [
  "image/Rope Activities/Pole Climb.jpg",
  "image/Rope Activities/Pole Climb_2.jpg"
];
let poleIndex = 0;

function nextPoleImage(){
  const el = document.getElementById("poleImage");
  if (!el) return;
  poleIndex = (poleIndex + 1) % poleImages.length;
  el.src = poleImages[poleIndex];
}

function prevPoleImage(){
  const el = document.getElementById("poleImage");
  if (!el) return;
  poleIndex = (poleIndex - 1 + poleImages.length) % poleImages.length;
  el.src = poleImages[poleIndex];
}

setInterval(nextPoleImage, 4000);


/* -------------------------
   Site Information: Nature slider
-------------------------- */

const natureImages = [
  "image/Nature/Nature.jpg",
  "image/Nature/Nature_2.jpg",
  "image/Nature/Nature_3.jpg"
];

let natureIndex = 0;

function nextNatureImage(){
  const el = document.getElementById("natureImage");
  if (!el) return;
  natureIndex = (natureIndex + 1) % natureImages.length;
  el.src = natureImages[natureIndex];
}

function prevNatureImage(){
  const el = document.getElementById("natureImage");
  if (!el) return;
  natureIndex = (natureIndex - 1 + natureImages.length) % natureImages.length;
  el.src = natureImages[natureIndex];
}

// only start auto play on the Site Information page
if (document.getElementById("natureImage")) {
  setInterval(nextNatureImage, 5000);
}




