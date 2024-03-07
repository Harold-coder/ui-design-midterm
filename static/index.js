// index.js
// Author: Harold Castiaux
// video link: https://youtu.be/EEJjbpuDxJU

document.addEventListener('DOMContentLoaded', function() {
  const searchForm = document.getElementById('search-form');
  if (searchForm) {
    searchForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevents the form from submitting traditionally
      const searchInput = document.getElementById('search-input');
      const searchText = searchInput.value.trim();

      if (searchText) {
        window.location.href = `/search?query=${encodeURIComponent(searchText)}`;
      } else {
        // Clear the input and maintain focus
        searchInput.value = '';
        searchInput.focus();
      }
    });
  } else {
    console.error('Search form not found');
  }
});



document.addEventListener("DOMContentLoaded", function() {
  highlightSearchTerms();
});

function highlightSearchTerms() {
  const queryParams = new URLSearchParams(window.location.search);
  const query = queryParams.get('query'); // Assumes your search query parameter is named 'query'

  if (!query) return; // If there's no query, don't proceed

  const regex = new RegExp(`(${query})`, 'gi'); // Global, case-insensitive
  // Adjusted to select h5 and p elements directly within the list-group-item-action class
  const searchResults = document.querySelectorAll('.list-group-item-action h5, .list-group-item-action p'); 

  searchResults.forEach(element => {
      if (element.textContent) {
          element.innerHTML = element.textContent.replace(regex, `<mark>$1</mark>`); // Wrap matched text in <mark> tag
      }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('add-car-form');
  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Collect form data
      const formData = new FormData(form);
  
      // Send POST request with Fetch API
      fetch('/add', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          // Handle success, e.g., show success message, redirect, etc.
        } else {
          // Handle error, e.g., show error message
        }
      })
      .catch(error => console.error('Error:', error));
    });
  }
});

