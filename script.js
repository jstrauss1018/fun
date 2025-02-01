// Data extracted from your CSV file
const data = {
    nationality: ["Brazillian", "Arctic", "Russian", "Maine", "Roumanian", "Turkish", "Argentinian", "Madagascarian", "Alaskan", "Philippino", "Japanese", "Chinese", "Norweigian", "Ethiopian", "South African", "French", "Spanish", "Greek", "Dubai", "Floridian", "Californian", "Pacific", "Local", "Wild"],
    adjective: ["encrusted", "heirloom", "locally sourced", "baby", "farm raised", "organic", "small batch", "imported", "spring", "deconstructed", "artisan", "homemade", "crispy", "moist", "drenched", "lightly", "smoked", "heavily", "dusted", "cured", "whipped", "general tso's", "frothy", "frothed", "smashed", "pan seared", "dry rubbed", "brined", "hand-cut", "massaged", "au gratin", "smashed", "rolled", "sous vide", "fried", "roasted", "shaved", "puree", "crumbled", "toad-in-a-hole", "diced", "chiffonaded", "brunoise", "folded", "grilled", "micro", "striped", "fall-off-the-bone", "melted", "spicy", "hot", "creamed", "creamy", "cold", "condensed", "open-faced", "zested", "toasted", "naturally raised", "preserved", "serrano", "seasonal", "velvety", "emulsified", "chilled", "slow roasted", "pickled", "compote", "whole", "kobe", "asada", "wild", "spit-roasted"],
    meat: ["pork", "lamb", "fugu fish", "fluke", "snapper", "rabbit", "frog", "veal", "beef", "halibut", "yellowtail", "steak", "blue crab", "dunganess crab", "lobster", "blue lobster", "king crab", "ox", "duck", "goose", "swan", "ostrich", "squab", "poussain", "capon", "oyster", "chicken", "crawfish", "snake", "octopus", "black cod", "rockfish"],
    bodyPart: ["leg", "shank", "belly", "shoulder", "cheek", "toe", "brain", "lung", "liver", "tail", "thigh", "breast", "flank", "rib", "foot", "claw", "forehead", "neck", "tendon", "tenderloin", "knee joint", "head", "toes", "cartilage", "osso bucco", "jowl", "rump", "throat", "fillet"],
    preposition: ["on a bed of", "on a bunkbed of", "alongside", "topped with", "paired with", "wrapped in", "layered on", "stuffed with", "nestled on", "on a pillow of", "engorged with", "swollen on", "choked with"],
    sideDish: ["panzanella", "sweetbreads", "head cheese", "omelet", "fricasse", "ratatouille", "baba ganoush", "polenta", "chili", "taco", "granita", "parmesan-herb", "mache", "ricotta salata"],
    fruitVeg: ["nettle", "onion", "brocollini", "beet", "carrot", "tomatillo", "garlic", "fennel", "orange", "cauliflower", "kale", "dandelion", "seitan", "turnip", "trumpet mushroom", "shitake mushroom", "oyster mushroom", "hominy", "falaffel", "jicama", "watermelon", "radish", "watermelon radish", "spinach", "arugula", "leaf", "lemon", "tofu", "soybean", "edamame", "achiote", "acai", "fiddlehead fern", "ramp", "poppyseed", "cornichon", "potato", "shiso", "yuzu", "endive", "glazed turnips", "basil", "yellow romano beans"],
    ingredient: ["chili threads", "wasabi", "saffron", "african bird pepper", "hungarian paprika", "harissa", "meringue", "cinnamon stick", "vanilla bean", "queso blanco", "cilantro", "vinegar", "whiskey", "jasmine", "rind", "green tea", "parsley sauce", "sweet pepper relish", "crispy potato", "flowering coriander"],
    sauce: ["anglaise", "au poivre", "au jus", "cream", "vinaigrette", "foam", "reduction", "aioli", "vinaigrette", "ganache", "bernaise", "demi glace", "gremolata", "beurre blanc", "hoisin", "salsa", "mirepoix", "chimichurri", "ragu", "glaze", "ponzu", "creme fraiche"]
};

// Function to generate a random dish
function generateDish() {
    const dishText = `${randomWord('nationality')} ${randomWord('adjective')} ${randomWord('meat')} ${randomWord('bodyPart')} ${randomWord('preposition')} ${randomWord('sideDish')} ${randomWord('fruitVeg')} and ${randomWord('ingredient')} ${randomWord('sauce')}`;
    const randomPrice = `$${(Math.random() * (500 - 50) + 50).toFixed(2)}`; // Generates a random price between $50 and $500

    let dishElement = document.getElementById("dish");

    // Hide the text momentarily for effect
    dishElement.classList.remove("show");

    // Play sound effect
    let audio = new Audio('ding.mp3'); // Make sure the sound file is in the same folder or update path
    audio.play();

    setTimeout(() => {
        dishElement.textContent = `${dishText} - ${randomPrice}`;
        dishElement.classList.add("show");
    }, 200);  // Slight delay before showing new text
}


// Helper function to pick a random word from a category
function randomWord(category) {
    let words = data[category].filter(word => word !== ""); // Remove empty values
    return words.length > 0 ? words[Math.floor(Math.random() * words.length)] : "";
}

