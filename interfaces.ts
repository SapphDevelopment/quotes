export enum categories {
  inspiration = "inspiration",
  motivation = "motivation",
  love = "love",
  success = "success",
  happy = "happy",
  perseverance = "perseverance",
  wisdom = "wisdom",
}

export interface Quote {
  text: string;
  author: string;
  category: categories;
  tags: string[];
}
