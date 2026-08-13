export const navigation = [
  { label: "Početna", href: "/" },
  { label: "Rad sa decom", href: "/rad-sa-decom/" },
  { label: "O školi", href: "/o-skoli/" },
  { label: "Lokacije", href: "/lokacije/" },
  { label: "Kontakt", href: "/kontakt/" },
] as const;

export const navCopy = {
  desktopCta: "Pozovi školu",
  mobileOpen: "Otvori meni",
  mobileClose: "Zatvori meni",
  skipLink: "Pređi na glavni sadržaj",
} as const;
