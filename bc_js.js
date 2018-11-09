// Menu
function burger() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } 
  else {
      x.className = "topnav";
  }
}

// slide_show background photo
var slidehomeIndex = 0;
showSlideshome();

function showSlideshome() {
    var l;
    var slideshome = document.getElementsByClassName("myhome");
    var dot2s = document.getElementsByClassName("dot2");
    for (l = 0; l < slideshome.length; l++) {
       slideshome[l].style.display = "none";  
    }
    slidehomeIndex++;
    if (slidehomeIndex > slideshome.length) {slidehomeIndex = 1}    
    for (l = 0; l < dot2s.length; l++) {
        dot2s[l].className = dot2s[l].className.replace(" active", "");
    }
    slideshome[slidehomeIndex-1].style.display = "block";  
    dot2s[slidehomeIndex-1].className += " active";
    setTimeout(showSlideshome, 3000);
}

// about_us showSlides
var slideIndex = 1;
showSlides(slideIndex);
    
function plusSlides(n) {
showSlides(slideIndex += n);
}
    
function currentSlide(n) {
showSlides(slideIndex = n);
}
    
function showSlides(n) {
  var j;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (j = 0; j < slides.length; j++) {
      slides[j].style.display = "none";  
      }
  for (j = 0; j < dots.length; j++) {
      dots[j].className = dots[j].className.replace(" active", "");
      }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}   

// our_offer   
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
      }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
   
// our_offer gallery

function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var photoIndex = 1;
showPhotos(photoIndex);

function plusPhotos(m) {
  showPhotos(photoIndex += m);
}

function currentPhoto(m) {
  showPhotos(photoIndex = m);
}

function showPhotos(m) {
  var k;
  var photos = document.getElementsByClassName("myPhotos");
  var dot = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (m > photos.length) {photoIndex = 1}
  if (m < 1) {photoIndex = photos.length}
  for (k = 0; k < photos.length; k++) {
      photos[k].style.display = "none";
  }
  for (k = 0; k < dot.length; k++) {
     dot[k].className = dot[k].className.replace(" active", "");
  }
  photos[photoIndex-1].style.display = "block";
 dot[photoIndex-1].className += " active";
  captionText.innerHTML = dot[photoIndex-1].alt;
}

//SM

function openModal_SM() {
  document.getElementById('myModal_SM').style.display = "block";
}

function closeModal_SM() {
  document.getElementById('myModal_SM').style.display = "none";
}

var photoIndex_SM = 1;
showPhotos_SM(photoIndex_SM);

function plusPhotos_SM(m_SM) {
  showPhotos_SM(photoIndex_SM += m_SM);
}

function currentPhoto_SM(m_SM) {
  showPhotos_SM(photoIndex_SM = m_SM);
}

function showPhotos_SM(m_SM) {
  var k_SM;
  var photos_SM = document.getElementsByClassName("myPhotos_SM");
  var dot_SM = document.getElementsByClassName("demo_SM");
  var captionText_SM = document.getElementById("caption_SM");
  if (m_SM > photos_SM.length) {photoIndex_SM = 1}
  if (m_SM < 1) {photoIndex_SM = photos_SM.length}
  for (k_SM = 0; k_SM < photos_SM.length; k_SM++) {
      photos_SM[k_SM].style.display = "none";
  }
  for (k_SM = 0; k_SM < dot_SM.length; k_SM++) {
     dot_SM[k_SM].className = dot_SM[k_SM].className.replace(" active", "");
  }
  photos_SM[photoIndex_SM-1].style.display = "block";
 dot_SM[photoIndex_SM-1].className += " active";
  captionText_SM.innerHTML = dot_SM[photoIndex_SM-1].alt;
}

//WC

function openModal_WC() {
  document.getElementById('myModal_WC').style.display = "block";
}

function closeModal_WC() {
  document.getElementById('myModal_WC').style.display = "none";
}

var photoIndex_WC = 1;
showPhotos_WC(photoIndex_WC);

function plusPhotos_WC(m_WC) {
  showPhotos_WC(photoIndex_WC += m_WC);
}

function currentPhoto_WC(m_WC) {
  showPhotos_WC(photoIndex_WC = m_WC);
}

function showPhotos_WC(m_WC) {
  var k_WC;
  var photos_WC = document.getElementsByClassName("myPhotos_WC");
  var dot_WC = document.getElementsByClassName("demo_WC");
  var captionText_WC = document.getElementById("caption_WC");
  if (m_WC > photos_WC.length) {photoIndex_WC = 1}
  if (m_WC < 1) {photoIndex_WC = photos_WC.length}
  for (k_WC = 0; k_WC < photos_WC.length; k_WC++) {
      photos_WC[k_WC].style.display = "none";
  }
  for (k_WC = 0; k_WC < dot_WC.length; k_WC++) {
     dot_WC[k_WC].className = dot_WC[k_WC].className.replace(" active", "");
  }
  photos_WC[photoIndex_WC-1].style.display = "block";
 dot_WC[photoIndex_WC-1].className += " active";
  captionText_WC.innerHTML = dot_WC[photoIndex_WC-1].alt;
}

//BP

function openModal_BP() {
  document.getElementById('myModal_BP').style.display = "block";
}

function closeModal_BP() {
  document.getElementById('myModal_BP').style.display = "none";
}

var photoIndex_BP = 1;
showPhotos_BP(photoIndex_BP);

function plusPhotos_BP(m_BP) {
  showPhotos_BP(photoIndex_BP += m_BP);
}

function currentPhoto_BP(m_BP) {
  showPhotos_BP(photoIndex_BP = m_BP);
}

function showPhotos_BP(m_BP) {
  var k_BP;
  var photos_BP = document.getElementsByClassName("myPhotos_BP");
  var dot_BP = document.getElementsByClassName("demo_BP");
  var captionText_BP = document.getElementById("caption_BP");
  if (m_BP > photos_BP.length) {photoIndex_BP = 1}
  if (m_BP < 1) {photoIndex_BP = photos_BP.length}
  for (k_BP = 0; k_BP < photos_BP.length; k_BP++) {
      photos_BP[k_BP].style.display = "none";
  }
  for (k_BP = 0; k_BP < dot_BP.length; k_BP++) {
     dot_BP[k_BP].className = dot_BP[k_BP].className.replace(" active", "");
  }
  photos_BP[photoIndex_BP-1].style.display = "block";
 dot_BP[photoIndex_BP-1].className += " active";
  captionText_BP.innerHTML = dot_BP[photoIndex_BP-1].alt;
}


//tab price & timetable

var acc = document.getElementsByClassName("accordion");
var tab;

for (tab = 0; tab < acc.length; tab++) {
    acc[tab].addEventListener("click", function() {
        this.classList.toggle("active_table");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}