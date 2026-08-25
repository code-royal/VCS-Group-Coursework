const destinations = [
    {
        id: 1,
        name: "Garden of Dreams",
        category: "Nature",
        tags: ["park", "heritage", "nature"],
        location: "Thamel, Kathmandu",
        rating: 5,
        description: "Peaceful neo-classical garden in central Kathmandu.",
        image: "images/destinations/Garden of Dreams.jpg",
        featured: false,
        map_location: "https://maps.app.goo.gl/68qXqZnPWh26QQKs8"
    },
    {
        id: 2,
        name: "Sundarijal",
        category: "Nature",
        tags: ["nature"],
        location: "Gokarneshwar",
        rating: 5,
        description: "Scenic escape with waterfalls, streams and trails.",
        image: "images/destinations/Sundarijal.webp",
        featured: false,
        map_location: "https://maps.app.goo.gl/UV9aBWDmwLiCf5M56"
    },
    {
        id: 3,
        name: "Kaiser Café",
        category: "Café",
        tags: ["café"],
        location: "Kaiser Mahal",
        rating: 4,
        description: "Relaxed café beside the Garden of Dreams.",
        image: "images/destinations/Kaiser Cafe.webp",
        featured: false,
        map_location: "https://maps.app.goo.gl/g1Lb2CnJJ2VyKT3WA"
    },
    {
        id: 4,
        name: "Kumari Ghar",
        category: "Heritage",
        tags: ["heritage"],
        location: "Basantapur, Kathmandu",
        rating: 5,
        description: "Ornately carved home of Kathmandu's Living Goddess.",
        image: "images/destinations/Kumari Ghar.webp",
        map_location: "https://maps.app.goo.gl/KsQjN7qtt8K9UYg78"
    },
    {
        id: 5,
        name: "Labim Mall",
        category: "Shopping",
        tags: ["shopping"],
        location: "Pulchowk, Lalitpur",
        rating: 4,
        description: "Modern shopping mall with stores, restaurants and a cinema.",
        image: "images/destinations/Labim Mall.webp",
        featured: true,
        map_location: "https://maps.app.goo.gl/DgKBa7vJhCmtUVHz6"
    },
    {
        id: 6,
        name: "Bhaktapur National Art Gallery",
        category: "Heritage",
        tags: ["heritage"],
        location: "Bhaktapur Durbar Square",
        rating: 4,
        description: "Gallery displaying traditional Nepalese paintings and artworks.",
        image: "images/destinations/Bhaktapur National Art Gallery.webp",
        featured: false,
        map_location: "https://maps.app.goo.gl/ZrM4S1Cn9QwwRcwc8"
    },
    {
        id: 7,
        name: "Bhat-Bhateni Supermarket",
        category: "Shopping",
        tags: ["shopping"],
        location: "10+ outlets inside Kathmandu Valley",
        rating: 4,
        description: "Popular department store offering a wide range of products.",
        image: "images/destinations/Bhatbhateni.webp",
        featured: false,
        map_location: "https://maps.app.goo.gl/eDmhER3vzykQFMse9"
    },
    {
        id: 8,
        name: "Gokarna Forest",
        category: "Nature",
        tags: ["nature"],
        location: "Gokarna",
        rating: 4,
        description: "Quiet woodland perfect for walks and cycling.",
        image: "images/destinations/Gokarna.webp",
        featured: false,
        map_location: "https://maps.app.goo.gl/aDzNXWGiGph7kaQ57"
    },
    {
        id: 9,
        name: "Budhanilkantha Temple",
        category: "Religious",
        tags: ["religious"],
        location: "Budhanilkantha, Kathmandu",
        rating: 4,
        description: "Home to a famous reclinign Vishnu statue.",
        image: "images/destinations/Budhanilkantha.webp",
        featured: false,
        map_location: "https://maps.app.goo.gl/euAUq9o8ow3X3YSt9"
    },
    {
        id: 10,
        name: "Dattatreya Square",
        category: "Heritage",
        tags: ["religious", "heritage"],
        location: "Bhaktapur",
        rating: 5,
        description: "Historic square surrounded by temples and traditional Newari buildings.",
        image: "images/destinations/Dattatreya.webp",
        featured: false,
        map_location: "https://maps.app.goo.gl/EU2EALpVvkgMHHPYA"
    },
    {
        id: 11,
        name: "Asan Bazaar",
        category: "Market",
        tags: ["market", "heritage"],
        location: "Asan, Kathmandu",
        rating: 5,
        description: "Bustling historic market full of local life.",
        image: "images/destinations/Asan.webp",
        featured: false,
        map_location: "https://maps.app.goo.gl/Z4hXR6EFtvXf9FCJ8"
    },
    {
        id: 12,
        name: "Thamel",
        category: "Market",
        tags: ["market", "shopping"],
        location: "Thamel, Kathmandu",
        rating: 5,
        description: "Vibrant district filled with stops, food and nightlife.",
        image: "images/destinations/Thamel.webp",
        featured: false,
        map_location: "https://maps.app.goo.gl/iAt7xJYcbUgiMnDr7"
    },
    {
        id: 13,
        name: "Ranjana Trade Center",
        category: "Shopping",
        tags: ["shopping"],
        location: "New Road, Kathmandu",
        rating: 4,
        description: "Busy shopping center surrounded by Kathmandu's commercial district.",
        image: "images/destinations/",
        featured: false,
        map_location: "https://maps.app.goo.gl/14vQX2FY1jaTXhGB6"
    },
    {
        id: 14,
        name: "Shivapuri Nagarjun National Park",
        category: "Nature",
        tags: ["nature"],
        location: "Northern Kathmandu",
        rating: 5,
        description: "Forested park with hiking trails and valley views.",
        image: "images/destinations/Shivapuri Nagarjun NP.webp",
        featured: true,
        map_location: "https://maps.app.goo.gl/ADzLYhAYVFLYVXdN8"
    },
    {
        id: 15,
        name: "Boudhanath Stupa",
        category: "Religious",
        tags: ["religious"],
        location: "Boudha, Kathmandu",
        rating: 5,
        description: "One of the world's largest Buddhist stupas.",
        image: "images/destinations/Boudhanath Stupa.jpg",
        featured: true,
        map_location: "https://maps.app.goo.gl/C3zwFnU5AvGF7TKG7"
    },
    {
        id: 16,
        name: "Patan Durbar Square",
        category: "Heritage",
        tags: ["heritage"],
        location: "Patan, Lalitpur",
        rating: 5,
        description: "Historic royal square filled with Newari architecture and temples.",
        image: "images/destinations/Patan DS.jpg",
        featured: true,
        map_location: "https://maps.app.goo.gl/QkqkG26vELqJdvFk8"
    },
    {
        id: 17,
        name: "Patan Museum",
        category: "Heritage",
        tags: ["heritage"],
        location: "Patan Durbar Square, Lalitpur",
        rating: 5,
        description: "Museum showcasing Nepal's traditional art and religious heritage.",
        image: "images/destinations/Patan Museum.webp",
        featured: false,
        map_location: "https://maps.app.goo.gl/yVPJXwxGTwoiwUHx6"
    },
    {
        id: 18,
        name: "Bishal Bazaar",
        category: "Shopping",
        tags: ["shopping", "market"],
        location: "New Road, Kathmandu",
        rating: 4,
        description: "Historic shopping center in the heart of New Road.",
        image: "images/destinations/Bishal Bazaar.webp",
        featured: false,
        map_location: "https://maps.app.goo.gl/QasFiUg9ntPLaMYE8"
    },
    {
        id: 19,
        name: "Mahaboudha Temple",
        category: "Religious",
        tags: ["religious"],
        location: "Patan, Lalitpur",
        rating: 4,
        description: "Unique Buddhist temple inspired by Bodh Gaya's Mahabodhi Temple.",
        image: "images/destinations/Mahaboudha.webp",
        featured: false,
        map_location: "https://maps.app.goo.gl/k8JNJ7KTKedM5buH6"
    },
    {
        id: 20,
        name: "Taragaon Next",
        category: "Heritage",
        tags: ["heritage"],
        location: "Boudha",
        rating: 4,
        description: "Cultural space celebrating Kathmandu's art and history.",
        image: "images/destinations/Taragaon Next.webp",
        featured: false,
        map_location: "https://maps.app.goo.gl/ZV1EwvJseTMNXGEM8"
    },
    {
        id: 21,
        name: "Golden Temple",
        category: "Religious",
        tags: ["religious", "heritage"],
        location: "Patan, Lalitpur",
        rating: 5,
        description: "Beautiful Buddhist monastery known for its golden details.",
        image: "images/destinations/Golden Temple.webp",
        featured: false,
        map_location: "https://maps.app.goo.gl/rvihFJS39pBR4jGs7"
    },
    {
        id: 22,
        name: "Pottery Square",
        category: "Heritage",
        tags: ["heritage"],
        location: "Bhaktapur",
        rating: 5,
        description: "Traditional square where local potters shape clay by hand.",
        image: "images/destinations/Pottery Square.webp",
        featured: false,
        map_location: "https://maps.app.goo.gl/dLPRJSiwBkcZvfus8"
    },
    {
        id: 23,
        name: "Kumbeshwar Temple",
        category: "Religious",
        tags: ["religious"],
        location: "Kumbeshwar, Patan",
        rating: 4,
        description: "Historic temple and one of Patan's oldest monuments.",
        image: "images/destinations/Kumbeshwar Temple.webp",
        featured: false,
        map_location: "https://maps.app.goo.gl/y7g3fBaxBiE5bFds7"
    },
    {
        id: 24,
        name: "Kirtipur Old Town",
        category: "Heritage",
        tags: ["heritage"],
        location: "Kirtipur",
        rating: 5,
        description: "Historic Newari town with temples and brick streets.",
        image: "images/destinations/Kirtipur.webp",
        featured: false,
        map_location: "https://maps.app.goo.gl/ZTXSs3WiTdUCtoL39"
    },
    {
        id: 25,
        name: "Swayambhunath Stupa",
        category: "Religious",
        tags: ["religious"],
        location: "Swayambhu, Kathmandu",
        rating: 5,
        description: "Ancient stupa with panoramic valley views.",
        image: "images/destinations/Swayambhunath.jpg",
        featured: false,
        map_location: "https://maps.app.goo.gl/tqd5Vg5tSC1nrWh49"
    },
    {
        id: 26,
        name: "Hanuman Dhoka Palace",
        category: "Heritage",
        tags: ["heritage"],
        location: "Basantapur, Kathmandu",
        rating: 5,
        description: "Former royal palace in historic Kathmandu",
        image: "images/destinations/Hanuman Dhoka Palace.webp",
        featured: false,
        map_location: "https://maps.app.goo.gl/ne8uY5ez8yMW7ZFSA"
    },
    {
        id: 27,
        name: "Raniban",
        category: "Nature",
        tags: ["nature"],
        location: "Nagarjun",
        rating: 4,
        description: "Forested hillside with peaceful hiking trails.",
        image: "images/destinations/",
        featured: false,
        map_location: "https://www.google.com/maps/search/raniban+kathmandu/@27.7336225,85.2759777,2821m/data=!3m2!1e3!4b1?entry=ttu&g_ep=EgoyMDI2MDgxMC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        id: 28,
        name: "City Centre",
        category: "Shopping",
        tags: ["shopping"],
        location: "Kamal Pokhari, Kathmandu",
        rating: 4,
        description: "Central mall combining shopping, food and entertainment.",
        image: "images/destinations/City Centre.webp",
        featured: false,
        map_location: "https://maps.app.goo.gl/QLWVstcstbqh3Kac7"
    },
    {
        id: 29,
        name: "Civil Mall",
        category: "Shopping",
        tags: ["shopping"],
        location: "Sundhara, Kathmandu",
        rating: 4,
        description: "Large shopping and entertainment complex in central Kathmandu.",
        image: "images/destinations/Civil Mall.webp",
        featured: false,
        map_location: "https://maps.app.goo.gl/5663DaykH4SdnM8Z6"
    },
    {
        id: 30,
        name: "Nyatapola Temple",
        category: "Religious",
        tags: ["religious", "heritage"],
        location: "Taumadhi, Bhaktapur",
        rating: 5,
        description: "Nepal's tallest pagoda temple rising above Taumadhi Square.",
        image: "images/destinations/Nyatapola Temple.webp",
        featured: false,
        map_location: "https://maps.app.goo.gl/ehkGHt9HTuVSe5z56"
    },
    {
        id: 31,
        name: "Kapan Monastery",
        category: "Religious",
        tags: ["religious"],
        location: "Kapan, Kathmandu",
        rating: 5,
        description: "Peaceful Buddhist monastery overlooking the valley.",
        image: "images/destinations/Kapan Monastery.webp",
        featured: false,
        map_location: "https://maps.app.goo.gl/t2KyKQeDRykPotbJA"
    },
    {
        id: 32,
        name: "Indra Chowk",
        category: "Market",
        tags: ["market"],
        location: "Old Kathmandu",
        rating: 5,
        description: "Lively historic square filled with shops and temples.",
        image: "images/destinations/Indra Chowk.webp",
        featured: false,
        map_location: "https://maps.app.goo.gl/WNsfKHSfnB8gJU5L8"
    },
    {
        id: 33,
        name: "Bhaktapur Durbar Square",
        category: "Heritage",
        tags: ["heritage"],
        location: "Bhaktapur",
        rating: 5,
        description: "Magnificent medieval square filled with palaces and temples.",
        image: "images/destinations/Bhaktapur DS.jpg",
        featured: true,
        map_location: "https://maps.app.goo.gl/354Zk1Mr4TXcPVjJ6"
    },
    {
        id: 34,
        name: "Dakshinkali Temple",
        category: "Religious",
        tags: ["religious"],
        location: "Pharping",
        rating: 4,
        description: "Sacred Hindu temple surrounded by forested hills.",
        image: "images/destinations/Dakshinkali Temple.webp",
        featured: false,
        map_location: "https://maps.app.goo.gl/fh84THvwKPkjXR6b8"
    },
    {
        id: 35,
        name: "Taudaha Lake",
        category: "Nature",
        tags: ["nature", "park"],
        location: "Kirtipur",
        rating: 4,
        description: "Peaceful lake popular for nature and birdwatching.",
        image: "images/destinations/Taudaha Lake.webp",
        featured: false,
        map_location: "https://maps.app.goo.gl/hdTzDznLA2dj8JP8A"
    },
    {
        id: 36,
        name: "Shankha Park",
        category: "Park",
        tags: ["park"],
        location: "Maharajgunj",
        rating: 4,
        description: "Spacious green park for walks and relaxation.",
        image: "images/destinations/Shankha Park.webp",
        featured: false,
        map_location: "https://maps.app.goo.gl/fs74EQngx5TNXrwH7"
    },
    {
        id: 37,
        name: "Narayanhiti Palace Museum",
        category: "Heritage",
        tags: ["heritage"],
        location: "Durbar Marg, Kathmandu",
        rating: 4,
        description: "Former royal palace turned history museum.",
        image: "images/destinations/Narayanhiti Palace.jpg",
        featured: false,
        map_location: "https://maps.app.goo.gl/LVP6Gy4PeRFr1r676"
    },
    {
        id: 38,
        name: "Freak Street (Jhochhen)",
        category: "Market",
        tags: ["heritage", "market"],
        location: "Basantapur",
        rating: 5,
        description: "Historic street known for hippie-era legacy.",
        image: "images/destinations/Freak Street.webp",
        featured: false,
        map_location: "https://maps.app.goo.gl/Kmi3ZoYUj7wzKaaB8"
    },
    {
        id: 39,
        name: "Kathmandu Durbar Square",
        category: "Heritage",
        tags: ["heritage"],
        location: "Basantapur, Kathmandu",
        rating: 5,
        description: "Historic square filled with temples and palaces.",
        image: "images/destinations/Basantapur DS.jpg",
        featured: true,
        map_location: "https://maps.app.goo.gl/6rQVydGZYMpkCFye8"
    },
    {
        id: 40,
        name: "Pashupatinath Temple",
        category: "Religious",
        tags: ["religious"],
        location: "Gaushala, Kathmandu",
        rating: 5,
        description: "Nepal's most sacred Hindu temple complex.",
        image: "images/destinations/Pashupatinath.jpg",
        featured: false,
        map_location: "https://maps.app.goo.gl/J6ZAxtoTPEMJdJSr9"
    }
];

