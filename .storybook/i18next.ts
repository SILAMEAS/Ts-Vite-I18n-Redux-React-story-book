import {initReactI18next} from 'react-i18next';
import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import {en, fr} from '../src/i18n/lan';

const ns = ['common'];
const supportedLngs = ['en', 'fr'];
const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
};

i18n.use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    //debug: true,
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: 'common',
    interpolation: {escapeValue: false},
    react: {useSuspense: false},
    resources,
    ns,
    supportedLngs,
  });

export default i18n;
