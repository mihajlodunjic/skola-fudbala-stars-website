import { business } from "./business";

export interface PageSeo {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  path: string;
  noindex?: boolean;
}

export const pageSeo = {
  home: {
    path: "/",
    title: "Škola fudbala STARS Beograd | Fudbal za decu",
    description:
      "Škola fudbala STARS u Beogradu spaja fudbalski rad sa druženjem, timskim duhom i razvojem dobrih navika kod dece.",
    ogTitle: "Škola fudbala STARS Beograd",
    ogDescription: "Fudbal, druženje i razvoj dobrih navika kroz organizovan rad sa decom.",
  },
  childWork: {
    path: "/rad-sa-decom/",
    title: "Rad sa decom | Škola fudbala STARS Beograd",
    description:
      "Saznajte kako Škola fudbala STARS povezuje fudbalske osnove, timski rad, druženje i razvoj dobrih navika kod dece.",
  },
  about: {
    path: "/o-skoli/",
    title: "O Školi fudbala STARS | Beograd",
    description:
      "Škola fudbala STARS radi sa decom u Beogradu od 2011. godine, uz fudbalski, grupni i pedagoški pristup.",
  },
  locations: {
    path: "/lokacije/",
    title: "Lokacije treninga | Škola fudbala STARS Beograd",
    description:
      "Proverite aktuelne lokacije, grupe i termine treninga Škole fudbala STARS u Beogradu.",
  },
  contact: {
    path: "/kontakt/",
    title: "Kontakt | Škola fudbala STARS Beograd",
    description:
      "Kontaktirajte Školu fudbala STARS i proverite aktuelne grupe, lokacije i termine treninga u Beogradu.",
  },
  notFound: {
    path: "/404.html",
    title: "404 | Škola fudbala STARS Beograd",
    description: "Stranica koju tražite nije dostupna.",
    noindex: true,
  },
} satisfies Record<string, PageSeo>;

export const absoluteUrl = (path = "/") => {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(cleanPath, `${business.siteUrl}/`).href;
};

export const canonicalUrl = (path: string) => absoluteUrl(path);

export const ogImageUrl = () => absoluteUrl(business.socialPreview);
