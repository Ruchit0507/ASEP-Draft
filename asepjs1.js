let ngoCount = 3; // Initial number of NGOs displayed
        const maxNgoCount = 30; // Maximum limit of NGOs
    
        function addMoreNGOs() {
            const ngoCards = document.getElementById('ngoCards');
    
            if (ngoCount >= maxNgoCount) {
                document.querySelector('.find-more button').disabled = true;
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
            }
    
            if (ngoCount >= maxNgoCount) {
                document.querySelector('.find-more button').disabled = true;
            }
        }

// JavaScript code to dynamically add NGO cards
function addMoreNGOs() {
    const ngoCardsContainer = document.getElementById("ngoCards");

    const moreNGOs = [
        { img: "ngo4.jpg", name: "Akshar Paul", description: "Empowering underprivileged children with education and healthcare." },
        { img: "ngo5.jpg", name: "Ghar", description: "Creating solutions for poverty alleviation through reuse of urban surplus." },
        { img: "ngo6.jpg", name: "Parisar", description: "Ensuring happy and healthy childhoods through rights and education." },
        { img: "ngo7.jpg", name: "Green Sunrise Hill", description: "Providing care and support to the elderly across India." },
        { img: "ngo8.jpg", name: "Navkshitij", description: "Improving the quality of education for underprivileged children." },
        { img: "ngo9.jpg", name: "Samavedana", description: "Serving millions of school children with mid-day meals." },
        { img: "ngo10.jpg", name: "Kshitij Foundation", description: "Building leaders to ensure every child receives excellent education." },
        { img: "ngo11.jpg", name: "MadhurBhav", description: "Protecting endangered species and their habitats worldwide." },
        { img: "ngo12.jpg", name: "SAW", description: "Advocating for children's rights and well-being." },
        { img: "ngo13.jpg", name: "Tahan", description: "Fighting for climate and environmental justice." },
        { img: "ngo14.jpg", name: "WRCS", description: "Advocating for the ethical treatment of animals." },
        { img: "ngo15.jpg", name: "Raabta Foundation", description: "Improving the lives of children globally." },
        { img: "ngo16.jpg", name: "Naam Foundation", description: "Providing disaster relief and humanitarian aid." },
        { img: "ngo17.jpg", name: "RESQ", description: "Focusing on poverty alleviation and social justice." },
        { img: "ngo18.jpg", name: "Maha NGO Federation", description: "Granting wishes to children with critical illnesses." },
        { img: "ngo19.jpg", name: "GROW", description: "Promoting children's rights and equality for girls." },
        { img: "ngo20.jpg", name: "Snehawan", description: "Fighting inequality and promoting sustainable development." },
        { img: "ngo21.jpg", name: "Y4D Foundation", description: "Empowering women workers through self-reliance." },
        { img: "ngo22.jpg", name: "Karma Foundation", description: "Working for the welfare of visually impaired individuals." },
        { img: "ngo23.jpg", name: "Nelda", description: "Engaging youth in transforming India through volunteering." },
        { img: "ngo24.jpg", name: "SOFOSH", description: "Supporting education for underprivileged girls." },
        { img: "ngo25.jpg", name: "Environmental Forum of India", description: "Rescuing and rehabilitating wildlife in distress." },
        { img: "ngo26.jpg", name: "FUEL", description: "Improving sanitation and public health across India." },
        { img: "ngo27.jpg", name: "Swadhar", description: "Ensuring access to clean water and sanitation." },
        { img: "ngo28.jpg", name: "Cityconnect", description: "Fighting poverty and injustice." },
        { img: "ngo29.jpg", name: "TARA Mobile Creches Pune", description: "Transforming lives through education and empowerment." },
        { img: "ngo30.jpg", name: "Sevavardhini", description: "Rescuing and treating street animals in India." },
    ];

    // Create and append new cards
    moreNGOs.forEach(ngo => {
        const card = document.createElement("div");
        card.className = "ngo-card";

        card.innerHTML = `
            <img src="${ngo.img}" alt="${ngo.name}">
            <h3>${ngo.name}</h3>
            <p>${ngo.description}</p>
        `;

        ngoCardsContainer.appendChild(card);
    });

    // Optional: Disable the button after adding all NGOs
    document.querySelector(".find-more button").disabled = true;
    document.querySelector(".find-more button").textContent = "All NGOs Loaded";
}
