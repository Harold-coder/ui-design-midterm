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
  
  // Include <small> tags in the querySelectorAll to target year information
  const searchResults = document.querySelectorAll('.list-group-item-action h5, .list-group-item-action p, .list-group-item-action small'); 

  searchResults.forEach(element => {
      if (element.textContent) {
          element.innerHTML = element.textContent.replace(regex, `<mark>$1</mark>`); // Wrap matched text in <mark> tag
      }
  });
}


document.addEventListener('DOMContentLoaded', function() {
  const addCarForm = document.getElementById('add-car-form');
  addCarForm.addEventListener('submit', validateForm);
});

function validateForm(event) {
  event.preventDefault(); // Stop the form from submitting until validation is complete

  const form = event.target;
  
  // Get form inputs
  const name = document.getElementById('carName').value.trim();
  const description = document.getElementById('carDescription').value.trim();
  const year = document.getElementById('carYear').value.trim();
  const price = document.getElementById('carPrice').value.trim();
  // Continue for specs and similar_models
  
  let isValid = true; // Flag to determine if the form should be submitted

  // Name validation
  if (!name) {
      alert('Car name is required.');
      isValid = false;
  }
  
  // Description validation
  if (!description) {
      alert('Description is required.');
      isValid = false;
  }

  // Year validation
  if (!year || isNaN(year) || parseInt(year) < 1886 || parseInt(year) > new Date().getFullYear()) {
      alert('Please enter a valid year.');
      isValid = false;
  }

  // Price validation
  if (!price || isNaN(parseFloat(price))) {
      alert('Please enter a valid price.');
      isValid = false;
  }
  
  // Image upload validation
  const imageUrl = document.getElementById('carImage').value.trim();
  if (!imageUrl || !isValidUrl(imageUrl)) {
      alert('Please enter a valid image URL.');
      isValid = false;
  }
  
  if (isValid) {
      // If all fields are valid, submit the form
      form.submit();
  }
}

// Helper function to validate URL
function isValidUrl(string) {
  let url;
  
  try {
    url = new URL(string);
  } catch (_) {
    return false;  
  }

  return url.protocol === "http:" || url.protocol === "https:";
}


// document.addEventListener('DOMContentLoaded', function() {
//   const addCarForm = document.getElementById('add-car-form');
//   if(addCarForm) {
//       addCarForm.addEventListener('submit', function(event) {
//           event.preventDefault();

//           // Create a FormData object, passing in the form
//           const formData = new FormData(addCarForm);

//           // Use the Fetch API to submit the form data
//           fetch('/add', {
//               method: 'POST',
//               body: formData,
//           })
//           .then(response => response.json()) // Convert the response to JSON
//           .then(data => {
//               console.log('Success:', data);
//               // Clear the form
//               addCarForm.reset();
//               // Focus on the first input element for a new entry
//               document.getElementById('carName').focus();
//               // Optionally, show success message and link to view the new item
//               const successMessage = document.getElementById('success-message');
//               successMessage.innerHTML = `New item successfully created. <a href="/view/${data.id}">See it here</a>`;
//               successMessage.style.display = 'block';
//           })
//           .catch((error) => {
//               console.error('Error:', error);
//           });
//       });
//   }
// });


document.addEventListener('DOMContentLoaded', function() {
  const addCarForm = document.getElementById('add-car-form');
  if(addCarForm) {
      addCarForm.addEventListener('submit', function(event) {
          event.preventDefault();

          // Perform validation checks here
          // If validation fails, return to stop the form submission
          // Example validation check:
          // if (document.getElementById('carName').value.trim() === '') {
          //     alert('Car name is required.');
          //     return;
          // }

          // Assuming validation passes, continue with form submission
          const formData = new FormData(addCarForm);

          // Use the Fetch API to submit the form data
          fetch('/add', {
              method: 'POST',
              body: formData,
          })
          .then(response => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .then(data => {
              console.log('Success:', data);
              // Clear the form
              addCarForm.reset();
              // Focus on the first input element for a new entry
              document.getElementById('carName').focus();
              // Optionally, show success message and link to view the new item
              const successMessage = document.getElementById('success-message');
              successMessage.innerHTML = `New item successfully created. <a href="/view/${data.id}">See it here</a>`;
              successMessage.style.display = 'block';
          })
          .catch((error) => {
              console.error('Error:', error);
          });
      });
  }
});

