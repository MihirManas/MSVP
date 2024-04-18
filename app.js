document.addEventListener("DOMContentLoaded", function () {
	const hamburger = document.getElementsByClassName("hamburger")[0];
	const navList = document.querySelector(".nav-list");
  
	// Toggle the mobile menu when the hamburger icon is clicked
	hamburger.addEventListener("click", function () {
	  navList.classList.toggle("active");
	});
  
	// Smooth scrolling for navigation links
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	  anchor.addEventListener('click', function (e) {
		e.preventDefault();
		document.querySelector(this.getAttribute('href')).scrollIntoView({
		  behavior: 'smooth'
		});
	  });
	});
  });
  document.addEventListener('DOMContentLoaded', function() {
	const thumbnails = document.querySelectorAll('.thumbnail');
  
	thumbnails.forEach(function(thumbnail) {
	  thumbnail.addEventListener('click', function() {
		// Check if full-size image is already open
		if (this.classList.contains('full-image')) {
		  // If full-size image is open, remove it
		  document.body.removeChild(document.querySelector('.full-image'));
		  this.classList.remove('full-image'); // Remove full-image class from thumbnail
		} else {
		  // If full-size image is not open, load it
		  const fullImageSrc = this.dataset.full;
		  const fullImage = new Image();
		  fullImage.src = fullImageSrc;
		  fullImage.classList.add('full-image');
  
		  // Append full image to the body
		  document.body.appendChild(fullImage);
  
		  // Mark thumbnail as full-size image
		  this.classList.add('full-image');
		}
	  });
	});
  
	// Event listener to close full-size image when clicked
	document.body.addEventListener('click', function(event) {
	  if (event.target.classList.contains('full-image')) {
		document.body.removeChild(event.target);
		const thumbnailsWithFullImage = document.querySelectorAll('.full-image');
		thumbnailsWithFullImage.forEach(function(thumbnail) {
		  thumbnail.classList.remove('full-image'); // Remove full-image class from all thumbnails
		});
	  }
	});
  });
	
			  