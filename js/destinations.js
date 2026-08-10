const destinations = [
    {
        id: 1,
        name: "Boudhanath Stupa",
        category: "Religious",
        tags: ["Religious"],
        location: "Boudha, Kathmandu",
        rating: 5,
        description: "One of the world's largest Buddhist stupas.",
        image: "images/destinations/Boudhanath Stupa.jpg",
        featured: true
    },
    {
        id: 2,
        name: "Swayambhunath Stupa",
        category: "Religious",
        tags: ["Religious"],
        location: "Swayambhu, Kathmandu",
        rating: 5,
        description: "Ancient stupa with panoramic valley views.",
        image: "images/destinations/Swayambhunath.jpg",
        featured: false
    },
    {
        id: 3,
        name: "Pashupatinath Temple",
        category: "Religious",
        tags: ["Religious"],
        location: "Gaushala, Kathmandu",
        rating: 5,
        description: "Nepal's most sacred Hindu temple complex.",
        image: "images/destinations/Pashupatinath.jpg",
        featured: false
    },
    {
        id: 4,
        name: "Kapan Monastery",
        category: "Religious",
        tags: ["Religious","Hiking"],
        location: "Kapan, Kathmandu",
        rating: 5,
        description: "Peaceful Buddhist monastery overlooking the valley.",
        image: "images/destinations/",
        featured: false
    },
    {
        id: 5,
        name: "Budhanilkantha Temple",
        category: "Religious",
        tags: ["Religious"],
        location: "Budhanilkantha, Kathmandu",
        rating: 4,
        description: "Home to a famous reclinign Vishnu statue.",
        image: "images/destinations/",
        featured: false
    },
    {
        id: 6,
        name: "Dakshinkali Temple",
        category: "Religious",
        tags: ["Religious"],
        location: "Pharping",
        rating: 4,
        description: "Sacred Hindu temple surrounded by forested hills.",
        image: "images/destinations/",
        featured: false
    },
    {
        id: 7,
        name: "Kumbeshwar Temple",
        category: "Religious",
        tags: ["Religious"],
        location: "Kumbeshwar, Patan",
        rating: 4,
        description: "Historic temple and one of Patan's oldest monuments.",
        image: "images/destinations/",
        featured: false
    },
    {
        id: 8,
        name: "Kathmandu Durbar Square",
        category: "Heritage",
        tags: ["Heritage","Streets"],
        location: "Basantapur, Kathmandu",
        rating: 5,
        description: "Historic square filled with temples and palaces.",
        image: "images/destinations/Basantapur DS.jpg",
        featured: true
    },
    {
        id: 9,
        name: "Hanuman Dhoka Palace",
        category: "Heritage",
        tags: ["Heritage","Museum"],
        location: "Basantapur, Kathmandu",
        rating: 5,
        description: "Former royal palace in historic Kathmandu",
        image: "images/destinations/",
        featured: false
    },
    {
        id: 10,
        name: "Kumari Ghar",
        category: "Heritage",
        tags: ["Heritage","Culture"],
        location: "Basantapur, Kathmandu",
        rating: 5,
        description: "Ornately carved home of Kathmandu's Living Goddess.",
        image: "images/destinations/",
        featured: false
    },
    {
        id: 11,
        name: "Narayanhiti Palace Museum",
        category: "Heritage",
        tags: ["Heritage","Museum"],
        location: "Durbar Marg, Kathmandu",
        rating: 4,
        description: "Former royal palace turned history museum.",
        image: "images/destinations/Narayanhiti Palace.jpg",
        featured: false
    },
    {
        id: 12,
        name: "Asan Bazaar",
        category: "Market",
        tags: ["Market","Streets","Heritage"],
        location: "Asan, Kathmandu",
        rating: 5,
        description: "Bustling historic market full of local life.",
        image: "images/destinations/",
        featured: false
    },
    {
        id: 13,
        name: "Garden of Dreams",
        category: "Garden",
        tags: ["Garden","Heritage"],
        location: "Thamel, Kathmandu",
        rating: 5,
        description: "Peaceful neo-classical garden in central Kathmandu.",
        image: "images/destinations/",
        featured: false
    },
    {
        id: 14,
        name: "Taragaon Next",
        category: "Art",
        tags: ["Art","Heritage"],
        location: "Boudha",
        rating: 4,
        description: "Cultural space celebrating Kathmandu's art and history.",
        image: "images/destinations/",
        featured: false
    },
    {
        id: 15,
        name: "Shivapuri Nagarjun National Park",
        category: "Nature",
        tags: ["Nature","Hiking"],
        location: "Northern Kathmandu",
        rating: 5,
        description: "Forested park with hiking trails and valley views.",
        image: "images/destinations/Shivapuri Nagarjun NP.webp",
        featured: true
    },
    {
        id: 16,
        name: "Sundarijal",
        category: "Nature",
        tags: ["Nature","Hiking"],
        location: "Gokarneshwar",
        rating: 5,
        description: "Scenic escape with waterfalls, streams and trails.",
        image: "images/destinations/",
        featured: false
    },
    {
        id: 17,
        name: "Gokarna Forest",
        category: "Nature",
        tags: ["Nature"],
        location: "Gokarna",
        rating: 4,
        description: "Quiet woodland perfect for walks and cycling.",
        image: "images/destinations/",
        featured: false
    },
    {
        id: 18,
        name: "Taudaha Lake",
        category: "Nature",
        tags: ["Nature","Park"],
        location: "Kirtipur",
        rating: 4,
        description: "Peaceful lake popular for nature and birdwatching.",
        image: "images/destinations/",
        featured: false
    },
    {
        id: 19,
        name: "Raniban",
        category: "Nature",
        tags: ["Nature","Hiking"],
        location: "Nagarjun",
        rating: 4,
        description: "Forested hillside with peaceful hiking trails.",
        image: "images/destinations/",
        featured: false
    },
    {
        id: 20,
        name: "Shankha Park",
        category: "Park",
        tags: ["Park"],
        location: "Maharajgunj",
        rating: 4,
        description: "Spacious green park for walks and relaxation.",
        image: "images/destinations/",
        featured: false
    },
    {
        id: 21,
        name: "Thamel",
        category: "Street",
        tags: ["Streets","Market","Shopping"],
        location: "Thamel, Kathmandu",
        rating: 5,
        description: "Vibrant district filled with stops, food and nightlife.",
        image: "images/destinations/",
        featured: false
    },
    {
        id: 22,
        name: "Freak Street (Jhochhen)",
        category: "Street",
        tags: ["Streets","Heritage","Market"],
        location: "Basantapur",
        rating: 5,
        description: "Historic street known for hippie-era legacy.",
        image: "images/destinations/",
        featured: false
    },
    {
        id: 23,
        name: "Indra Chowk",
        category: "Street",
        tags: ["Streets","Market"],
        location: "Old Kathmandu",
        rating: 5,
        description: "Lively historic square filled with shops and temples.",
        image: "images/destinations/",
        featured: false
    },
    {
        id: 24,
        name: "Kirtipur Old Town",
        category: "Heritage",
        tags: ["Heritage"],
        location: "Kirtipur",
        rating: 5,
        description: "Historic Newari town with temples and brick streets.",
        image: "images/destinations/",
        featured: false
    },
    {
        id: 25,
        name: "Kaiser Café",
        category: "Café",
        tags: ["Café","Garden","Museum"],
        location: "Kaiser Mahal",
        rating: 4,
        description: "Relaxed café beside the Garden of Dreams.",
        image: "images/destinations/",
        featured: false
    },
    {
        id: 26,
        name: "Patan Durbar Square",
        category: "Heritage",
        tags: ["Heritage","Culture"],
        location: "Patan, Lalitpur",
        rating: 5,
        description: "Historic royal square filled with Newari architecture and temples.",
        image: "images/destinations/Patan DS.jpg",
        featured: true
    },
    {
        id: 27,
        name: "Golden Temple",
        category: "Religious",
        tags: ["Religious","Heritage"],
        location: "Patan, Lalitpur",
        rating: 5,
        description: "Beautiful Buddhist monastery known for its golden details.",
        image: "images/destinations/",
        featured: false
    },
    {
        id: 28,
        name: "Mahaboudha Temple",
        category: "Religious",
        tags: ["Religious"],
        location: "Patan, Lalitpur",
        rating: 4,
        description: "Unique Buddhist temple inspired by Bodh Gaya's Mahabodhi Temple.",
        image: "images/destinations/",
        featured: false
    },
    {
        id: 29,
        name: "Bhaktapur Durbar Square",
        category: "Heritage",
        tags: ["Culture","Heritage"],
        location: "Bhaktapur",
        rating: 5,
        description: "Magnificent medieval square filled with palaces and temples.",
        image: "images/destinations/Bhaktapur DS.jpg",
        featured: true
    },
    {
        id: 30,
        name: "Nyatapola Temple",
        category: "Religious",
        tags: ["Religious","Heritage"],
        location: "Taumadhi, Bhaktapur",
        rating: 5,
        description: "Nepal's tallest pagoda temple rising above Taumadhi Square.",
        image: "images/destinations/",
        featured: false
    },
    {
        id: 31,
        name: "Pottery Square",
        category: "Heritage",
        tags: ["Heritage","Culture"],
        location: "Bhaktapur",
        rating: 5,
        description: "Traditional square where local potters shape clay by hand.",
        image: "images/destinations/",
        featured: false
    },
    {
        id: 32,
        name: "Dattatreya Square",
        category: "Heritage",
        tags: ["Religious","Heritage","Culture"],
        location: "Bhaktapur",
        rating: 5,
        description: "Historic square surrounded by temples and traditional Newari buildings.",
        image: "images/destinations/",
        featured: false
    },
    {
        id: 33,
        name: "Patan Museum",
        category: "Museum",
        tags: ["Museum","Heritage","Art"],
        location: "Patan Durbar Square, Lalitpur",
        rating: 5,
        description: "Museum showcasing Nepal's traditional art and religious heritage.",
        image: "images/destinations/",
        featured: false
    },
    {
        id: 34,
        name: "Bhaktapur National Art Gallery",
        category: "Museum",
        tags: ["Museum","Art"],
        location: "Bhaktapur Durbar Square",
        rating: 4,
        description: "Gallery displaying traditional Nepalese paintings and artworks.",
        image: "images/destinations/",
        featured: false
    },
    {
        id: 35,
        name: "Labim Mall",
        category: "Shopping",
        tags: ["Shopping"],
        location: "Pulchowk, Lalitpur",
        rating: 4,
        description: "Modern shopping mall with stores, restaurants and a cinema.",
        image: "images/destinations/Labim Mall.webp",
        featured: true
    },
    {
        id: 36,
        name: "Civil Mall",
        category: "Shopping",
        tags: ["Shopping"],
        location: "Sundhara, Kathmandu",
        rating: 4,
        description: "Large shopping and entertainment complex in central Kathmandu.",
        image: "images/destinations/",
        featured: false
    },
    {
        id: 37,
        name: "City Centre",
        category: "Shopping",
        tags: ["Shopping"],
        location: "Kamal Pokhari, Kathmandu",
        rating: 4,
        description: "Central mall combining shopping, food and entertainment.",
        image: "images/destinations/",
        featured: false
    },
    {
        id: 38,
        name: "Bishal Bazaar",
        category: "Shopping",
        tags: ["Shopping","Market"],
        location: "New Road, Kathmandu",
        rating: 4,
        description: "Historic shopping center in the heart of New Road.",
        image: "images/destinations/",
        featured: false
    },
    {
        id: 39,
        name: "Ranjana Trade Center",
        category: "Shopping",
        tags: ["Shopping"],
        location: "New Road, Kathmandu",
        rating: 4,
        description: "Busy shopping center surrounded by Kathmandu's commercial district.",
        image: "images/destinations/",
        featured: false
    },
    {
        id: 40,
        name: "Bhat-Bhateni Supermarket",
        category: "Shopping",
        tags: ["Shopping"],
        location: "10+ outlets inside Kathmandu Valley",
        rating: 4,
        description: "Popular department store offering a wide range of products.",
        image: "images/destinations/",
        featured: false
    },

];

