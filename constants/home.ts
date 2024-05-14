import { IHappyCustomers, IHeroStats, INewArivals } from "@/interfaces/home";

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

export const OurHappyCustomersData: IHappyCustomers[] = [
  {
    rating: 5,
    name: "Alex K",
    verified: true,
    desc: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    rating: 4,
    name: "James L.",
    verified: true,
    desc: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    rating: 5,
    name: "Sarah M.",
    verified: true,
    desc: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    rating: 4,
    name: "john D",
    verified: true,
    desc: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    rating: 5,
    name: "Alex K",
    verified: true,
    desc: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    rating: 3.5,
    name: "Maria S",
    verified: true,
    desc: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    rating: 5,
    name: "Nikole R.",
    verified: true,
    desc: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
];
