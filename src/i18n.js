import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from "i18next-browser-languagedetector";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
/*const resources = {
    en: {
      translation: {
        "welcome": "Welcome!",
        "about": "About",
        "projects": "Projects",
        "experience": "Experience"
      }
    },
    fi: {
      translation: {
        "welcome": "Tervetuloa!", // Burada "welcome" anahtarı eksikti
        "about": "Tietoa",
        "projects": "Projektit",
        "experience": "Kokemus"
      }
    }
  };*/

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(Backend)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    debug: true,
    
    
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    backend: {
      
      loadPath: '/locales/{{lng}}/translation.json',
    }
  });

  export default i18n;