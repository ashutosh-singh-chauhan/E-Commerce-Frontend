export interface IHeroStats {
  title: string;
  subTitle: string;
}

export interface INewArivals {
  id: string;
  title: string;
  price: number;
  maxRating: number;
  averageRating: number;
  imageUrl: string;
  discountedPrice?: number;
  discountPercentage?: number;
}
