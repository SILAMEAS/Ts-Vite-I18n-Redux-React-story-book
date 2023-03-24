import en from '@/i18n/lan/en.json';
import fr from '@/i18n/lan/fr.json';

type LanguageType = keyof typeof en;

const Localization = <T extends LanguageType>(
  key: T,
  prop: keyof typeof fr[T],
): string => {
  return `${key}.${prop as string}`;
};
export {en, fr, Localization};
