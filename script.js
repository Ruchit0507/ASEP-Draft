const audio = document.getElementById("background-audio");
const muteButton = document.getElementById("mute-button");
const muteIcon = muteButton.querySelector("i"); // Select the icon inside the button

// Function to toggle mute/unmute
muteButton.addEventListener("click", function () {
  if (audio.paused || audio.muted) {
    audio.muted = false;
    audio.play().catch((error) => {
      console.error("Error playing audio:", error);
    });
    muteIcon.classList.replace("fa-volume-xmark", "fa-volume-up"); // Change to unmute icon
  } else {
    audio.muted = true;
    muteIcon.classList.replace("fa-volume-up", "fa-volume-xmark"); // Change to mute icon
  }
});

let mode = document.getElementById("darkmode");
let body = document.getElementsByTagName("body")[0];
let mainnav = document.getElementsByClassName("main-nav");
let navlink = document.getElementsByClassName("navlinks");
let logo = document.getElementsByClassName("logo");

mode.addEventListener("click", function () {
  if (
    body.style.backgroundColor === "white" ||
    body.style.backgroundColor === ""
  ) {
    body.style.backgroundColor = "black";
    for (let i = 0; i < mainnav.length; i++) {
      mainnav[i].style.backgroundColor = "black";
      darkmode.textContent = "Light Mode";
    }
    for (let i = 0; i < navlink.length; i++) {
      navlink[i].style.color = "white";
    }
    for (let i = 0; i < logo.length; i++) {
      logo[i].style.color = "white";
    }
  } else {
    body.style.backgroundColor = "white";
    for (let i = 0; i < mainnav.length; i++) {
      mainnav[i].style.backgroundColor = "white";
      darkmode.textContent = "Dark Mode";
    }
    for (let i = 0; i < navlink.length; i++) {
      navlink[i].style.color = "black";
    }
    for (let i = 0; i < logo.length; i++) {
      logo[i].style.color = "black";
    }
  }
});

let ngoCount = 3; // Initial number of NGOs displayed
const maxNgoCount = 30; // Maximum number of NGOs

function addMoreNGOs() {
  const ngoCards = document.getElementById("ngoCards");

  if (ngoCount >= maxNgoCount) {
    document.querySelector(".find-more button").disabled = true;
    return;
  }

  const newNgo = `
                <div class="ngo-card">
                    <img src="https://via.placeholder.com/500x300" alt="New NGO">
                    <h3>New NGO Initiative</h3>
                    <p>Dedicated to improving lives through various programs and initiatives.</p>
                </div>
            `;

  for (let i = 0; i < 3 && ngoCount < maxNgoCount; i++) {
    ngoCards.innerHTML += newNgo;
    ngoCount++;
  }  // Adds up to 3 new NGO cards while keeping the count below maxNgoCount

  if (ngoCount >= maxNgoCount) {
    document.querySelector(".find-more button").disabled = true;
  }
}

// Add event listener for the search button
document
  .querySelector(".main-nav .search-bar button")
  .addEventListener("click", (event) => {
    if (event.key === "Enter") {
      searchNGOs();
    }
  });

// Add event listener for the "Enter" key in the search bar
document
  .querySelector(".main-nav .search-bar input")
  .addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      searchNGOs();
    }
  });

// Add event listener for restoring the page on mouse click
document.addEventListener("click", (event) => {
  const isNGOElement =
    event.target.closest(".ngo-card") ||
    event.target.closest(".main-nav .search-bar input");
  if (!isNGOElement) {
    resetNGOs();
  }
});

// Function to filter and highlight NGOs based on search input
function searchNGOs() {
  // Get the search input value and convert it to lowercase for case-insensitive search
  const searchValue = document
    .querySelector(".main-nav .search-bar input")
    .value.toLowerCase()
    .trim();

  // Get all NGO cards (including hidden ones)
  const ngoCards = document.querySelectorAll(".ngo-card");

  // Variable to track if a match is found
  let matchFound = false;

  // Iterate over all NGO cards
  ngoCards.forEach((card) => {
    const ngoName = card.querySelector("h3").textContent.toLowerCase();


    if (ngoName.includes(searchValue) && searchValue !== "") {
      // Show and highlight the matched NGO
      card.style.display = "block"; // Ensure it's visible
      card.style.border = "4px solid #ff6b6b";
      card.style.backgroundColor = "#ffe6e6";
      matchFound = true;
    } else {
      // Hide non-matching NGOs
      card.style.display = "none";
    }
  });

  // Show an alert if no match is found
  if (!matchFound && searchValue !== "") {
    alert("No matching NGO found.");
  }

  // Reset if search value is empty
  if (searchValue === "") {
    resetNGOs();
  }
}

// Function to reset all NGO cards to the original state
function resetNGOs() {
  const ngoCards = document.querySelectorAll(".ngo-card");

  // Show all NGOs and reset styles
  ngoCards.forEach((card) => {
    card.style.display = "block"; // Show all NGOs
    card.style.border = "1px solid black"; // Reset border
    card.style.backgroundColor = "rgb(243, 236, 236)"; // Reset background
  });

  // Clear the search input field
  document.querySelector(".main-nav .search-bar input").value = "";
}