function createStars(rating) {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += "&starf;";
        }
        else {
            stars += "&star;";
        }
    }
    return stars;
}

function createDestinationCard(destination) {
    const card = document.createElement("div");
    card.classList.add("destination-card");
    card.innerHTML = `
        <div class="destination-img">
            <img src="${destination.image}" alt="${destination.name}">
            <div class="destination-settings">
                <div class="destination-category category-text">${destination.category}</div>
                <div class="add-to-favorites">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" class="lucide lucide-heart-plus-icon lucide-heart-plus">
                        <path
                        d="m14.479 19.374-.971.939a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.219 1.49" />
                        <path d="M15 15h6" />
                        <path d="M18 12v6" />
                    </svg>
                </div>
            </div>
        </div>
        <div class="destination-details">
            <p class="destination-location category-text">📍 ${destination.location}</p>
            <div class="destination-ratings">${createStars(destination.rating)}</div>
            <h5 class="destination-name heading-5">${destination.name}</h5>
            <p class="destination-description body-small">${destination.description}</p>
            <button class="view-details-btn outline-btn">View Details</button>
        </div>
    `;
    return card;
}

const featuredDestinationsContainer = document.getElementById("featured-destinations-container");

destinations.forEach(destination => {
    if (destination.featured) {
        const card = createDestinationCard(destination);
        featuredDestinationsContainer.appendChild(card);
    }
})