const destinationDetails = {

    1: {
        overview: "A restored neo-classical garden hidden in the heart of Thamel, Garden of Dreams offers a quiet escape from Kathmandu's busy streets. Built in the 1920s, it features pavilions, fountains, ponds and landscaped lawns. Its calm atmosphere makes it ideal for a slow walk, coffee or a relaxed afternoon.",
        entry_fee: "Foreigners: NPR 400; Nepali citizens: NPR 150",
        crowds: "Moderate; quieter in the late afternoon",
        time_to_visit: "Late afternoon, around 3–5 PM",
        opening_hours: "9:00 AM – 9:00 PM daily"
    },

    2: {
        overview: "Sundarijal is a popular nature escape at the northeastern edge of Kathmandu Valley, known for its clear streams, small waterfalls and forested trails. The area is also an important gateway into Shivapuri Nagarjun National Park. It is a good starting point for short walks as well as longer hikes toward Mulkharka and Chisapani.",
        entry_fee: "Foreigners: NPR 1,000; Nepali citizens: NPR 100 (Shivapuri Nagarjun National Park entry)",
        crowds: "Moderate; busy on weekends",
        time_to_visit: "Early morning, especially October–May",
        opening_hours: "Daylight hours; park access/checkpoint hours may vary"
    },

    3: {
        overview: "Kaiser Café sits within the historic Garden of Dreams beside its fountains, pavilions and landscaped courtyards. It combines a relaxed café experience with one of Kathmandu's most atmospheric garden settings. It is particularly suited to breakfast, coffee or a leisurely meal away from the noise of Thamel.",
        entry_fee: "Garden admission required: Foreigners NPR 400; Nepali citizens NPR 150. Food and drinks are separate.",
        crowds: "Low–moderate; busiest around lunch",
        time_to_visit: "Morning or late afternoon",
        opening_hours: "Approx. 9:00 AM – 6:00 PM"
    },

    4: {
        overview: "Kumari Ghar is the ornate courtyard residence of Kathmandu's Living Goddess, the Kumari. Its richly carved windows and brick façade are among the finest examples of traditional Newari craftsmanship in Kathmandu Durbar Square. Visitors can explore the courtyard and may occasionally see the Kumari at her window during designated moments.",
        entry_fee: "Included in Kathmandu Durbar Square: Foreigners NPR 1,000; Nepali citizens free",
        crowds: "Moderate–high; higher when visitors gather for a Kumari appearance",
        time_to_visit: "Morning, around 10–11 AM",
        opening_hours: "Approx. 9:00 AM – 5:00 PM"
    },

    5: {
        overview: "Labim Mall is a modern shopping and lifestyle destination in Pulchowk, combining retail stores, restaurants, cafés and entertainment under one roof. Its contemporary design makes it a convenient contrast to Lalitpur's historic streets and courtyards. It works well for shopping, dining or an easy indoor break.",
        entry_fee: "Free entry",
        crowds: "Moderate; busier on evenings and weekends",
        time_to_visit: "Late afternoon to evening",
        opening_hours: "Approx. 10:00 AM – 9:00 PM daily"
    },

    6: {
        overview: "The Bhaktapur National Art Gallery occupies part of the historic palace complex at Bhaktapur Durbar Square. Its collection includes traditional paintings, manuscripts, thangkas and religious artworks that reflect Nepal's artistic heritage. The gallery is a useful stop for understanding the visual culture behind Bhaktapur's temples and architecture.",
        entry_fee: "Foreigners: NPR 150; Nepali citizens: NPR 25 (NPR 10 for students)",
        crowds: "Low–moderate",
        time_to_visit: "Late morning or early afternoon",
        opening_hours: "Approx. 10:00 AM – 5:00 PM; closed on its weekly closing day/public holidays"
    },

    7: {
        overview: "Bhat-Bhateni is Nepal's best-known supermarket and department-store chain, with multiple branches across Kathmandu Valley. It combines groceries, clothing, electronics, household goods and everyday shopping in one place. For visitors, it is useful for seeing a practical side of everyday urban life and picking up local products.",
        entry_fee: "Free entry",
        crowds: "High at peak shopping hours; moderate otherwise",
        time_to_visit: "Morning or early afternoon for fewer crowds",
        opening_hours: "8:00 AM – 9:00 PM daily"
    },

    8: {
        overview: "Gokarna Forest is a former royal hunting ground that has become one of the Valley's notable pockets of woodland and wildlife. The forest is known for spotted deer, peacocks, birds and quiet walking trails around the resort and golf course. Early visits offer the best chance of seeing wildlife before the area becomes busier.",
        entry_fee: "Day-visitor access via Gokarna Forest Resort; approx. NPR 500–800, depending on access/activity",
        crowds: "Low–moderate",
        time_to_visit: "Early morning, around 6–9 AM",
        opening_hours: "Approx. 6:00 AM – 6:00 PM"
    },

    9: {
        overview: "Budhanilkantha Temple is famous for its enormous reclining image of Lord Vishnu resting on a serpent in a water-filled stone pool. The Licchavi-era sculpture is one of the Kathmandu Valley's most striking religious artworks. The temple remains an active place of worship and is especially atmospheric during morning rituals.",
        entry_fee: "Free for Nepali citizens; foreigners generally free for the temple grounds, though access restrictions apply",
        crowds: "Moderate; higher during religious festivals",
        time_to_visit: "Early morning, around 6–8 AM",
        opening_hours: "Approx. 5:00 AM – 6:00 PM"
    },

    10: {
        overview: "Dattatreya Square is the oldest of Bhaktapur's historic squares and a quieter alternative to the main Durbar Square. The square is centered on the three-headed Dattatreya Temple and surrounded by traditional Newari buildings, museums and carved details. Its side streets and courtyards offer a more intimate heritage experience.",
        entry_fee: "Included in Bhaktapur city ticket: Foreigners NPR 1,800; Nepali citizens free",
        crowds: "Low–moderate",
        time_to_visit: "Morning, around 7–9 AM",
        opening_hours: "Square accessible throughout the day; temple/museum hours vary"
    },

    11: {
        overview: "Asan Bazaar is one of old Kathmandu's busiest traditional markets, where narrow streets converge around temples, spice shops, food stalls and everyday traders. It has been an important commercial crossroads for generations. Visiting Asan gives a much more local view of Kathmandu than the city's purpose-built tourist districts.",
        entry_fee: "Free entry",
        crowds: "High; especially during market hours",
        time_to_visit: "Early morning for market activity with slightly lighter crowds",
        opening_hours: "Market generally 6:00 AM – 9:00 PM; square accessible all day"
    },

    12: {
        overview: "Thamel is Kathmandu's best-known tourist district, packed with hotels, restaurants, cafés, trekking shops, souvenir stores and nightlife. Its narrow streets mix travelers with local businesses and everyday city traffic. It is one of the easiest places to experience Kathmandu's food, shopping and evening atmosphere in one walk.",
        entry_fee: "Free entry",
        crowds: "High; particularly late afternoon and evening",
        time_to_visit: "Late afternoon into evening",
        opening_hours: "District accessible all day; most businesses roughly 9:00 AM–9:00 PM or later"
    },

    13: {
        overview: "Ranjana Trade Center is a busy commercial shopping complex in the New Road area, surrounded by one of Kathmandu's most active retail districts. It is geared more toward everyday shopping and local commerce than sightseeing. The surrounding New Road streets add much of the experience, with shops, electronics and dense pedestrian traffic.",
        entry_fee: "Free entry",
        crowds: "High during business and shopping hours",
        time_to_visit: "Late morning or early afternoon on weekdays",
        opening_hours: "Generally around 10:00 AM – 7:00/8:00 PM; individual shops vary"
    },

    14: {
        overview: "Shivapuri Nagarjun National Park protects a large forested belt on the northern edge of Kathmandu Valley. Its trails pass through pine, oak and mixed woodland and are popular for hiking, birdwatching and valley viewpoints. The park also provides habitat for a wide range of mammals, birds and butterflies.",
        entry_fee: "Foreigners: NPR 1,000; Nepali citizens: NPR 100",
        crowds: "Moderate; high on weekends and holidays",
        time_to_visit: "Early morning; September–May is the best season",
        opening_hours: "Daylight hours; ticket counters generally open from around 7:00 AM"
    },

    15: {
        overview: "Boudhanath Stupa is one of the world's largest spherical stupas and one of Kathmandu's most important Tibetan Buddhist pilgrimage sites. Prayer flags, monasteries, incense and pilgrims performing clockwise kora surround the enormous white dome. Rooftop cafés around the stupa provide a memorable way to observe the rhythm of the square.",
        entry_fee: "Foreigners: NPR 400; Nepali citizens free",
        crowds: "High; quieter early morning",
        time_to_visit: "Early morning or around sunset",
        opening_hours: "Stupa area accessible 24 hours; ticketing operates during daytime"
    },

    16: {
        overview: "Patan Durbar Square is the historic royal heart of Lalitpur, surrounded by extraordinary Newari temples, courtyards and palace architecture. Krishna Mandir, the Golden Temple area and the former royal palace make it one of the Valley's richest concentrations of traditional art. The square is especially beautiful when the afternoon light reaches the carved façades.",
        entry_fee: "Foreigners: NPR 1,000; Nepali citizens free for the square",
        crowds: "Moderate–high; busiest around midday",
        time_to_visit: "Early morning or late afternoon",
        opening_hours: "Square accessible throughout the day; museum hours vary"
    },

    17: {
        overview: "Patan Museum occupies a beautifully restored section of the former royal palace complex and is one of Nepal's finest museums of traditional art. Its galleries focus on Hindu and Buddhist sculpture, ritual objects, metalwork and the sacred-art traditions of the Kathmandu Valley. The courtyard and palace architecture are part of the experience.",
        entry_fee: "Foreigners: NPR 1,000; Nepali citizens: NPR 30",
        crowds: "Moderate",
        time_to_visit: "Morning or early afternoon",
        opening_hours: "8:00 AM – 6:30 PM; winter hours may be shorter"
    },

    18: {
        overview: "Bishal Bazaar is a long-established shopping center in the heart of New Road, one of Kathmandu's busiest commercial districts. Its shops focus on everyday retail, clothing, electronics and local commerce rather than tourism. The surrounding streets are often more interesting than the building itself for visitors wanting to experience central Kathmandu's shopping culture.",
        entry_fee: "Free entry",
        crowds: "High during shopping hours",
        time_to_visit: "Morning to early afternoon on weekdays",
        opening_hours: "Generally around 10:00 AM – 7:00/8:00 PM; individual shops vary"
    },

    19: {
        overview: "Mahaboudha Temple is a remarkable Buddhist monument in Patan covered with thousands of terracotta Buddha images. Inspired by the Mahabodhi Temple at Bodh Gaya, its intricate brickwork makes it one of Lalitpur's most distinctive religious structures. The compact courtyard offers a quiet contrast to the nearby bustle of Patan Durbar Square.",
        entry_fee: "Small local maintenance/donation fee may apply; no standard official foreign/Nepali tariff published",
        crowds: "Low",
        time_to_visit: "Morning or late afternoon",
        opening_hours: "Generally daytime; around 6:00 AM – 7:00 PM"
    },

    20: {
        overview: "Taragaon Next is a cultural and architectural space near Boudha dedicated to documenting and presenting Kathmandu Valley's modern architectural history. Its distinctive buildings host exhibitions, workshops, talks and contemporary cultural programs. It is a quieter, more design-focused stop that pairs naturally with Boudhanath.",
        entry_fee: "Generally free; some special exhibitions/events may charge a fee",
        crowds: "Low–moderate",
        time_to_visit: "Late morning or afternoon",
        opening_hours: "Typically 10:00 AM – 5:00/5:30 PM; exhibition/event schedules vary"
    },

    21: {
        overview: "The Golden Temple, formally Hiranya Varna Mahavihar, is a historic Newar Buddhist monastery tucked into the dense lanes of Patan. Its gilded details, guardian figures, courtyards and ritual spaces reveal the craftsmanship of the city's Buddhist tradition. It remains an active monastery, so visits are best made quietly and respectfully.",
        entry_fee: "Foreigners: NPR 100; Nepali citizens free",
        crowds: "Moderate; quieter early morning",
        time_to_visit: "Early morning or late afternoon",
        opening_hours: "Approx. 6:00 AM – 6:00 PM"
    },

    22: {
        overview: "Pottery Square is one of Bhaktapur's most distinctive living craft spaces, where traditional potters shape clay on wooden wheels and dry rows of vessels in the sun. The square remains a working neighborhood rather than a museum, making the experience feel authentic and hands-on. Morning is usually the best time to see artisans at work.",
        entry_fee: "Free entry to the square; included within the Bhaktapur heritage area for visitors entering through ticketed zones",
        crowds: "Moderate; generally calmer than Durbar Square",
        time_to_visit: "Morning, around 8–11 AM",
        opening_hours: "Square accessible during the day; workshops generally around 8:00 AM – 6:00 PM"
    },

    23: {
        overview: "Kumbeshwar Temple is one of Patan's oldest major temples and one of only two five-tiered pagodas in the Kathmandu Valley. Dedicated to Shiva, the complex also contains a sacred pond associated with Gosaikunda and attracts large numbers of pilgrims during Janai Purnima. Its carved timber architecture is best appreciated in the quiet of the morning.",
        entry_fee: "Free entry",
        crowds: "Low–moderate; very high during Janai Purnima",
        time_to_visit: "Early morning, around 6–8 AM",
        opening_hours: "5:00 AM – 8:00 PM daily"
    },

    24: {
        overview: "Kirtipur Old Town preserves one of the Valley's most atmospheric traditional Newar settlements, built along a ridge southwest of Kathmandu. Brick houses, temple squares, narrow lanes and historic shrines create a strong sense of an old hill town. It is ideal for slow walking, local food and exploring beyond the main tourist circuit.",
        entry_fee: "Free entry to the old town",
        crowds: "Low–moderate",
        time_to_visit: "Morning or late afternoon",
        opening_hours: "Old town accessible throughout the day"
    },

    25: {
        overview: "Swayambhunath is an ancient hilltop Buddhist complex crowned by a white stupa and famous for its Buddha eyes and resident monkeys. Prayer wheels, shrines and steep steps lead visitors through a layered religious landscape. The summit also provides one of the best panoramic views over Kathmandu Valley, especially around sunrise and sunset.",
        entry_fee: "Foreigners: NPR 200; Nepali citizens free",
        crowds: "High; quieter early morning",
        time_to_visit: "Early morning or sunset",
        opening_hours: "Generally open from early morning to evening; main complex accessible during daylight"
    },

    26: {
        overview: "Hanuman Dhoka Palace was the historic royal palace at the center of Kathmandu before the monarchy moved to Narayanhiti. Its courtyards, temples and palace buildings preserve layers of Malla and Shah-era history. The complex forms the core of Kathmandu Durbar Square and includes museums documenting Nepal's royal and architectural past.",
        entry_fee: "Included in Kathmandu Durbar Square: Foreigners NPR 1,000; Nepali citizens free for the square; museum access may follow separate rules",
        crowds: "Moderate–high",
        time_to_visit: "Early morning or late afternoon",
        opening_hours: "Square accessible 24 hours; museum/palace interiors have limited daytime hours"
    },

    27: {
        overview: "Raniban is a forested hillside area around Nagarjun, offering quieter trails and greenery close to Kathmandu. The woodland is suited to short hikes, nature walks and birdwatching rather than formal sightseeing. Its proximity to the Shivapuri Nagarjun area makes it a useful choice for visitors wanting a less commercial outdoor experience.",
        entry_fee: "If entering the Shivapuri Nagarjun National Park section: Foreigners NPR 1,000; Nepali citizens NPR 100",
        crowds: "Low–moderate",
        time_to_visit: "Early morning or late afternoon",
        opening_hours: "Daylight hours; access varies by trail/checkpoint"
    },

    28: {
        overview: "City Centre is a centrally located shopping and entertainment mall at Kamalpokhari, combining retail stores, restaurants, cafés and leisure activities. Its location makes it convenient for a quick break while exploring central Kathmandu. The mall is more about modern urban entertainment than cultural sightseeing.",
        entry_fee: "Free entry",
        crowds: "Moderate; busier evenings and weekends",
        time_to_visit: "Late afternoon to evening",
        opening_hours: "Approx. 10:00 AM – 9:00 PM"
    },

    29: {
        overview: "Civil Mall is a large shopping and entertainment complex in Sundhara, close to central Kathmandu's transport and commercial districts. It brings together retail stores, food outlets and QFX cinema facilities under one roof. It is a practical stop for shopping, movies or escaping the city's heat and traffic.",
        entry_fee: "Free entry",
        crowds: "Moderate–high; especially evenings and weekends",
        time_to_visit: "Late afternoon or evening",
        opening_hours: "Shopping: 10:00 AM – 8:00 PM; QFX cinema: approximately 7:00 AM – 11:00 PM"
    },

    30: {
        overview: "Nyatapola Temple rises five tiers above Taumadhi Square and is the tallest pagoda temple in Nepal. Its monumental staircase is guarded by pairs of increasingly powerful figures, creating one of Bhaktapur's most recognizable architectural scenes. The temple is dedicated to Siddhi Lakshmi and remains a major landmark of the old city.",
        entry_fee: "Included in Bhaktapur Durbar Square ticket: Foreigners NPR 1,800; Nepali citizens free",
        crowds: "High around midday; quieter early morning",
        time_to_visit: "Early morning or late afternoon",
        opening_hours: "Dawn to dusk; approximately 6:00 AM – 7:00 PM"
    },

    31: {
        overview: "Kapan Monastery is a major Tibetan Buddhist monastery on the northern edge of Kathmandu, known for its teachings, meditation programs and views over the Valley. The monastery attracts both local practitioners and international visitors seeking a quieter spiritual setting. Visitors should dress modestly and avoid disrupting prayers or monastic activities.",
        entry_fee: "Free for general visits; donations appreciated; retreats/courses may have separate fees",
        crowds: "Moderate; quieter outside retreat periods",
        time_to_visit: "Morning or late afternoon; avoid active prayer/teaching sessions",
        opening_hours: "Generally daytime; access can vary with monastic activities"
    },

    32: {
        overview: "Indra Chowk is a lively historic square where several of old Kathmandu's market streets meet. The Akash Bhairab Temple anchors the square, while surrounding shops sell textiles, spices, religious goods and everyday products. The combination of commerce, architecture and dense pedestrian movement makes it one of the city's most vivid urban spaces.",
        entry_fee: "Free entry",
        crowds: "High; especially during market hours",
        time_to_visit: "Early morning or late afternoon",
        opening_hours: "Square accessible all day; shops generally open from morning into evening"
    },

    33: {
        overview: "Bhaktapur Durbar Square is a remarkable medieval urban ensemble of palaces, temples, courtyards and traditional brick streets. Highlights include the Golden Gate, 55-Window Palace, Nyatapola and surrounding historic squares. The wider old city makes the visit feel like an open-air museum while still functioning as a living Newari community.",
        entry_fee: "Foreigners: NPR 1,800; Nepali citizens free",
        crowds: "High; especially midday and during festivals",
        time_to_visit: "Early morning or late afternoon",
        opening_hours: "Daytime; major attractions generally accessible from around 6:00 AM–7:00 PM"
    },

    34: {
        overview: "Dakshinkali Temple is a major Hindu pilgrimage site dedicated to Goddess Kali, set among forested hills south of Kathmandu. The temple becomes especially active during Tuesdays, Saturdays and major festivals when devotees gather for worship. Its forest setting makes the journey feel very different from Kathmandu's dense urban temples.",
        entry_fee: "Free temple entry; donations and ritual offerings are voluntary",
        crowds: "Moderate; very high on Saturdays and festival days",
        time_to_visit: "Early morning; avoid peak Saturday crowds if seeking a quieter visit",
        opening_hours: "Generally early morning to evening; roughly 6:00 AM – 7:00 PM"
    },

    35: {
        overview: "Taudaha Lake is a small, peaceful lake south of Kathmandu associated with local legends and valued for its birdlife. It is particularly notable for migratory waterfowl during winter, making it a pleasant stop for nature lovers and birdwatchers. The surrounding hills and water provide a quiet contrast to the nearby urban areas.",
        entry_fee: "Free entry",
        crowds: "Low–moderate",
        time_to_visit: "Early morning; winter is best for migratory birds",
        opening_hours: "Daylight hours"
    },

    36: {
        overview: "Shankha Park is a spacious public green area near the Ring Road in Maharajgunj/Dhumbarahi. It provides lawns, walking paths, trees and open space for exercise, family outings and relaxation. Its free public access makes it more of a neighborhood park than a conventional tourist attraction.",
        entry_fee: "Free entry",
        crowds: "Moderate; busiest in the morning and evening",
        time_to_visit: "Early morning or evening",
        opening_hours: "Approx. 5:00 AM – 7:00 PM"
    },

    37: {
        overview: "Narayanhiti Palace Museum was once the principal royal residence of Nepal and is now a museum preserving the country's modern royal history. Visitors can walk through ceremonial halls, state rooms and royal living spaces, including the famous throne room. The palace provides a different perspective on Nepal's history from the older Malla-era heritage sites.",
        entry_fee: "Foreigners: NPR 1,000; Nepali citizens: NPR 200",
        crowds: "Moderate",
        time_to_visit: "Morning or early afternoon",
        opening_hours: "9:30 AM – 3:30 PM; closed Tuesdays, Wednesdays and public holidays"
    },

    38: {
        overview: "Freak Street, or Jhochhen Tole, was once the heart of Kathmandu's 1960s–70s hippie trail. Today it is quieter, with old guesthouse façades, cafés, local restaurants and traces of its traveler-era history. Its proximity to Kathmandu Durbar Square makes it an easy addition to a heritage walk through old Kathmandu.",
        entry_fee: "Free entry",
        crowds: "Low–moderate",
        time_to_visit: "Morning or late afternoon",
        opening_hours: "Street accessible all day; businesses generally open from late morning into evening"
    },

    39: {
        overview: "Kathmandu Durbar Square is the historic royal center of the capital, filled with temples, courtyards, palace buildings and centuries of Newari craftsmanship. The complex includes Hanuman Dhoka, Kumari Ghar, Kasthamandap and numerous shrines. It is one of the Valley's most important places for understanding Nepal's royal, religious and architectural history.",
        entry_fee: "Foreigners: NPR 1,000; Nepali citizens free",
        crowds: "High; busiest around midday",
        time_to_visit: "Early morning or late afternoon",
        opening_hours: "Square accessible 24 hours; museum/interior sites have daytime hours"
    },

    40: {
        overview: "Pashupatinath is Nepal's most important Hindu temple complex and one of the most sacred Shaivite pilgrimage sites in the world. Set beside the Bagmati River, the complex contains temples, shrines, ghats and ritual spaces that remain active every day. Non-Hindu visitors can explore the surrounding complex but cannot enter the main sanctum.",
        entry_fee: "Foreigners: NPR 1,000; Nepali citizens free",
        crowds: "High; very high during festivals such as Maha Shivaratri",
        time_to_visit: "Early morning or around evening aarti",
        opening_hours: "Main temple: 4:00 AM – 9:00 PM daily; rituals may close sections temporarily"
    }
};