// JavaScript code to dynamically add NGO cards
function addMoreNGOs() {
  const ngoCardsContainer = document.getElementById("ngoCards");

  const moreNGOs = [
    {
      link: "./ngo4.html",
      img: "ngo4.jpg",
      name: "Ghar",
      description:
        "Empowering underprivileged children with education and healthcare.",
    },
    {
      link: "./ngo5.html",
      img: "ngo5.jpg",
      name: "Akshar Paul",
      description:
        "Creating solutions for poverty alleviation through reuse of urban surplus.",
    },
    {
      link: "./ngo6.html",
      img: "ngo6.jpg",
      name: "Parisar",
      description:
        "Ensuring happy and healthy childhoods through rights and education.",
    },
    {
      link: "./ngo7.html",
      img: "ngo7.jpg",
      name: "Green Sunrise Hill",
      description: "Providing care and support to the elderly across India.",
    },
    {
      link: "./ngo8.html",
      img: "ngo8.jpg",
      name: "Navkshitij",
      description:
        "Improving the quality of education for underprivileged children.",
    },
    {
      link: "./ngo9.html",
      img: "ngo9.jpg",
      name: "Samavedana",
      description: "Serving millions of school children with mid-day meals.",
    },
    {
      link: "./ngo10.html",
      img: "ngo10.jpg",
      name: "Kshitij Foundation",
      description:
        "Building leaders to ensure every child receives excellent education.",
    },
    {
      link: "./ngo11.html",
      img: "ngo11.jpg",
      name: "MadhurBhav",
      description:
        "Protecting endangered species and their habitats worldwide.",
    },
    {
      img: "ngo12.jpg",
      name: "SAW",
      description: "Advocating for children's rights and well-being.",
    },
    {
      img: "ngo13.jpg",
      name: "Tahan",
      description: "Fighting for climate and environmental justice.",
    },
    {
      img: "ngo14.jpg",
      name: "WRCS",
      description: "Advocating for the ethical treatment of animals.",
    },
    {
      img: "ngo15.jpg",
      name: "Raabta Foundation",
      description: "Improving the lives of children globally.",
    },
    {
      img: "ngo16.jpg",
      name: "Naam Foundation",
      description: "Providing disaster relief and humanitarian aid.",
    },
    {
      img: "ngo17.jpg",
      name: "RESQ",
      description: "Focusing on poverty alleviation and social justice.",
    },
    {
      img: "ngo18.jpg",
      name: "Maha NGO Federation",
      description: "Granting wishes to children with critical illnesses.",
    },
    {
      img: "ngo19.jpg",
      name: "GROW",
      description: "Promoting children's rights and equality for girls.",
    },
    {
      img: "ngo20.jpg",
      name: "Snehawan",
      description: "Fighting inequality and promoting sustainable development.",
    },
    {
      img: "ngo21.jpg",
      name: "Y4D Foundation",
      description: "Empowering women workers through self-reliance.",
    },
    {
      img: "ngo22.jpg",
      name: "Karma Foundation",
      description: "Working for the welfare of visually impaired individuals.",
    },
    {
      img: "ngo23.jpg",
      name: "Nelda",
      description: "Engaging youth in transforming India through volunteering.",
    },
    {
      img: "ngo24.jpg",
      name: "SOFOSH",
      description: "Supporting education for underprivileged girls.",
    },
    {
      img: "ngo25.jpg",
      name: "Environmental Forum of India",
      description: "Rescuing and rehabilitating wildlife in distress.",
    },
    {
      img: "ngo26.jpg",
      name: "FUEL",
      description: "Improving sanitation and public health across India.",
    },
    {
      img: "ngo27.jpg",
      name: "Swadhar",
      description: "Ensuring access to clean water and sanitation.",
    },
    {
      img: "ngo28.jpg",
      name: "Cityconnect",
      description: "Fighting poverty and injustice.",
    },
    {
      img: "ngo29.jpg",
      name: "TARA Mobile Creches Pune",
      description: "Transforming lives through education and empowerment.",
    },
    {
      img: "ngo30.jpg",
      name: "Sevavardhini",
      description: "Rescuing and treating street animals in India.",
    },
  ];

  // Create and append new cards
  moreNGOs.forEach((ngo) => {
    const card = document.createElement("div");
    card.className = "ngo-card";

    card.innerHTML = `
            <a href="${ngo.link}" target="_blank"><img src="${ngo.img}" alt="${ngo.name}">
            <h3>${ngo.name}</h3>
            <p>${ngo.description}</p></a>
        `;

    ngoCardsContainer.appendChild(card);
  });

  // Optional: Disable the button after adding all NGOs
  document.querySelector(".find-more button").disabled = true;
  document.querySelector(".find-more button").textContent = "All NGOs Loaded";
}
