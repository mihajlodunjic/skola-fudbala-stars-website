const siteUrl = (import.meta.env.SITE_URL || "https://www.skolafudbalastars.rs").replace(/\/+$/, "");

export const business = {
  displayName: "Škola fudbala STARS",
  formalDisplayName: "Škola Fudbala Stars Beograd",
  legalName: "FUDBALSKI KLUB STARS",
  alternateNames: ["FK Stars", "FK STARS"],
  foundedAt: "2011-04-28",
  foundedDisplay: "28. april 2011.",
  foundedYear: "2011",
  city: "Beograd",
  registeredAddress: {
    street: "Strahinjića Bana 82",
    city: "Beograd",
    usage: "registered-only",
  },
  phone: {
    display: "064 981 27 07",
    href: "tel:+381649812707",
    international: "+381649812707",
    confirmationStatus: "requires-final-confirmation",
  },
  email: {
    display: "skolafudbalastars@gmail.com",
    href: "mailto:skolafudbalastars@gmail.com",
    confirmationStatus: "requires-final-confirmation",
  },
  description:
    "Škola fudbala STARS radi sa decom kroz učenje osnovnih elemenata igre, timski rad, druženje i pedagoški pristup.",
  siteUrl,
  logo: {
    original: "/logo.png",
    cropped: "/brand/logo-stars-cropped.png",
    alt: "Škola fudbala STARS",
    width: 438,
    height: 438,
  },
  socialPreview: "/social/stars-og.png",
} as const;

export const contactLinks = {
  phone: business.phone.href,
  email: business.email.href,
  emailWithSubject: `${business.email.href}?subject=${encodeURIComponent(
    "Upit za grupu — Škola fudbala STARS",
  )}`,
} as const;
