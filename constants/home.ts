import { IHeroStats, INewArivals } from "@/interfaces/home";

export const HeroSectionStats: IHeroStats[] = [
  {
    title: "200+",
    subTitle: "International Brands",
  },
  {
    title: "2000+",
    subTitle: "High-Quality Products",
  },
  {
    title: "30,000+",
    subTitle: "High-Quality Products",
  },
];

export const HeroNewArivals: INewArivals[] = [
  {
    id: "1",
    title: "T-Shirt with Tape Details",
    price: 120,
    maxRating: 5,
    averageRating: 4.5,
    imageUrl: "/products/article1.png",
  },
  {
    id: "2",
    title: "Skinny Fit Jeans",
    price: 260,
    maxRating: 5,
    averageRating: 3.5,
    imageUrl: "/products/article2.png",
    discountedPrice: 240,
    discountPercentage: 20,
  },
  {
    id: "3",
    title: "Slim-Fit Jogger",
    price: 180,
    maxRating: 5,
    averageRating: 4.5,
    imageUrl: "/products/article5.webp",
  },
  {
    id: "4",
    title: "Sleeve Striped T-Shirt",
    price: 160,
    maxRating: 5,
    averageRating: 4.5,
    imageUrl: "/products/article4.png",
    discountedPrice: 130,
    discountPercentage: 30,
  },
];
