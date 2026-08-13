import { business } from "./business";

const phone = business.phone.display;

export const siteCopy = {
  home: {
    hero: {
      metadata: "BEOGRAD · OD 2011.",
      h1: "Fudbal, druženje i dobre navike od prvog treninga",
      intro:
        "Škola fudbala STARS radi sa decom kroz učenje osnovnih elemenata igre, timski rad, druženje i pedagoški pristup.",
      primaryCta: "Pozovi za informacije",
      secondaryCta: "Kako radimo",
      note: phone,
    },
    development: {
      metadata: "ST/01 · RAD SA DECOM",
      h2: "Trening koji razvija igru i odnos prema timu",
      intro:
        "Rad sa decom povezuje fudbalske osnove sa navikama koje su važne u grupi, na treningu i van terena.",
      cta: "Pogledaj način rada",
    },
    editorial: {
      metadata: "ST/02 · PEDAGOŠKI PRISTUP",
      h2: "Igra i odgovornost rastu zajedno",
      text:
        "Fudbal je prostor u kojem dete uči da prati igru, sarađuje, preuzme svoj deo zadatka i razume ulogu u grupi. Zato STARS povezuje sportski rad sa druženjem, socijalizacijom i razvojem navika.",
      link: "Više o radu sa decom",
    },
    groups: {
      metadata: "ORGANIZACIJA RADA",
      h2: "Rad prilagođen dečjim grupama",
      text:
        "Treninzi se organizuju u grupama kako bi deca radila u odgovarajućem okruženju. Za aktuelnu podelu, godišta i dostupnu grupu kontaktirajte školu.",
      cta: "Pitaj za odgovarajuću grupu",
    },
    locations: {
      metadata: "ST/03 · BEOGRAD",
      h2: "Treninzi na više lokacija u Beogradu",
      text:
        "Grupe, lokacije i termini mogu da se menjaju tokom sezone. Pozovite školu i proverite koja aktuelna lokacija i grupa odgovaraju vašem detetu.",
      primaryCta: "Proveri lokaciju i termin",
      secondaryLink: "Pogledaj lokacije",
    },
    continuity: {
      metadata: "FK STARS",
      visual: business.foundedYear,
      h2: "Kontinuitet rada sa decom od 2011.",
      text:
        "FUDBALSKI KLUB STARS osnovan je 28. aprila 2011. godine. Dugogodišnji rad škole vezan je za dečji fudbal, grupne treninge, druženje i razvoj sportskih navika.",
      cta: "Pročitaj o školi",
    },
    activities: {
      metadata: "SPORTSKO ISKUSTVO",
      h2: "Treninzi, takmičarsko iskustvo i pripreme",
      intro:
        "Tokom dosadašnjeg rada aktivnosti škole obuhvatale su redovne treninge, učešće mlađih kategorija u takmičarskim aktivnostima i organizovane fudbalske pripreme.",
      note: "Aktuelne aktivnosti i kalendar proverite direktno sa školom.",
    },
    finalCta: {
      metadata: "INFORMACIJE ZA RODITELJE",
      h2: "Koja grupa, lokacija i termin odgovaraju vašem detetu?",
      text:
        "Pozovite školu ili pošaljite e-mail. U poruci možete navesti godište deteta i deo grada koji vam odgovara.",
      primaryCta: `Pozovi ${phone}`,
      secondaryCta: "Pošalji e-mail",
    },
  },
  childWork: {
    hero: {
      metadata: "NAČIN RADA",
      h1: "Fudbalski razvoj počinje načinom rada",
      intro:
        "STARS povezuje učenje fudbalske igre sa druženjem, navikama i razumevanjem uloge deteta u grupi.",
      cta: "Pitaj za odgovarajuću grupu",
    },
    sections: [
      {
        metadata: "01 · FUDBAL",
        h2: "Osnovni elementi igre, korak po korak",
        text:
          "Rad sa decom polazi od osnovnih elemenata fudbalske igre. Cilj je da dete uči kroz organizovan trening i da stečeno razumevanje koristi u radu sa grupom.",
      },
      {
        metadata: "02 · NAVIKE",
        h2: "Odnos prema radu gradi se i na treningu",
        text:
          "Redovan sportski rad pomaže detetu da razvija radne i životne navike. Trening donosi zadatak, ponavljanje, saradnju i odgovornost prema grupi.",
      },
      {
        metadata: "03 · TIM",
        h2: "Svako dete ima ulogu u grupi",
        text:
          "Fudbal nije samo odnos deteta i lopte. Dete uči da prati saigrače, komunicira, deli prostor i doprinese zajedničkoj igri.",
      },
      {
        metadata: "04 · IGRA",
        h2: "Takmičenje uz poštovanje igre",
        text:
          "Zdrav takmičarski duh podrazumeva želju za igrom i napretkom, ali i odnos prema saigračima, protivniku i pravilima.",
      },
    ],
    groupContact: {
      h2: "Prava informacija počinje godištem i lokacijom",
      text:
        "Za aktuelnu podelu grupa kontaktirajte školu. U razgovoru možete navesti godište deteta i deo Beograda koji vam odgovara.",
      primaryCta: "Pozovi za informacije",
      secondaryCta: "Pošalji e-mail",
    },
  },
  about: {
    hero: {
      metadata: "ŠKOLA FUDBALA STARS",
      h1: "Dečji fudbal, grupa i dobre navike",
      intro: "STARS je škola fudbala iz Beograda usmerena na sportski i pedagoški rad sa decom.",
      cta: "Kontaktiraj školu",
    },
    founded: {
      metadata: "28. APRIL 2011.",
      h2: "Kontinuitet koji traje od 2011.",
      text:
        "FUDBALSKI KLUB STARS osnovan je 28. aprila 2011. godine. Rad škole tokom godina ostao je vezan za dečji fudbal, grupne treninge i sportsko odrastanje.",
    },
    identity: {
      h2: "Fudbalski i pedagoški rad u istoj ekipi",
      text:
        "Učenje igre prati rad na druženju, socijalizaciji, radnim navikama i razumevanju uloge deteta u grupi. Fudbal je sredstvo sportskog razvoja, ali i zajedničkog iskustva.",
    },
    organization: {
      h2: "Rad organizovan kroz dečje grupe",
      text:
        "Škola organizuje rad u grupama i na više lokacija u Beogradu. Aktuelna podela, godišta i termini proveravaju se direktno sa školom.",
    },
    activities: {
      h2: "Iskustvo treninga, takmičenja i priprema",
      text:
        "Dosadašnji rad STARS-a obuhvatao je redovne treninge, takmičarske aktivnosti mlađih kategorija i organizovane fudbalske pripreme.",
      note: "Za aktuelne aktivnosti i plan škole kontaktirajte STARS.",
    },
    finalCta: {
      h2: "Proverite aktuelnu grupu za svoje dete",
      text: "Pozovite školu i raspitajte se o grupama, lokacijama i terminima.",
      cta: "Pozovi školu",
    },
  },
  locations: {
    hero: {
      metadata: "TRENING U BEOGRADU",
      h1: "Pronađite grupu i lokaciju koja vam odgovara",
      intro:
        "STARS organizuje treninge na više lokacija u Beogradu. Aktuelna dostupnost zavisi od grupe i sezone.",
      cta: "Proveri aktuelnu lokaciju",
    },
    dynamic: {
      h2: "Lokacije i termini prate organizaciju grupa",
      text:
        "Raspored se može menjati tokom sezone. Za najtačniju informaciju o lokaciji, grupi i terminu pozovite školu ili pošaljite e-mail.",
    },
    inquiry: {
      h2: "Šta možete da navedete u upitu",
      intro: "Da bi razgovor bio jednostavniji, možete navesti:",
      items: ["godište deteta", "deo grada koji vam odgovara", "telefon ili e-mail za odgovor"],
      primaryCta: `Pozovi ${phone}`,
      secondaryCta: "Pošalji e-mail",
    },
  },
  contact: {
    hero: {
      metadata: "KONTAKT",
      h1: "Razgovarajmo o grupi, lokaciji i terminu",
      intro:
        "Za aktuelne informacije o grupama i treninzima kontaktirajte Školu fudbala STARS telefonom ili e-mailom.",
      primaryCta: "Pozovi školu",
      secondaryCta: "Pošalji e-mail",
    },
    phone: {
      label: "Telefon",
      value: phone,
      cta: `Pozovi ${phone}`,
    },
    email: {
      label: "E-mail",
      value: business.email.display,
      cta: "Pošalji e-mail",
      subject: "Upit za grupu — Škola fudbala STARS",
    },
    social: {
      h2: "Pratite aktivnosti škole",
    },
    useful: {
      h2: "Informacije koje možete navesti",
      text:
        "U poruci možete navesti godište deteta, deo grada koji vam odgovara i broj telefona na koji škola može da vam odgovori.",
    },
  },
  notFound: {
    metadata: "404",
    h1: "Lopta je izašla van terena.",
    text:
      "Stranica koju tražite nije dostupna. Vratite se na početnu stranicu ili otvorite kontakt.",
    primaryCta: "Vrati se na početnu",
    secondaryCta: "Otvori kontakt",
  },
  footer: {
    name: business.displayName,
    text: "Fudbal, druženje i razvoj dobrih navika kroz rad sa decom.",
    infoLine: "FUDBALSKI KLUB STARS · Beograd · Osnovan 2011.",
    backToTop: "Nazad na vrh",
  },
} as const;
