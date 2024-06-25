// NAVBAR FUNCTIONALITY
const overlay = document.getElementById('overlay');
const menu = document.getElementById('menu');
const hamburger = document.getElementById('hamburger');
const btns = document.getElementById('btns');

hamburger.addEventListener('click', function() {
    menu.classList.toggle('show');
    btns.classList.toggle('show');
    overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  overlay.classList.toggle("show");
  button.classList.toggle("show");
  menu.classList.toggle("show");
});


function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}







//SLIDER CAROUSEL
let currentIndex = 0;

function showSlide(index) {
  const carouselInner = document.querySelector('.carousel-inner');
  const items = document.querySelectorAll('.item');
  const totalItems = items.length;

  if (index >= totalItems) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalItems - 1;
  } else {
    currentIndex = index;
  }

  const transformValue = `translateX(-${currentIndex * 100}%)`;
  carouselInner.style.transform = transformValue;
}

document.addEventListener('DOMContentLoaded', () => {
  const nextButton = document.querySelector('.next');
  const prevButton = document.querySelector('.prev');

  nextButton.addEventListener('click', () => {
    showSlide(currentIndex + 1);
  });

  prevButton.addEventListener('click', () => {
    showSlide(currentIndex - 1);
  });
});


//CARD SLIDER
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const totalCards = cards.length;
  let currentCardIndex = 0;

  const nextCardButton = document.querySelector('.next-card');
  const prevCardButton = document.querySelector('.prev-card');

  // Function to show or hide cards based on the current index and window width
  function showCards() {
    if (window.outerWidth <= 768) {
      // Small screens: show one card at a time
      cards.forEach((card, index) => {
        card.style.display = index === currentCardIndex ? 'flex' : 'none';
      });
    } else {
      // Large screens: show all cards
      cards.forEach(card => {
        card.style.display = 'flex';
      });
    }
  }

  // Initial display of cards
  showCards();

  // Event listeners for next and previous buttons
  nextCardButton.addEventListener('click', () => {
    currentCardIndex = (currentCardIndex + 1) % totalCards;
    showCards();
  });

  prevCardButton.addEventListener('click', () => {
    currentCardIndex = (currentCardIndex - 1 + totalCards) % totalCards;
    showCards();
  });

  // Update display on window resize
  window.addEventListener('resize', showCards);
});


//COMPANY SLIDER
document.addEventListener('DOMContentLoaded', () => {
  const companies = document.querySelectorAll('.company');
  const totalCompanies = companies.length;
  let currentCompanyIndex = 0;

  const nextButton = document.querySelector('.next-button');
  const prevButton = document.querySelector('.prev-button');

  // Function to show or hide companies based on the current index and window width
  function showCompanies() {
      if (window.outerWidth <= 768) {
          // Small screens: show one company at a time
          companies.forEach((company, index) => {
              company.style.display = index === currentCompanyIndex ? 'flex' : 'none';
          });
      } else {
          // Large screens: show all companies
          companies.forEach(company => {
              company.style.display = 'flex';
          });
      }
  }

  // Initial display of companies
  showCompanies();

  // Event listeners for next and previous buttons
  nextButton.addEventListener('click', () => {
      currentCompanyIndex = (currentCompanyIndex + 1) % totalCompanies;
      showCompanies();
  });

  prevButton.addEventListener('click', () => {
      currentCompanyIndex = (currentCompanyIndex - 1 + totalCompanies) % totalCompanies;
      showCompanies();
  });

  // Update display on window resize
  window.addEventListener('resize', showCompanies);
});






//NUM SLIDER
document.addEventListener('DOMContentLoaded', () => {
  const nums = document.querySelectorAll('.num');
  const totalNums = nums.length;
  let currentNumIndex = 0;

  const nextButton = document.querySelector('.next-num');
  const prevButton = document.querySelector('.prev-num');

  // Function to show or hide nums based on the current index and window width
  function showNums() {
      if (window.outerWidth <= 768) {
          // Small screens: show one num at a time
          nums.forEach((num, index) => {
              num.style.display = index === currentNumIndex ? 'flex' : 'none';
          });
      } else {
          // Large screens: show all nums
          nums.forEach(num => {
              num.style.display = 'flex';
          });
      }
  }

  // Initial display of nums
  showNums();

  // Event listeners for next and previous buttons
  nextButton.addEventListener('click', () => {
      currentNumIndex = (currentNumIndex + 1) % totalNums;
      showNums();
  });

  prevButton.addEventListener('click', () => {
      currentNumIndex = (currentNumIndex - 1 + totalNums) % totalNums;
      showNums();
  });

  // Update display on window resize
  window.addEventListener('resize', showNums);
});