// Merging the details into existing array
destinations.forEach(destination => {
    Object.assign(destination, destinationDetails[destination.id]);
});

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
            <a href="./details.html?id=${destination.id}" class="view-details">
                <button class="view-details-btn outline-btn">View Details</button>
            </a>
        </div>
    `;

    const favBtn = card.querySelector(".add-to-favorites");
    if (favBtn) {
        favBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();

            if (!requireLogin("add to favorites")) return;

            // temporary message (you can improve this later)
            alert(`${destination.name} added to favorites!`);
        });
    }

    return card;
}

const featuredDestinationsContainer = document.getElementById("featured-destinations-container");
const destinationsContainer = document.getElementById("destinations-container");

if (featuredDestinationsContainer) {
    destinations.forEach(destination => {
        if (destination.featured) {
            const card = createDestinationCard(destination);
            featuredDestinationsContainer.appendChild(card);
        }
    });
}

if (destinationsContainer) {
    destinations.forEach(destination => {
        const card = createDestinationCard(destination);
        destinationsContainer.appendChild(card);
    });
}

// Search feature
const search_input = document.getElementById("search-input");
const search_btn = document.querySelector(".search-btn");
const destination_not_found = document.getElementById("destination-not-found");

function search_destinations() {
    const search_text = search_input.value.trim().toLowerCase();
    let found = false;
    destinations.forEach(destination => {
        const destination_name = destination.name.toLowerCase();
        // Find the card belonging to this destination
        const cards = destinationsContainer
            ? destinationsContainer.querySelectorAll(".destination-card")
            : [];
        cards.forEach(card => {
            const card_name = card.querySelector(".destination-name");
            if (card_name && card_name.textContent.toLowerCase() === destination_name) {
                if (destination_name.includes(search_text)) {
                    card.style.display = "";
                    found = true;
                } else {
                    card.style.display = "none";
                }
            }
        });
    });

    // Show/hide "destination not found"
    if (search_text === "" || found) {
        destination_not_found.style.display = "none";
    } else {
        destination_not_found.style.display = "flex";
    }
}

// Search using Enter
if (search_input) {
    search_input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            search_destinations();
        }
    });
}

// Search using button
if (search_btn) {
    search_btn.addEventListener("click", search_destinations);
}


// Category filter
const checkboxes = document.querySelectorAll(".category-checkbox");
function category_filter() {
    const selected_categories = [];
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selected_categories.push(checkbox.value);
        }
    });
    const cards = destinationsContainer.querySelectorAll(".destination-card");
    destinations.forEach((destination, index) => {
        const card = cards[index];
        if (selected_categories.length === 0) {
            card.style.display = "";
        }
        else if (
            selected_categories.some(category =>
                destination.tags.includes(category)
            )
        ) {
            card.style.display = "";
        }
        else {
            card.style.display = "none";
        }
    });
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", category_filter);
});


function add_destination_detials(destination) {
    const main_screen = document.createElement("div");
    main_screen.classList.add("page-container");
    main_screen.innerHTML = `
        <section class="cover-image-section">
            <div class="container">
                <div class="cover-image-container">
                    <img src="${destination.image}" alt="${destination.name}" class="cover-image">
                    <div class="cover-blur"></div>
                    <div class="cover-details">
                        <p class="cover-category body">${destination.category}</p>
                        <h1 class="cover-name display-text">${destination.name}</h1>
                    </div>
                </div>
            </div>
        </section>

        <section class="destination-details-section">
            <div class="destination-details-container container">
                <div class="destination-details-content">
                    <div class="overview">
                        <h3 class="heading-3">Overview</h3>
                        <p class="overview-content body">${destination.overview}</p>
                    </div>
                    <div class="destination-overview-details">
                        <div class="destination-details-card">
                            <p class="destination-detials-title caption">ENTRY FEE</p>
                            <p class="destination-detials-description body-small">${destination.entry_fee}</p> 
                        </div>
                        <div class="destination-details-card">
                            <p class="destination-detials-title caption">CROWDS</p>
                            <p class="destination-detials-description body-small">${destination.crowds}</p>
                        </div>
                        <div class="destination-details-card">
                            <p class="destination-detials-title caption">BEST TIME TO VISIT</p>
                            <p class="destination-detials-description body-small">${destination.time_to_visit}</p>
                        </div>
                        <div class="destination-details-card">
                            <p class="destination-detials-title caption">OPENING HOURS</p>
                            <p class="destination-detials-description body-small">${destination.opening_hours}</p>
                        </div>
                    </div>
                </div>
                <div class="destination-action-card">
                    <h4 class="destination-entry-details heading-4">${destination.entry_fee}</h4>
                    <p class="destination-details-location">${destination.location}</p>
                    <div class="destination-details-ratings">${createStars(destination.rating)}</div>
                    <a href="${destination.map_location}" target="_blank" class="primary-btn" style="text-align: center;">
                        📍 Get Directions
                    </a>
                    <button class="outline-btn">Save to Favorites</button>
                </div>
            </div>
        </section>
    `;

    const saveFavBtn = main_screen.querySelector(".outline-btn");
    if (saveFavBtn) {
        saveFavBtn.addEventListener("click", (e) => {
            e.preventDefault();

            if (!requireLogin("save to favorites")) return;

            alert(`${destination.name} saved to favorites!`);
            // later you can actually store it in sessionStorage
        });
    }

    return main_screen;
}

const detailsPageContent =
    document.getElementById("details-page-content");

if (detailsPageContent) {

    // Get the ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const destinationId = Number(urlParams.get("id"));

    // Find the matching destination
    const destination = destinations.find(
        destination => destination.id === destinationId
    );

    if (destination) {

        // Generate and display the destination details
        const detailsPage =
            add_destination_detials(destination);

        detailsPageContent.appendChild(detailsPage);

    } else {

        // Destination doesn't exist
        detailsPageContent.innerHTML = `
            <div class="container">
                <h2 class="heading-2">Destination not found</h2>
                <p class="body">
                    We couldn't find the destination you're looking for.
                </p>
                <a href="./explore.html" class="primary-btn">
                    Back to Explore
                </a>
            </div>
        `;
    }
}