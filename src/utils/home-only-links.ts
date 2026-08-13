export const homeOnlyHref = (href: string) =>
  href.startsWith("/") && !href.startsWith("//") && href !== "/" ? "/" : href;
