const destinations = [
    {
        name: "Boudhanath Stupa",
        category: "Religious / Heritage",
        location: "Boudha, Kathmandu",
        rating: 4,
        description: "A sacred landmark and symbol of Kathmandu's heritage.",
        image: "images/destinations/Boudhanath Stupa.jpg",
        featured: true
    },
    {
        name: "Basantapur Durbar Square",
        category: "Heritage",
        location: "Newroad, Kathmandu",
        rating: 5,
        description: "A sacred landmark and symbol of Kathmandu's heritage.",
        image: "images/destinations/Basantapur DS.jpg",
        featured: true
    },
    {
        name: "Narayanhiti Palace",
        category: "Heritage",
        location: "Durbarmarg, Kathmandu",
        rating: 5,
        description: "The former official residence of the Royal family.",
        image: "images/destinations/Basantapur DS.jpg",
        featured: true
    },
    {
        name: "Swayambhunath Temple",
        category: "Religious",
        location: "Swayambhu, Kathmandu",
        rating: 4,
        description: "A sacred landmark and symbol of Kathmandu's heritage.",
        image: "images/destinations/Swayambhunath.jpg",
        featured: false
    }
];

function createStars(rating) {
    let stars = "";
    for(let i=1; i<=5; i++){
        if(i<=rating){
            stars += "&starf;";
        }
        else{
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
            <div class="destination-location category-text">📍 ${destination.location}</div>
            <div class="destination-ratings">${createStars(destination.rating)}</div>
            <div class="destination-name heading-5">${destination.name}</div>
            <div class="destination-description body-small">${destination.description}</div>
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