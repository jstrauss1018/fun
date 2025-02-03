// Data extracted from CSV
const data = {
    nationality: ["Brazillian", "Arctic", "Russian", "Maine", "Roumanian", "Turkish style", "Argentinian", "Madagascarian style", "Alaskan", "Philippino", "Japanese", "Chinese", "Norweigian style", "Ethiopian style", "South African", "French", "Spanish", "Greek", "Dubai-style", "Floridian", "Californian", "Pacific", "Local", "Wild", "Impossible", "Native", "Rhode Island", "Dakotan", "English", "Scottish", "Canadian", "Midwestern", "Croatian"],
    adjective: ["encrusted", "heirloom", "locally sourced", "baby", "farm raised", "organic", "small batch", "imported", "spring", "deconstructed", "artisan", "homemade", "crispy", "moist", "drenched", "lightly dressed", "smoked", "heavily dressed", "dusted", "cured", "whipped", "general tso's", "frothy", "frothed", "smashed", "pan seared", "dry rubbed", "brined", "hand-cut", "massaged", "au gratin", "smashed", "rolled", "sous vide", "fried", "roasted", "shaved", "puree", "crumbled", "toad-in-a-hole", "diced", "chiffonaded", "brunoise", "folded", "grilled", "micro", "striped", "fall-off-the-bone", "melted", "spicy", "hot", "creamed", "creamy", "cold", "condensed", "open-faced", "zested", "toasted", "naturally raised", "preserved", "serrano", "seasonal", "velvety", "emulsified", "chilled", "slow roasted", "pickled", "compote", "whole", "kobe", "asada", "wild", "spit-roasted", "street"],
    meat: ["pork", "lamb", "fugu fish", "fluke", "snapper", "rabbit", "frog", "veal", "beef", "halibut", "yellowtail", "steak", "blue crab", "dunganess crab", "lobster", "blue lobster", "king crab", "ox", "duck", "goose", "swan", "ostrich", "squab", "poussain", "capon", "oyster", "chicken", "crawfish", "snake", "octopus", "black cod", "rockfish","shark", "axolotl", "cuttlefish", "mahi mahi", "dolphin", "seitan", "marsupial"],
    bodyPart: ["leg", "shank", "belly", "shoulder", "cheek", "toe", "brain", "lung", "liver", "tail", "thigh", "breast", "flank", "rib", "foot", "claw", "forehead", "neck", "tendon", "tenderloin", "knee joint", "head", "toes", "cartilage", "osso bucco", "jowl", "rump", "throat", "fillet", "freckle", "hair follicles", "gland"],
  preposition: ["on a bed of", "on a bunkbed of", "alongside", "topped with", "paired with", "wrapped in", "layered on", "stuffed with", "nestled on", "on a pillow of", "engorged with", "swollen on", "choked with",  
"asphyxiated by", "with a hint of", "near a waft of", "drowning in distilled", "wading in shallow pools of", "germinated by", "pollinated with", "impregnated by", "with a mere suggestion of", "under a drizzle of",  
"cloaked in", "bathed in the essence of", "kissed by", "smothered in", "delicately brushed with", "submerged in", "whispering notes of", "suffused with", "saturated by", "tenderly infused with",  
"enveloped in", "steeped in", "imbued with", "glazed in", "exuding the aroma of", "encrusted with", "laced with", "tinged with", "marinated in the whispers of", "coaxed into",  
"wrapped in the embrace of", "shrouded by", "buried under layers of", "trickling through", "swaddled in", "buoyed by the scent of", "misted with", "glistening in", "entwined with",  
"wafting through", "perfumed by", "bound together with", "suspended in the air of", "smeared with", "clinging to", "hovering in the presence of", "con"],
    sideDish: ["panzanella", "sweetbreads", "head cheese", "an organic omelet of", "fricasse", "ratatouille", "baba ganoush", "polenta", "chili", "taco", "granita", "parmesan-herb", "mache", "ricotta salata",  
"fennel slaw", "braised endives", "creamed spinach", "succotash", "kimchi", "cornbread", "wild rice pilaf", "confit potatoes", "tzatziki", "spaetzle", "roasted beets", "collard greens", "celeriac puree",  
"haricots verts", "farro salad", "pickled daikon", "charred broccolini", "fried green tomatoes", "sautéed mushrooms", "carrot-ginger mash", "black-eyed peas", "chimichurri roasted carrots",  
"grilled asparagus", "buttered turnips", "pomme purée", "paneer tikka", "chapati", "soba noodle salad", "stuffed grape leaves", "fava bean hummus", "crispy Brussels sprouts", "pickled red onions",  
"jicama slaw", "seaweed salad", "yuca fries", "spicy cucumber salad", "smoked eggplant", "cabbage pancakes"],

    fruitVeg: ["nettle", "onion", "brocollini", "beet", "carrot", "tomatillo", "garlic", "fennel", "orange", "cauliflower", "kale", "dandelion", "seitan", "turnip", "trumpet mushroom", "shitake mushroom", "oyster mushroom", "hominy", "falaffel", "jicama", "watermelon", "radish", "watermelon radish", "spinach", "arugula", "leaf", "lemon", "tofu", "soybean", "edamame", "achiote", "acai", "fiddlehead fern", "ramp", "poppyseed", "cornichon", "potato", "shiso", "yuzu", "endive", "glazed turnips", "basil", "yellow romano beans", "haricots", "pea shoots", "pink pineapple", "coconut"],
    ingredient: ["chili threads", "wasabi", "saffron", "african bird pepper", "hungarian paprika", "harissa", "meringue", "cinnamon stick", "vanilla bean", "queso blanco", "cilantro", "vinegar", "whiskey", "jasmine", "rind", "green tea", "parsley sauce", "sweet pepper relish", "crispy potato", "flowering coriander"],
    sauce: ["anglaise", "au poivre", "au jus", "cream", "vinaigrette", "foam", "reduction", "aioli", "vinaigrette", "ganache", "bernaise", "demi glace", "gremolata", "beurre blanc", "hoisin", "salsa", "mirepoix", "chimichurri", "ragu", "glaze", "ponzu", "creme fraiche"]
};

// Function to generate a random dish
function generateDish() {
    const dishText = `${randomWord('nationality')} ${randomWord('adjective')} ${randomWord('meat')} ${randomWord('bodyPart')} ${randomWord('preposition')} ${randomWord('sideDish')} ${randomWord('fruitVeg')} and ${randomWord('ingredient')} ${randomWord('sauce')}`;
    const randomPrice = `$${Math.floor(Math.random() * (500 - 50) + 50)}`; // Generates a random price between $50 and $500 without decimals

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

