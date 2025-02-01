// Data extracted from your CSV file
const data = {
    nationality: ["Brazillian", "Arctic", "Russian", "Maine", "Roumanian"],
    adjective: ["Encrusted", "Heirloom", "Locally sourced", "Baby", "Farm raised"],
    meat: ["Pork", "Lamb", "Fugu fish", "Fluke", "Snapper"],
    bodyPart: ["Leg", "Shank", "Belly", "Shoulder", "Cheek"],
    preposition: ["on a bed of", "on a bunkbed of", "with a", "alongside", "topped with"],
    sideDish: ["Panzanella", "Sweetbreads", "Head cheese", "Omelet", "Fricasse"],
    fruitVeg: ["Nettle", "Onion", "Broccolini", "Beet", "Carrot"],
    ingredient: ["Chili threads", "Wasabi", "Saffron", "African bird pepper", "Hungarian paprika"],
    sauce: ["Anglaise", "Au poivre", "Au jus", "Cream", "Vinaigrette"]
};

// Function to generate a random dish
function generateDish() {
    const dishText = `${randomWord('nationality')} ${randomWord('adjective')} ${randomWord('meat')} ${randomWord('bodyPart')} ${randomWord('preposition')} ${randomWord('sideDish')} with ${randomWord('fruitVeg')}, ${randomWord('ingredient')}, and ${randomWord('sauce')}.`;

    let dishElement = document.getElementById("dish");
    
    // Hide the text momentarily for effect
    dishElement.classList.remove("show");
    
    setTimeout(() => {
        dishElement.textContent = dishText;
        dishElement.classList.add("show");
    }, 200);  // Slight delay before showing new text
}

// Helper function to pick a random word from a category
function randomWord(category) {
    let words = data[category].filter(word => word !== ""); // Remove empty values
    return words.length > 0 ? words[Math.floor(Math.random() * words.length)] : "";
}
