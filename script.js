// 1. Mobile Menu Toggle (Agar aapne hamburger menu lagaya ho)
const navToggle = () => {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('nav-active');
}

// 2. Admission Form Validation
// Ye check karega ke user ne sahi data bhara hai ya nahi
document.addEventListener('DOMContentLoaded', () => {
    const admissionForm = document.querySelector('.form-container form');
    
    if (admissionForm) {
        admissionForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Form ko foran reload hone se rokna
            
            const name = admissionForm.querySelector('input[type="text"]').value;
            const fatherName = admissionForm.querySelectorAll('input[type="text"]')[1].value;
            
            if (name.length < 3) {
                alert("Meherbani karke mukammal naam likhein.");
                return;
            }

            alert(`Shukriya ${name}! Aapki admission darkhwast jama ho chuki hai.`);
            admissionForm.reset(); // Form khali kar dena
        });
    }
});

// 3. Smooth Scroll Effect
// Jab kisi link par click karein toh jhatke se nahi balkay aaram se jaye
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 4. Console message check (Sirf developer ke liye)
console.log("Elite School Website Script Loaded Successfully!");

// Image Gallery View Functions
var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(pic) {
    fullImgBox.style.display = "flex"; // Modal show karega
    fullImg.src = pic; // Modal ke andar wahi pic load karega
}

function closeFullImg() {
    fullImgBox.style.display = "none"; // Modal hide karega
}

// Esc key se bhi image band ho jaye
document.addEventListener('keydown', function(e) {
    if (e.key === "Escape") {
        closeFullImg();
    }
});
// Automatic Image Slider
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function nextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
}

// Har 4 seconds baad slide change hogi
if(slides.length > 0) {
    setInterval(nextSlide, 4000);
}
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

// Click karne ke baad menu band ho jaye
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById("navLinks").classList.remove("active");
    });
});