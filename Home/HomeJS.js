// SlideShow Best Product
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let currentSlideBestProduct = 0;

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active-dot'));
    currentSlideBestProduct = (n + slides.length) % slides.length;
    slides[currentSlideBestProduct].classList.add('active');
    dots[currentSlideBestProduct].classList.add('active-dot');
}

showSlide(currentSlideBestProduct);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

setInterval(() => {
    showSlide(currentSlideSpillProduct + 1);
}, 3000);

// They spill the tea

const slides_spill = document.querySelectorAll('.slide_spill');
const dots_spill = document.querySelectorAll('.dot_spill');

let currentSlideSpillProduct = 0;

function showSlide_spill(n) {
    slides_spill.forEach(slide_spill => slide_spill.classList.remove('active-spill'));
    dots_spill.forEach(dot_spill => dot_spill.classList.remove('active-dot')); // Perbaikan penamaan kelas di sini
    currentSlideSpillProduct = (n + slides_spill.length) % slides_spill.length;
    slides_spill[currentSlideSpillProduct].classList.add('active-spill');
    dots_spill[currentSlideSpillProduct].classList.add('active-dot'); // Perbaikan penamaan kelas di sini
}

showSlide_spill(currentSlideSpillProduct);

dots_spill.forEach((dot_spill, index) => {
    dot_spill.addEventListener('click', () => {
        showSlide_spill(index);
    });
});

const slideInterval = setInterval(() => {
    showSlide_spill(currentSlideSpillProduct + 1);
}, 3000);

// Quiz

// Mengubah fungsi openTea menjadi fungsi initQuiz
function initQuiz() {
    // Ambil elemen pertama dengan class "tabcontent" dan tampilkan
    var defaultTab = document.querySelector(".tabcontent");
    defaultTab.style.display = "block";

    // Tambahkan class "active" pada button pertama dengan class "tablinks"
    var defaultTabLink = document.querySelector(".tablinks");
    defaultTabLink.classList.add("active");
}

function openTea(evt, teaName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(teaName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Panggil fungsi initQuiz ketika halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
    initQuiz();
});


