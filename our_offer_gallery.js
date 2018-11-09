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
