export interface ProductInterface {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export const products: ProductInterface[] = [
  {
    id: 0,
    name: "Sisanje",
    description: "Sisam kao Stiven Segal sto bije kriminalce, to znaci jako.",
    price: 1000,
    image: 'http://localhost:8080/mf_app_sisanje.jpg',
  },
  {
    id: 1,
    name: "Feniranje",
    description: "Maksimalno korektan, fenriam extra i bez opekotina. Pazim na svoje klijente.",
    price: 2000,
    image: 'http://localhost:8080/mf_app_feniranje.png',
  },
  {
    id: 2,
    name: "Brijanje",
    description: "Pazi da te ne posecemm, saim se radim ovo do jaja.",
    price: 500,
    image: 'http://localhost:8080/mf_app_brijanje.jpg',
  },
  {
    id: 3,
    name: "Pranje kose",
    description: "Perem i masiram u isto vreme, devojacki san.",
    price: 700,
    image: 'http://localhost:8080/mf_app_pranje_kose.png',
  },
  {
    id: 4,
    name: "Farbanje kose",
    description: "Farbam extra, ne ostavljam ne red za sobom i dajem sve od sebe!",
    price: 1400,
    image: 'http://localhost:8080/mf_app_farbanje.jpg',
  },
  {
    id: 5,
    name: "Cupanje obrva",
    description: "Cupam tako da bubuljice ne ostavljam. Radim japanske, korjeske, americke.",
    price: 300,
    image: 'http://localhost:8080/mf_app_cupanje_obrva.jpg',
  },
];