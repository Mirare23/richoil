export interface Product {
  name: string;
  slug: string;
  price: string;
  rating: number;
  reviews: number;
  image: string[];
  category: string;
  description: string;
  benefits: string[];
  ingredients: string[];
  usage: string;
  specifications: {
    volume: string | null;
    origin: string;
    certification: string;
    shelf_life: string;
    storage: string;
  };
}

export const productDetails: Product[] = [
  {
    name: "Olive Oil",
    slug: "olive-oil",
    price: "Rp. 210.000",
    rating: 4.9,
    reviews: 41,
    image: ["/assets/images/olive-oil/1.jpg", "/assets/images/olive-oil/2.jpg"],
    category: "Cold-Pressed Oil",
    description:
      "RichOil's Olive Oil is a natural oil made from pressed olives, rich in healthy fats and antioxidants. It adds smooth flavor to salads, pastas, and roasted dishes, and is also valued for its benefits in skin and hair care.",
    benefits: [
      "Rich in healthy fats and antioxidants",
      "Adds smooth flavor to dishes",
      "Beneficial for skin and hair care",
    ],
    ingredients: ["100% Pure Olives", "Cold-pressed"],
    usage:
      "Great for salads, pastas, roasted dishes, or as a topical application for hair/skin. Please note that olive oil has a lower smoke point, so it's best used for low to medium-heat cooking or as a finishing oil.",
    specifications: {
      volume: "500 ml",
      origin: "Indonesia",
      certification: "BPOM: 012219000900029",
      shelf_life: "12-24 months",
      storage: "Room temperature away from light",
    },
  },
  {
    name: "Avocado Oil",
    slug: "avocado-oil",
    price: "Rp. 365.000",
    rating: 5.0,
    reviews: 45,
    image: [
      "/assets/images/avocado-oil/1.png",
      "/assets/images/avocado-oil/2.jpg",
      "/assets/images/avocado-oil/3.jpg",
    ],
    category: "Cold-Pressed Oil",
    description:
      "This Avocado seed oil has a mild, buttery flavor, making it a versatile option for various culinary applications. It has a high smoke point, making it suitable for high-heat cooking methods such as sautéing, roasting, and stir-frying. It can also be used in salad dressings, marinades, and dips, adding a rich and smooth texture to dishes.",
    benefits: [
      "High smoke point for high-heat cooking",
      "Mild, buttery flavor",
      "Adds rich texture to dishes",
    ],
    ingredients: ["100% Pure Avocados", "Cold-pressed"],
    usage:
      "Excellent for high-heat cooking, sautéing, roasting, and salad dressings.",
    specifications: {
      volume: "500 ml",
      origin: "Indonesia",
      certification: "BPOM: 12219000600029",
      shelf_life: "12-24 months",
      storage: "Room temperature",
    },
  },
  {
    name: "Walnut Oil",
    slug: "walnut-oil",
    price: "Rp. 185.000",
    rating: 5.0,
    reviews: 12,
    image: [
      "/assets/images/walnut-oil/1.png",
      "/assets/images/walnut-oil/2.jpg",
    ],
    category: "Cold-Pressed Oil",
    description:
      "Derived from the nuts of the walnut tree, RichOil's Walnut Oil is rich in essential fatty acids, antioxidants, and vitamins.",
    benefits: [
      "Rich in essential fatty acids",
      "High in antioxidants",
      "Packed with vitamins",
      "Supports a healthy lifestyle",
    ],
    ingredients: ["100% Pure Walnuts", "Cold-pressed"],
    usage: "Ideal as a dressing or finishing oil for salads and meals.",
    specifications: {
      volume: "250 ml",
      origin: "Indonesia",
      certification: "BPOM: 012219000100029",
      shelf_life: "12-24 months",
      storage: "Room temperature, away from direct sunlight",
    },
  },
  {
    name: "Pumpkin Seed Oil",
    slug: "pumpkin-seed-oil",
    price: "Rp. 219.000",
    rating: 5.0,
    reviews: 18,
    image: [
      "/assets/images/pumpkin-oil/1.png",
      "/assets/images/pumpkin-oil/2.jpg",
    ],
    category: "Cold-Pressed Oil",
    description:
      "RichOil's Pumpkin Seed Oil has a distinct nutty flavor, making it a popular choice for salad dressings, dips, and drizzles. Known for its rich content of essential fatty acids, vitamins, and antioxidants, it is a valuable addition to a balanced diet. ",
    benefits: [
      "Rich in essential fatty acids",
      "High in vitamins and antioxidants",
      "Supports a balanced diet",
    ],
    ingredients: ["100% Pure Pumpkin Seeds", "Cold-pressed"],
    usage: "Popular choice for salad dressings, dips, and drizzles.",
    specifications: {
      volume: "250 ml",
      origin: "Indonesia",
      certification: "BPOM: 012219000300029",
      shelf_life: "12-24 months",
      storage: "Room temperature",
    },
  },
  {
    name: "Flax Seed Oil",
    slug: "flax-seed-oil",
    price: "Rp. 185.000",
    rating: 4.9,
    reviews: 24,
    image: ["/assets/images/flax-seed/1.png", "/assets/images/flax-seed/2.jpg"],
    category: "Cold-Pressed Oil",
    description:
      "Known for its fatty acids that have been linked to heart health, brain function, and inflammation reduction. RichOil's Flax Seed Oil is also often found in skincare routines due to its moisturizing properties, helping to nourish and hydrate the skin.",
    benefits: [
      "Linked to heart health and brain function",
      "Reduces inflammation",
      "Nourishes and hydrates the skin",
    ],
    ingredients: ["100% Pure Flax Seeds", "Cold-pressed"],
    usage:
      "Can be consumed for health benefits or applied topically for skincare.",
    specifications: {
      volume: "250 ml",
      origin: "Indonesia",
      certification: "BPOM: 012219000200029",
      shelf_life: "12-24 months",
      storage: "Refrigerate after opening recommended",
    },
  },
  {
    name: "Black Sesame Seed Oil",
    slug: "black-sesame-seed-oil",
    price: "Rp. 243.000",
    rating: 4.8,
    reviews: 15,
    image: [
      "/assets/images/sesame-oil/1.png",
      "/assets/images/sesame-oil/2.jpg",
    ],
    category: "Cold-Pressed Oil",
    description:
      "This Black Sesame Seed Oil has been used for centuries in traditional medicine and culinary practices for its unique flavor and potential health benefits. Enjoy its unique flavor and explore its culinary versatility with RichOil.",
    benefits: [
      "Used in traditional medicine",
      "Offers unique culinary flavor",
      "Provides various health advantages",
    ],
    ingredients: ["100% Pure Black Sesame Seeds", "Cold-pressed"],
    usage:
      "Great for culinary applications and traditional wellness practices.",
    specifications: {
      volume: "250 ml",
      origin: "Indonesia",
      certification: "BPOM: 012219000100029",
      shelf_life: "12-24 months",
      storage: "Room temperature",
    },
  },
  {
    name: "Black Cumin Seed Oil (Habbatussauda)",
    slug: "black-cumin-seed-oil",
    price: "Rp. 310.000",
    rating: 5.0,
    reviews: 32,
    image: [
      "/assets/images/black-oil/1.png",
      "/assets/images/black-oil/2.jpg",
      "/assets/images/black-oil/3.jpg",
    ],
    category: "Cold-Pressed Oil",
    description:
      "RichOil's Black Cumin Seed Oil has gained immense popularity for its potential effects on overall well-being. It may support digestive health, promote healthy skin and hair, and help maintain a balanced immune system. Studies also suggest positive effects on respiratory health and cardiovascular function.",
    benefits: [
      "Supports digestive health",
      "Promotes healthy skin and hair",
      "Maintains a balanced immune system",
      "May support respiratory and cardiovascular health",
    ],
    ingredients: [
      "100% Pure Black Cumin Seeds (Habbatussauda)",
      "Cold-pressed",
    ],
    usage: "Taken as a daily supplement for immune and digestive support.",
    specifications: {
      volume: "250 ml",
      origin: "Indonesia",
      certification: "BPOM: 212219001000029",
      shelf_life: "12-24 months",
      storage: "Room temperature",
    },
  },
  {
    name: "Mustard Seed Oil",
    slug: "mustard-seed-oil",
    price: "Rp. 190.000",
    rating: 4.7,
    reviews: 9,
    image: [
      "/assets/images/mustard-seed-oil/1.png",
      "/assets/images/mustard-seed-oil/2.jpg",
    ],
    category: "Cold-Pressed Oil",
    description:
      "RichOil's Mustard Seed Oil is a versatile oil commonly used in cooking, particularly in Indian, Pakistani, and Bengali cuisines. This oil is rich in monounsaturated and polyunsaturated fats, as well as omega-3 and omega-6 fatty acids, supporting heart health and lowering cholesterol.",
    benefits: [
      "Rich in monounsaturated and polyunsaturated fats",
      "High in Omega-3 and Omega-6",
      "Beneficial for heart health",
      "May help lower cholesterol",
    ],
    ingredients: ["100% Pure Mustard Seeds", "Cold-pressed"],
    usage: "Ideal for cooking, especially for Indian and Bengali cuisines.",
    specifications: {
      volume: "250 ml",
      origin: "Indonesia",
      certification: "BPOM: 12219000600029",
      shelf_life: "12-24 months",
      storage: "Room temperature",
    },
  },
  {
    name: "Milk Thistle Oil",
    slug: "milk-thistle-oil",
    price: "Rp. 245.000",
    rating: 4.9,
    reviews: 11,
    image: [
      "/assets/images/milk-thistle-oil/1.png",
      "/assets/images/milk-thistle-oil/2.png",
      "/assets/images/milk-thistle-oil/3.jpg",
    ],
    category: "Cold-Pressed Oil",
    description:
      "RichOil's Milk Thistle Oil is a high-quality, cold-pressed oil extracted from the seeds of the Silybum marianum plant. Packed with silymarin, essential fatty acids, and powerful antioxidants, this oil is known for its ability to support liver health, boost skin hydration, and promote overall well-being.",
    benefits: [
      "Packed with silymarin",
      "Supports liver health",
      "Boosts skin hydration",
      "Promotes overall well-being",
    ],
    ingredients: [
      "100% Pure Silybum marianum (Milk Thistle) Seeds",
      "Cold-pressed",
    ],
    usage: "Can be taken as a supplement or applied for skin hydration.",
    specifications: {
      volume: "250 ml",
      origin: "Indonesia",
      certification: "Cold-Pressed Organic",
      shelf_life: "12-24 months",
      storage: "Room temperature",
    },
  },
  {
    name: "Sunflower Seed Oil",
    slug: "sunflower-seed-oil",
    price: "Rp. 200.000",
    rating: 4.8,
    reviews: 21,
    image: [
      "/assets/images/sunflower-oil/1.png",
      "/assets/images/sunflower-oil/2.jpg",
      "/assets/images/sunflower-oil/3.png",
    ],
    category: "Cold-Pressed Oil",
    description:
      "RichOil's Sunflower Seed Oil is a good source of vitamin E, an antioxidant that helps protect the body's cells from damage caused by free radicals. Additionally, it contains essential nutrients like vitamin K and vitamin B6.",
    benefits: [
      "Rich source of Vitamin E",
      "Protects cells from free radical damage",
      "Contains Vitamin K and Vitamin B6",
    ],
    ingredients: ["100% Pure Sunflower Seeds", "Cold-pressed"],
    usage: "Great for daily cooking, roasting, and baking.",
    specifications: {
      volume: "500 ml",
      origin: "Indonesia",
      certification: "BPOM: 012219000800029",
      shelf_life: "12-24 months",
      storage: "Room temperature",
    },
  },
  {
    name: "Chia Seed Oil",
    slug: "chia-seed-oil",
    price: "Rp. 240.000",
    rating: 4.8,
    reviews: 19,
    image: [
      "/assets/images/chia-oil/1.png",
      "/assets/images/chia-oil/2.png",
      "/assets/images/chia-oil/3.png",
    ],
    category: "Cold-Pressed Oil",
    description:
      "RichOil's Chia Seed Oil is a light, golden oil carefully cold-pressed from tiny yet powerful chia seeds. Known as a superfood, chia is naturally rich in Alpha-Linolenic Acid (ALA), an essential Omega-3 fatty acid. A few drops each day can help nourish your body inside and out.",
    benefits: [
      "Rich in Alpha-Linolenic Acid (ALA) and Omega-3",
      "Contains powerful antioxidants, vitamins, and minerals",
      "Nourishes the body inside and out",
    ],
    ingredients: ["100% Pure Chia Seeds", "Cold-pressed"],
    usage: "Use a few drops daily to enhance meals or as a health supplement.",
    specifications: {
      volume: "250 ml",
      origin: "Indonesia",
      certification: "BPOM: 012219000400029",
      shelf_life: "12-24 months",
      storage: "Room temperature",
    },
  },
  {
    name: "Mountain Herbal Tea",
    slug: "mountain-herbal-tea",
    price: "Rp. 135.000",
    rating: 4.9,
    reviews: 28,
    image: [
      "/assets/images/mountain-herbal-tea/1.jpeg",
      "/assets/images/mountain-herbal-tea/2.jpeg",
    ],
    category: "Herbal Tea",
    description:
      "Experience the natural warmth and freshness of RichOil's Mountain Herbal Tea. This premium blend is made from hand-selected ingredients including Ivan tea (fireweed), currant leaves, mint, pear, blackcurrants, and apple—offering a gentle taste and calming aroma.",
    benefits: [
      "Soothing infusion with a calming aroma",
      "Provides natural warmth and freshness",
      "Perfect for relaxing",
    ],
    ingredients: [
      "Ivan tea (fireweed)",
      "Currant leaves",
      "Mint",
      "Pear",
      "Blackcurrants",
      "Apple",
    ],
    usage: "Steep in hot water for a relaxing beverage anytime of day.",
    specifications: {
      volume: null,
      origin: "Indonesia",
      certification: "Natural Blend",
      shelf_life: "12-24 months",
      storage: "Store in a cool, dry place",
    },
  },
  {
    name: "Forest Honey",
    slug: "forest-honey",
    price: "Rp. 200.000",
    rating: 5.0,
    reviews: 56,
    image: [
      "/assets/images/forest-honey/1.jpeg",
      "/assets/images/forest-honey/2.jpeg",
    ],
    category: "Natural Honey",
    description:
      "RichOil's Forest Honey is a 100% natural, unprocessed honey harvested from wild bee hives deep within pristine tropical forests. It captures the rich biodiversity of native flowers and medicinal plants, resulting in a bold, earthy flavor and dark amber color. No added sugar or artificial ingredients.",
    benefits: [
      "100% natural and unprocessed",
      "Rich in biodiversity from medicinal plants",
      "No added sugar or artificial ingredients",
    ],
    ingredients: ["100% Pure Wild Forest Honey"],
    usage:
      "Use as a natural sweetener for tea, food, or take directly for health.",
    specifications: {
      volume: null,
      origin: "Indonesia",
      certification: "100% Natural",
      shelf_life: "Indefinite",
      storage: "Room temperature",
    },
  },
  {
    name: "Ghee Butter",
    slug: "ghee-butter",
    price: "Rp. 140.000",
    rating: 4.9,
    reviews: 34,
    image: [
      "/assets/images/ghee-butter/1.png",
      "/assets/images/ghee-butter/2.png",
    ],
    category: "Clarified Butter",
    description:
      "RichOil's Ghee butter has been cherished for centuries in Ayurvedic tradition as a source of strength, nourishment, and long life. Rich in healthy fats, fat-soluble vitamins (A, D, E, K), and antioxidants, this pure clarified butter helps restore energy and promote overall vitality.",
    benefits: [
      "Source of strength and nourishment",
      "Rich in healthy fats and fat-soluble vitamins (A, D, E, K)",
      "Helps restore energy and overall vitality",
    ],
    ingredients: ["Clarified Butter"],
    usage: "Ideal for cooking, baking, or mixing into warm beverages.",
    specifications: {
      volume: null,
      origin: "Indonesia",
      certification: "100% Natural",
      shelf_life: "12-24 months",
      storage: "Room temperature",
    },
  },
];
