import { ui, defaultLang, type Lang, type TranslationKey } from "./ui";

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang === "cs") return "cs";
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey): string {
    return ui[key][lang] ?? ui[key][defaultLang];
  };
}

export function getLocalizedPath(lang: Lang, path: string = ""): string {
  if (lang === defaultLang) return `/${path}`;
  return `/${lang}/${path}`;
}

export function getAlternateLanguage(lang: Lang): Lang {
  return lang === "en" ? "cs" : "en";
}
