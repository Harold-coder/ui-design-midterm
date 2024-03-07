// index.js
// Author: Harold Castiaux
// video link: https://youtu.be/EEJjbpuDxJU

const supercars = [
    {
      "id": "1",
      "name": "Ferrari SF90 Stradale",
      "description": "A hybrid supercar that combines a powerful V8 engine with three electric motors to deliver unmatched performance.",
      "year": "2020",
      "price": "550000",
      "specs": ["V8 engine", "986 hp", "2.5 sec 0-60 mph"],
      "similar_models": ["McLaren P1", "Porsche 918 Spyder"]
    },
    {
      "id": "2",
      "name": "Lamborghini Aventador SVJ",
      "description": "This limited edition Aventador is known for its track performance and aerodynamic design.",
      "year": "2019",
      "price": "600000",
      "specs": ["V12 engine", "759 hp", "2.8 sec 0-60 mph"],
      "similar_models": ["Ferrari 812 Superfast", "Bugatti Chiron"]
    },
    {
      "id": "3",
      "name": "McLaren 720S",
      "description": "A lightweight, aerodynamically efficient supercar with a focus on driver engagement.",
      "year": "2018",
      "price": "300000",
      "specs": ["Twin-turbo V8 engine", "710 hp", "2.9 sec 0-60 mph"],
      "similar_models": ["Ferrari F8 Tributo", "Lamborghini Huracán EVO"]
    },
    {
      "id": "4",
      "name": "Bugatti Chiron",
      "description": "One of the most powerful and exclusive production super sports cars in Bugatti's history.",
      "year": "2017",
      "price": "3000000",
      "specs": ["Quad-turbocharged W16 engine", "1500 hp", "2.4 sec 0-60 mph"],
      "similar_models": ["Koenigsegg Agera RS", "Hennessey Venom F5"]
    },
    {
      "id": "5",
      "name": "Porsche 911 GT2 RS",
      "description": "A track-focused iteration of the iconic 911, offering high performance with rear-wheel drive agility.",
      "year": "2018",
      "price": "293200",
      "specs": ["Twin-turbo flat-six engine", "700 hp", "2.7 sec 0-60 mph"],
      "similar_models": ["Chevrolet Corvette ZR1", "Nissan GT-R NISMO"]
    },
    {
      "id": "6",
      "name": "Aston Martin DBS Superleggera",
      "description": "A super GT with a blend of elegance and brute force, featuring a bi-turbo V12 engine.",
      "year": "2020",
      "price": "316300",
      "specs": ["5.2L V12 engine", "715 hp", "3.4 sec 0-60 mph"],
      "similar_models": ["Bentley Continental GT", "Mercedes-AMG GT R"]
    },
    {
      "id": "7",
      "name": "Mercedes-AMG GT Black Series",
      "description": "The most powerful AMG with a flat-plane crankshaft V8 engine and track-focused performance.",
      "year": "2021",
      "price": "325000",
      "specs": ["4.0L V8 BiTurbo engine", "720 hp", "3.1 sec 0-60 mph"],
      "similar_models": ["McLaren 600LT", "Ferrari 488 Pista"]
    },
    {
      "id": "8",
      "name": "Koenigsegg Jesko",
      "description": "Named after the company founder's father, the Jesko is a hypercar meant to break speed records.",
      "year": "2021",
      "price": "3000000",
      "specs": ["5.0L Twin-Turbo V8 engine", "1600 hp", "2.5 sec 0-60 mph"],
      "similar_models": ["Pagani Huayra", "Lotus Evija"]
    },
    {
      "id": "9",
      "name": "Pagani Huayra BC",
      "description": "An Italian masterpiece with a focus on lightweight construction and a turbocharged V12 engine.",
      "year": "2017",
      "price": "2500000",
      "specs": ["6.0L Twin-Turbo V12 engine", "790 hp", "2.8 sec 0-60 mph"],
      "similar_models": ["Lamborghini Centenario", "Ferrari LaFerrari"]
    },
    {
      "id": "10",
      "name": "Ferrari 488 Pista",
      "description": "A circuit-ready, aerodynamically enhanced version of the 488 GTB with increased power.",
      "year": "2019",
      "price": "350000",
      "specs": ["3.9L Twin-Turbo V8 engine", "711 hp", "2.85 sec 0-60 mph"],
      "similar_models": ["Porsche 911 GT3 RS", "Audi R8 V10 Performance"]
    },
    {
      "id": "11",
      "name": "Maserati MC20",
      "description": "Maserati's return to the supercar market, featuring a new V6 Nettuno engine.",
      "year": "2021",
      "price": "210000",
      "specs": ["3.0L Twin-Turbo V6 engine", "621 hp", "2.9 sec 0-60 mph"],
      "similar_models": ["Aston Martin Vantage", "Jaguar F-Type SVR"]
    },
    {
      "id": "13",
      "name": "McLaren P1",
      "description": "A hybrid hypercar that's part of the ultimate series, pushing the boundaries of performance.",
      "year": "2013",
      "price": "1150000",
      "specs": ["Twin-turbo V8 engine", "903 hp", "2.8 sec 0-60 mph"],
      "similar_models": ["LaFerrari", "Porsche 918 Spyder"]
    },
    {
      "id": "14",
      "name": "Lamborghini Huracán Performante",
      "description": "Redefines the concept of super sports cars, integrating aerodynamic performance and improved power.",
      "year": "2017",
      "price": "274390",
      "specs": ["V10 engine", "631 hp", "2.9 sec 0-60 mph"],
      "similar_models": ["Audi R8 V10 Performance", "Porsche 911 GT3 RS"]
    },
   {
      "id": "15",
      "name": "Aston Martin Valkyrie",
      "description": "A revolutionary hypercar engineered to be a dynamic yet luxurious vehicle.",
      "year": "2021",
      "price": "3000000",
      "specs": ["Cosworth V12 engine", "1139 hp", "2.5 sec 0-60 mph"],
      "similar_models": ["McLaren Senna", "Mercedes-AMG One"]
    }
];

document.addEventListener("DOMContentLoaded", function() {
  // Select the first 3 supercars
  const popularItems = supercars.slice(0, 3);

  const container = document.getElementById('popular-items');

  if (container) {
    popularItems.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card mb-3'; // Added mb-3 for some margin bottom
      card.style.width = '18rem';
      card.innerHTML = `
          <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">${item.description}</p>
              <a href="/view/${item.id}" class="btn btn-primary">View Details</a>
          </div>
      `;
      container.appendChild(card);
    });
  }
});


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
