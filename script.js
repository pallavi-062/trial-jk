// script.js

// Image sets
const images = {
    wedding: ["images/wedding1.jpg","images/wedding2.jpg","images/wedding3.jpg"],
    catering: ["images/catering1.jpg","images/catering2.jpg","images/catering3.jpg"],
    birthday: ["images/birthday1.jpg","images/birthday2.jpg","images/birthday3.jpg"],
    events: ["images/event1.jpg","images/event2.jpg","images/event3.jpg"]
};

// Open gallery popup
function openGallery(type){
    const container = document.getElementById("popupImages");
    container.innerHTML = ""; // Clear previous images

    images[type].forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        container.appendChild(img);
    });

    document.getElementById("galleryPopup").style.display = "block";
}

// Close popup
function closeGallery(){
    document.getElementById("galleryPopup").style.display = "none";
}

// Close popup if clicked outside images
const galleryPopup = document.getElementById("galleryPopup");
galleryPopup.addEventListener("click", function(e){
    if(e.target === galleryPopup){
        closeGallery();
    }
});
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        closeGallery(); // Close the popup if it's open
    });
});