export interface Product {
  id: number;                // unique identifier
  name: string;              // product name
  description: string;       // short description
  price: number;             // price in KZT
  rating: number;            // 1–5 (can be decimal)
  images: string[];          // gallery images (min 3)
  link: string;              // kaspi link
  likes: number;            // number of likes
  categoryId: number;       // category id
}
