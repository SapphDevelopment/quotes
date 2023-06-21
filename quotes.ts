enum categories {
  "inspiration",
  "motivation",
  "love",
  "success",
  "perseverance",
  "wisdom",
}

interface Quote {
  text: string;
  author: string;
  category: categories;
  tags: string[];
}

const quote: Quote[] = [
  {
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
    category: categories.inspiration,
    tags: ["time", "life", "individuality"],
  },
  {
    text: "Imagination is more important than knowledge.",
    author: "Albert Einstein",
    category: categories.inspiration,
    tags: ["imagination", "knowledge"],
  },
];
