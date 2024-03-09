// index.js
// Author: Harold Castiaux
// video link: 

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
  
  // Include <small> tags in the querySelectorAll to target year information
  const searchResults = document.querySelectorAll('.list-group-item-action h5, .list-group-item-action p, .list-group-item-action small'); 

  searchResults.forEach(element => {
      if (element.textContent) {
          element.innerHTML = element.textContent.replace(regex, `<mark>$1</mark>`); // Wrap matched text in <mark> tag
      }
  });
}

jQuery(document).ready(function($) {
  $('#add-car-form').on('submit', function(e) {
    e.preventDefault(); // Prevent traditional form submission

    // Perform your validation checks here
    const name = $('#carName').val().trim();
    const description = $('#carDescription').val().trim();
    const year = $('#carYear').val().trim();
    const price = $('#carPrice').val().trim();
    const imageUrl = $('#carImage').val().trim();

    // Example validation for the car name
    if (!name) {
      alert('Car name is required.');
      return;
    }
    
    // Description validation
    if (!description) {
      alert('Description is required.');
      return;
    }

    // Year validation
    if (!year || isNaN(year) || parseInt(year) < 1886 || parseInt(year) > new Date().getFullYear()) {
      alert('Please enter a valid year.');
      return;
    }

    // Price validation
    if (!price || isNaN(parseFloat(price))) {
      alert('Please enter a valid price.');
      return;
    }

    // If validation fails, return from the function before making the AJAX call
    // Example:
    if (!imageUrl) {
      alert('Please enter a valid image URL.');
      return;
    }

    // If all validations pass, continue with the AJAX submission
    var formData = $(this).serialize(); // Serialize form data

    $.ajax({
      type: 'POST',
      url: '/add', // Adjust this URL to your route
      data: formData,
      dataType: 'json',
      success: function(response) {
        // Display success message and link to the new item
        $('#success-message').html(`New item successfully created. <a href="/view/${response.id}">See it here</a>`);
        $('#success-message').show();

        // Clear the form fields
        $('#add-car-form').trigger('reset');

        // Focus on the first input field for the next entry
        $('#carName').focus();
      },
      error: function() {
        // Handle errors (if any)
        alert('There was a problem with the request.');
      }
    });
  });

  $('#discard-changes-btn').click(function(event) {
    event.preventDefault();
    confirmDiscardChanges(); // Now it will call the globally defined function
  });

  
});

$('#edit-car-form').submit(function(e) {
  e.preventDefault();
  // Perform your validation checks here
  // If all validations pass, continue with the AJAX submission
  var formData = $(this).serialize();
  $.ajax({
      type: 'POST',
      url: window.location.pathname, // Sends data to the current URL (edit route)
      data: formData,
      success: function(response) {
          window.location.href = `/view/${response.id}`; // Redirects to the view page
      },
      error: function() {
          alert('There was a problem saving your changes.');
      }
  });
});
