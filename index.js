window.addEventListener('load', ()=> {




  const  btnScrollDown = document.querySelector('.scroll-down');

  function scrollDown() {
    const windowCoords = document.documentElement.clientHeight;
    (function scroll() {
      if (window.pageYOffset < windowCoords) {
        window.scrollBy(0, 10);
        setTimeout(scroll, 0);
      }
      if (window.pageYOffset > windowCoords) {
        window.scrollTo(0, windowCoords);
      }
    })();
  }

  btnScrollDown.addEventListener('click', scrollDown);


// Get the #accordion element which contains the details and summary elements 
const accordion = document.getElementById("accordion");

// Get all of the details elements as a live collection
const details = accordion.getElementsByTagName("details");

// Add a click event listener to everything inside the accordion
accordion.addEventListener('click', (event) => {
  
  // Prevent the default open/close behaviour when you click
  event.preventDefault();

  // Store the parent detail element in a variable
  const parentDetail = event.target.parentNode;

  // When clicking on a <summary> element, check if the parent <details> is
  // closed by checking for the absence of the "open" attribute
  if (parentDetail.getAttribute("open")) {
    
    // Remove the open attribute to close the details element
    parentDetail.removeAttribute("open")

  } else {
    
    // Loop over all of the <details> elements and remove the open attribs
    for (const detail of details) {
      detail.removeAttribute("open")
    }

    // Finally add the open attrib to the parent <details> so it opens
    parentDetail.setAttribute("open", "true");
  }
});

})