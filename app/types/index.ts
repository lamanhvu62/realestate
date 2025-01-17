interface BannerType {
  id: string;
  bed: string;
  shower: string;
  area: string;
  address: string;
  desc: string;
  price: string;
  link: string;
  img: string;
  name: string;
  active: boolean;
  hot: boolean;
  order: string;
}

interface PartnerType {
  id: string;
  img: string;
  name: string;
  active: boolean;
  order: string;
}

export type { BannerType, PartnerType };
