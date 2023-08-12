$(document).ready(function() {
  // Scroll behavior for changing the navbar background color
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('.navbar').addClass('navbar-colored');
    } else {
      $('.navbar').removeClass('navbar-colored');
    }
  });
  
  // Typewriter effect
  const textItems = [
    "WEB DEVELOPER",
    "PYTHON DEVELOPER",
    "FRONT-END DEVELOPER",
    "BACK-END DEVELOPER",
    "TESTING AND QUALITY ASSURANCE",
    "LIFELONG LEARNER"
  ];
  
  const typewriter = document.getElementById('typewriter');
  let currentItem = 0;
  let currentCharacter = 0;
  let isDeleting = false;
  
  function type() {
    const currentText = textItems[currentItem];
    const cursorSpan = '<span class="cursor">|</span>';
    
    if (!isDeleting) {
      typewriter.innerHTML = currentText.substring(0, currentCharacter) + cursorSpan;
      currentCharacter++;
  
      if (currentCharacter > currentText.length) {
        isDeleting = true;
        setTimeout(type, 1000);
      } else {
        setTimeout(type, 50);
      }
    } else {
      typewriter.innerHTML = currentText.substring(0, currentCharacter) + cursorSpan;
      currentCharacter--;
  
      if (currentCharacter < 0) {
        isDeleting = false;
        currentItem = (currentItem + 1) % textItems.length;
        currentCharacter = 0; // Reset currentCharacter to 0 when switching words
        setTimeout(type, 500);
      } else {
        setTimeout(type, 50);
      }
    }
  }
  
  // Function to close navigation menu
  function closeNavMenu() {
    $('.navbar-collapse').collapse('hide');
  }
  
  // Close the menu when a link is clicked
  $('.navbar-nav a').on('click', function() {
    closeNavMenu();
  });
  
  // Start the typewriter effect
  type();
});
